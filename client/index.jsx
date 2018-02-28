import React from 'react';
import ReactDom from 'react-dom';
import PartySelector from './components/PartySelector';
import $ from 'jquery';

window.$ = window.jQuery = $;

class App extends React.Component {
  render () {
    return (<div className="container reservation-widget">
              <h5 className="header">Make a Reservation</h5>
                <form>
                  <div class="form-group">
                    <PartySelector />
                  </div>
                </form>
            </div>);
  }
}

ReactDom.render(<App/>, document.getElementById('reservations')); 