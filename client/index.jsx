import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

window.$ = window.jQuery = $;

class App extends React.Component {
  render () {
    return <p> Hello World! This is the reservation component</p>;
  }
}

ReactDom.render(<App/>, document.getElementById('reservations')); 