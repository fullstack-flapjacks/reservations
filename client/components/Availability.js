import React from 'react';

var Availability = (props)=>{
  
  const available = props.tables.length > 0; //check if there are available tables

  if(available){


  }

  if (available){

    return (<div className="slots">
             {props.tables.map(table =><div className="table"> {`${table.hour}:${table.minute}`} </div>)}



           </div>)

  }

  return (<div className="slots"> Sorry! No tables available - check with Wayne :) </div>)

}

export default Availability;