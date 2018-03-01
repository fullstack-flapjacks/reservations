import React from 'react';
import ReactDom from 'react-dom';
import PartySelector from './components/PartySelector';
import DatePicker from './components/DatePicker';
import TimeSelector from './components/TimeSelector'
import $ from 'jquery';

window.$ = window.jQuery = $;

class App extends React.Component {
  
  constructor(props){
    super(props);
  }


  render () {
    return (<div className="container reservation-widget">
              <h5 className="header">Make a Reservation</h5>
                <form>
                  <div class="form-group">
                    <PartySelector />
                    <div className="picker">
                      <DatePicker />
                      <TimeSelector />
                    </div>
                  </div>
                  <button className="findtable">Find a Table</button>
                </form>
            </div>);
  }
}

ReactDom.render(<App/>, document.getElementById('reservations')); 