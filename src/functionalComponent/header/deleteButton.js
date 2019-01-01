import React from 'react';
import './index.css';
const Delete =(props)=>{
    return(
        <div className="row">
            <button className="btn btn-success" onClick={props.deleteButtonShow}>Delete</button>
        </div>
    )
}
export default Delete;