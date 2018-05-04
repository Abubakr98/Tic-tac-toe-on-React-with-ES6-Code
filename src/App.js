import React from 'react';
import Block from './Block.js';
class App extends React.Component {
  state = {
    player: true,
    pole: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    players: {
      "player1": 0,
      "player2": 0
    }
  }
  handleUser(res, key, symbol) {
    if (res === true) {
      if (this.state.player === true) {
        this.setState({player: false});
        for (var i = 0; i < this.state.pole.length; i++) {
          if (i === (key - 1)) {
            this.state.pole[i] = "X";
          }
        }
        // console.log(this.state.pole); ////////////////////////////////////////////
        this.whoWon();
        return "X";
      }
      if (this.state.player === false) {
        this.setState({player: true});
        for (var i = 0; i < this.state.pole.length; i++) {
          if (i === (key - 1)) {
            this.state.pole[i] = "O";
          }
        }
        // console.log(this.state.pole); ///////////////////////////////
        this.whoWon();
        return "O";
      }
    } else if (res === "hoverIn") {
      if (this.state.player === true) {
        for (var i = 0; i < this.state.pole.length; i++) {
          if (i === (key - 1)) {
            this.state.pole[i] = "X ";
          }
        }
        this.setState({pole: this.state.pole});
      }
      if (this.state.player === false) {
        for (var i = 0; i < this.state.pole.length; i++) {
          if (i === (key - 1)) {
            this.state.pole[i] = "O ";
          }
        }
        this.setState({pole: this.state.pole});
      }
    } else if (res === "hoverOut") {
      for (var i = 0; i < this.state.pole.length; i++) {
        if (i === (key - 1)) {
          if (this.state.pole[i] == "X " || this.state.pole[i] == "O ") {
            this.state.pole[i] = "";
            this.setState({pole: this.state.pole});
          }
        }
      }

    }
  }

  refresh() {
    this.setState({
      pole: this.state.pole = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    });
    this.setState({
      player: this.state.player = true
    });
  }
  whoWon() {
    let pole = this.state.pole;
    if (pole[0] && pole[1] && pole[2] && (pole[0] === pole[1]) && (pole[0] === pole[2])) {
      alert(`Winner ${pole[0]}`);
      this.Count(pole[0]);
      this.refresh();
    } else if (pole[3] && pole[4] && pole[5] && (pole[3] === pole[4]) && (pole[3] === pole[5])) {
      alert(`Winner ${pole[3]}`);
      this.Count(pole[3]);
      this.refresh();
    } else if (pole[6] && pole[7] && pole[8] && (pole[6] === pole[7]) && (pole[6] === pole[8])) {
      alert(`Winner ${pole[6]}`);
      this.Count(pole[6]);
      this.refresh();
    } else if (pole[0] && pole[4] && pole[8] && (pole[0] === pole[4]) && (pole[0] === pole[8])) {
      alert(`Winner ${pole[0]}`);
      this.Count(pole[0]);
      this.refresh();
    } else if (pole[2] && pole[4] && pole[6] && (pole[2] === pole[4]) && (pole[2] === pole[6])) {
      alert(`Winner ${pole[2]}`);
      this.Count(pole[2]);
      this.refresh();
    } else if (pole[0] && pole[3] && pole[6] && (pole[0] === pole[3]) && (pole[0] === pole[6])) {
      alert(`Winner ${pole[0]}`);
      this.Count(pole[0]);
      this.refresh();
    } else if (pole[1] && pole[4] && pole[7] && (pole[1] === pole[4]) && (pole[1] === pole[7])) {
      alert(`Winner ${pole[1]}`);
      this.Count(pole[1]);
      this.refresh();
    } else if (pole[2] && pole[5] && pole[8] && (pole[2] === pole[5]) && (pole[2] === pole[8])) {
      alert(`Winner ${pole[2]}`);
      this.Count(pole[2]);
      this.refresh();
    } else if (pole[0] && pole[1] && pole[2] && pole[3] && pole[4] && pole[5] && pole[6] && pole[7] && pole[8]) {
      alert(`Draw X = O`);
      this.Count("Draw");
      this.refresh();
    }
  }
  Count(who) {
    if (who == "X") {
      this.state.players["player1"] += 1;
    } else if (who == "O") {
      this.state.players["player2"] += 1;
    } else if ("Draw") {
      this.state.players["player1"] += 1;
      this.state.players["player2"] += 1;
    }
  }
  refreshCounts() {
    this.setState({
      players: {
        "player1": 0,
        "player2": 0
      }
    });
  }
  render() {
    return (<div className="main">
      <div className="player1 player">
        Player X<br/>
        <div className="ref1" onClick={() => this.refresh()}>
          Refresh table
        </div>
        {this.state.players["player1"]}
      </div>
      <div className="main-place">
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={1}>
          {this.state.pole[0]}
        </Block>
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={2}>
          {this.state.pole[1]}
        </Block>
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={3}>
          {this.state.pole[2]}
        </Block>

        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={4}>
          {this.state.pole[3]}
        </Block>
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={5}>
          {this.state.pole[4]}
        </Block>
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={6}>
          {this.state.pole[5]}
        </Block>

        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={7}>
          {this.state.pole[6]}
        </Block>
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={8}>
          {this.state.pole[7]}
        </Block>
        <Block isDisabled={this.isDisabled} handlePole={this.handlePole} handleUser={(res, key, symbol) => this.handleUser(res, key, symbol)} key={9}>
          {this.state.pole[8]}
        </Block>
      </div>
      <div className="player2 player">
        Player O<br/> {this.state.players["player2"]}
        <div className="ref" onClick={() => this.refreshCounts()}>
          Refresh score
        </div>
      </div>
    </div>);
  }
}
export default App;
