import React from 'react';
class Clicker extends React.Component {
  state = {
    count: 0
  }
  click(ev){

    this.setState({
      count: this.state.count += 1
    });
    this.props.handleForPerent(this.state.count);
  }
  render() {
    return (<div ref="newTxt" onClick={(ev) => this.click(ev)}>
      {this.state.count}
    </div>);
  }
}
export default Clicker;
