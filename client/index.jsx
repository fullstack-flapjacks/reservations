import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello World! This is your reservation component</p>;
  }
}

render(<App/>, document.getElementById('reservations'));