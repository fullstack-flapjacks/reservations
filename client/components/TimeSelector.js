import React from 'react';

//creates 24 hour time object with AM/PM values
var timeCreator = ()=>{
  var times = [];
  var ampm = 'AM';
  var hour;
  for (var i=0; i<24; i++){
    ampm = i >= 12 ? 'PM' : ampm;

    //convert to AM/PM Format
    if (i>12){
      hour = i-12;
    } else if (i < 12 && i !== 0){
      hour= i;
    } else if (i === 0 || i === 12 ) {
      hour = 12;
    }

    times.push({hour: String(hour), minutes:'00', ampm: ampm}, {hour: String(hour), minutes:'30',ampm: ampm});
  }
  return times;
};

class TimeSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: '10:30AM'
    }
  }

  handleChange(event){
    this.setState({time: event.target.value});
  }

  render(){
    return(<div>
            <label for="timeselector" className="form-timeselector">Time</label>
              <select value={this.state.time} onChange={this.handleChange.bind(this)} className="custom-select timeselector" id="timeselector">
                {timeCreator().map((val)=>(<option value={val.hour+":"+val.minutes+val.ampm}> {`${val.hour}:${val.minutes} ${val.ampm}`} </option>))}
              </select>
          </div>);

  }

}

export default TimeSelector;