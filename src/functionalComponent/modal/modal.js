import React from 'react';
const Modal =(props)=>{
    return(
        <div className="modal fade" id={props.index} role="dialog">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Delete List</h4>
        </div>
        <div className="modal-body">
          <p style={{color:"black"}}>Are you sure you want to permanentaly delete this list.</p>
        </div>
        <div style={{display:'inline-block',whiteSpace:'nowrap'}}>
        {console.log(props)}
          <button style={{display:'inline-block',width:"60px",margin:"10px",padding:"5px"}} type="button"  data-dismiss="modal" onClick={()=>{
              console.log("Delete",props.index) ;
              return props.deleteUser(props.index)}}>Delete</button>
          <button style={{display:'inline-block',width:"60px",margin:"10px",padding:"5px"}} type="button"  data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Modal;