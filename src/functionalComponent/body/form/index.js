import React from 'react';
const Form =(props)=>{
    return(
        <div>
            <form onSubmit={props.getFormData}>
            {/* <div className="form-group"></div> */}
                <label style={{float:"left",color:"white"}}>Name: </label>
                <input  className="form-control" type="text" name="name"  placeholder="Name" required/><br/>
                {/* <div className="form-group"></div> */}
                <label style={{float:"left",color:"white"}}>Address: </label>
                <input className="form-control" type="text" name="address" placeholder="Address" required/><br/>
                {/* <div className="form-group"></div> */}
                <label style={{float:"left",color:"white"}}>Salary: </label>
                <input className="form-control" type="number" name="salary" placeholder="Salary" required/><br/>
                <button  className="btn btn-primary"type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;