import React from 'react'
import { useState } from 'react';

function Form() {

    const [form, setForm] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",

    });
    function changeHandel(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(form);
    }

    function submitHandel(e) {
        e.preventdefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

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
                        <form method='post' className='w-50'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Id</label>
                                <input type="text" name="id" onChange={changeHandel} value={form.id} className="form-control" id="exampleInputEmail1" placeholder="Id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input type="text" name="name" onChange={changeHandel} value={form.name} className="form-control" id="exampleInputPassword1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" name="email" onChange={changeHandel} value={form.email} className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">phone</label>
                                <input type="phone" name="phone" onChange={changeHandel} value={form.phone} className="form-control" id="exampleInputPassword1" placeholder="phone" />
                            </div>

                            <button type="submit" onClick={submitHandel} className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form