import React from 'react';
class Block extends React.Component {
  handleClick(ev) {
    if (this.refs.atr.textContent === "" || this.refs.atr.textContent === "X " || this.refs.atr.textContent === "O ") {
      this.props.handleUser(true, this._reactInternalFiber.key);
    }
  }
  myEnter() {
    if (this.refs.atr.textContent === "") {
      this.props.handleUser("hoverIn", this._reactInternalFiber.key);
    }
  }
  myOut() {
    if (this.refs.atr.textContent !== "") {
      this.props.handleUser("hoverOut", this._reactInternalFiber.key);
    }
  }
  render() {
    return (<button ref="atr" onMouseOver={(e) => this.myEnter(e)} onMouseOut={(e) => this.myOut(e)} onClick={(e) => this.handleClick(e)} className="Blocks">
      {this.props.children}
    </button>);
  }
}
export default Block;
