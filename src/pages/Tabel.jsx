import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function Tabel() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')//https://jsonplaceholder.typicode.com/users
        setUsers(data)

    }

    

    return (
        <>
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
                            <h3 id="forms-example" className>Basic Table</h3>
                            <table>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {users.map((users) => {
                                    return (
                                        <tr key={users.id}>
                                            <td>{users.id}</td>
                                            <td>{users.name}</td>
                                            <td>{users.email}</td>
                                            <td><buttn className="btn btn-primary ">Edit</buttn></td>
                                            <td><buttn className="btn btn-danger ">Delete</buttn></td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Tabel