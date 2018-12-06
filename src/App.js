import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label>bbb</label>
        <input type="text" onChange={() => {console.log('abbb')}}></input>
      </React.Fragment>
    )
  }
}

export default App;
