import React, { useState } from 'react'

function Add_Customer() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const logdata = (e) => {
        e.preventDefault();
       
    }
    return (
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <a href="index.html">Home</a>
                        <i className="fa fa-angle-right" />
                        <span>Add Customers</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="grid-form">
                    <div className="grid-form1">
                        <h3 id="forms-example" className>Add New Customers</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="">First name</label>
                                <input type="name" onChange={(e) => setName(e.target.value)} className="form-control" id="" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email Address</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="" placeholder="Password" />
                            </div>


                            <button type="btn" className="btn btn-danger">Delete</button>
                            <button type="submit" onClick={logdata} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_Customer