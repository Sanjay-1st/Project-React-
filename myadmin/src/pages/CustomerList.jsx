
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerList() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const FetchData = () => {
        fetch('https://e-commerce-726a3-default-rtdb.firebaseio.com/users.json')
            .then((response) => response.json())
            .then((json) => {
                setUsers(json)
            });
    }

    useEffect(() => {
        FetchData()
    }, [])

    const [data, setData] = useState("")
    const initialState = { name: "", age: "", email: "", number: "" }
    const [formValue, setFormValue] = useState(initialState)
    const handleEdit = (item, name, age, email, number) => {
        setFormValue({ ...formValue, name: name, age: age, email: email, number: number })
        setData(item)
        console.log(data)

    }

    const handleDelete = (item) => {
        fetch(`https://e-commerce-726a3-default-rtdb.firebaseio.com/users/${item}.json`, {
            method: 'DELETE',
          }) 
          .then((response) => response.json())
          .then((json) => {
             FetchData()
          });
    }

    const handleONChange = (event) => {
        const { name, value } = event.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleONSubmit = () => {
        console.log(data)
       
        fetch(`https://e-commerce-726a3-default-rtdb.firebaseio.com/users/${data}.json`, {
            method: 'PUT',
            body: JSON.stringify(formValue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setFormValue({ ...formValue, name: "", age: "", email: "", number: "" })
                FetchData()
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
                        <span>Tabel</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="grid-form">
                    <div className="grid-form1">
                        <h3 id="forms-example" className>Customet List Table</h3>
                        <div style={{ width: "100%", margin: "10px 0" }} className="">
                            <button onClick={() => { navigate("/addnewcustomer") }} className="btn btn-primary ">Add New Customer</button>
                        </div>
                        <table style={{ width: "100%" }}>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>age</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                Object.keys(users).map((item, key) => {

                                    const { name, age, email, number } = users[item]
                                    return (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{name}</td>
                                            <td>{age}</td>
                                            <td>{email}</td>
                                            <td>{number}</td>
                                            <td><button onClick={() => handleEdit(item, name, age, email, number)}
                                                className="btn btn-primary " data-toggle="modal" data-target="#myModal">Edit</button></td>
                                            <td><button onClick={() => handleDelete(item)} className="btn btn-danger ">Delete</button></td>
                                        </tr>
                                    )
                                })}

                        </table>
                    </div>






                    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: 'none' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h2 className="modal-title">Modal title</h2>
                                </div>

                                <div className="modal-body">
                                    <div className="grid-form">
                                        <div className="grid-form1">

                                            <form >
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Name</label>
                                                    <input className="form-control" onChange={handleONChange} type="text" name='name' value={formValue.name} placeholder="New Name" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Age</label>
                                                    <input className="form-control" onChange={handleONChange} type="number" name='age' value={formValue.age} placeholder="New Age" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email</label>
                                                    <input className="form-control" onChange={handleONChange} type="email" name='email' value={formValue.email} placeholder="New Email" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Number</label>
                                                    <input className="form-control" onChange={handleONChange} type="number" name='number' value={formValue.number} placeholder="New Number" required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input onClick={handleONSubmit} className="btn btn-primary" type="submit" value="Submit" style={{ margin: "10px " }}  data-dismiss="modal"/>
                                    </div>

                                </div>{/* /.modal-content */}
                            </div>{/* /.modal-dialog */}
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default CustomerList