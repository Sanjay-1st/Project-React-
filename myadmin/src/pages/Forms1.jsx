import React from 'react'
import { useState } from 'react'

function Forms1() {

    const [users, setUsers] = useState({
        id: "", name: "", email: "", phone: "",
    });
    function changeHandel(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUsers({ ...users, [name]: value })
        console.log(users)

    }
    function submitHandel(e) {
        e.preventDefault();
        fetch('https://pr-01-d6528-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify({
                users
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUsers({ ...users, id: "", name: "", email: "", phone: "", });
            });
    }

    return (
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <a href="index.html">Home</a>
                        <i className="fa fa-angle-right" />
                        <span>Forms</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="grid-form">
                    <div className="grid-form1">
                        <h3 id="forms-example" className>Basic Form</h3>
                        <form method='post'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Id</label>
                                <input type="text" name="id" onChange={changeHandel} value={users.id} className="form-control" id="exampleInputEmail1" placeholder="Id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input type="text" name="name" onChange={changeHandel} value={users.name} className="form-control" id="exampleInputPassword1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" name="email" onChange={changeHandel} value={users.email}  className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">phone</label>
                                <input type="phone" name="phone" onChange={changeHandel} value={users.phone}  className="form-control" id="exampleInputPassword1" placeholder="phone" />
                            </div>

                            <button type="submit" onClick={submitHandel}  className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms1