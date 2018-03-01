import React from 'react';
import "jquery-ui/ui/widgets/datepicker";

class DatePicker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: (new Date()).toLocaleDateString()
    }
  }

  componentWillMount(){
    this.props.changeDate(this.state.date);
  }
 
  handleChange(event){
    this.setState({date: event.target.value });
  }

  render(){
    $(function(){
      $('#datepicker').datepicker();
    });

    return(<div>
            <label for="datepicker" className="form-datepicker"> Date </label>
                <input value={this.state.date} onClick={(event)=>{this.handleChange(event); this.props.changeDate(event.target.value)}} className="custom-select datepicker" id="datepicker"/>
          </div>);
  }

}

export default DatePicker;