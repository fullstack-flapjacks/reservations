import React from 'react';
import ReactDom from 'react-dom';
import PartySelector from './components/PartySelector';
import DatePicker from './components/DatePicker';
import TimeSelector from './components/TimeSelector';
import $ from 'jquery';

window.$ = window.jQuery = $;

class App extends React.Component {
  
  constructor(props){
    super(props);

    //updateTime & updateDate called via DatePicker/TimeSelector components to initialize values
    this.state = {
      time: null, 
      date: null
    }
  }

  updateTime(time){
    this.setState({time:time});
  }

  updateDate(date){
    this.setState({date:date});
    console.log(date);
  }

  fetchTimes(e){

    e.preventDefault();
    $.ajax({
      url: window.location.pathname + 'reservations',
      method: 'GET',
      contentType: 'application/json',
      data: JSON.stringify(this.state),
      success: (data)=>{
        console.log('Success! Data was received:', data);
      },
      error: (error)=>{
        console.log('Error! Data was NOT received:', error);
      }

    });   

  }


  render () {
    return (<div className="container reservation-widget">
              <h5 className="header"><span>Make a Reservation</span></h5>
                <form>
                  <div class="form-group">
                    <PartySelector />
                    <div className="picker">
                      <DatePicker changeDate={this.updateDate.bind(this)}/>
                      <TimeSelector changeTime={this.updateTime.bind(this)}/>
                    </div>
                  </div>
                  <button className="findtable" onClick={this.fetchTimes.bind(this)}>Find a Table</button>
                </form>
            </div>);
  }
}

ReactDom.render(<App/>, document.getElementById('reservations')); 