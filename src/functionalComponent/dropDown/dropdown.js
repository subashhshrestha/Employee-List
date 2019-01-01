import React from 'react';
const Drop =(props)=>{
    return( 
        <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort
    <span className="caret"></span></button>
    <ul className="dropdown-menu">
      <li><button className="btn btn-default" onClick={props.onname}>Name</button></li>
      <li><button className="btn btn-default" onClick={props.onsalary}>Salary</button></li>
    </ul>
  </div>
    )
}
export default Drop;