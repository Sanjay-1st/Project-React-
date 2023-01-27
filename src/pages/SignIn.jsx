import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from './Form';
function SignIn() {
    const redirect = useNavigate();

    const [allData, setAllData] = useState({
        email: '',
        password: '',
        returnSecureToken: ''
    })


    function changeHandel(e) {
        const { name, value } = e.target;
        setAllData({ ...allData, [name]: value, returnSecureToken: true });
        console.log(allData);
    }

    function changeSubmitHandel(e) {
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmkbpTy8MY79sa-VbArfiI6Kwu7rby3Nk', {
            method: 'POST',
            body: JSON.stringify(allData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.email);
                if (data.email) {
                    alert("Success EMAIL found");
                    redirect("/forms");
                }
                else {
                    alert("email not found");

                }
            });
    }

    return (
        <div className="login">
            <h1><a href="index.html">Minimal </a></h1>
            <div className="login-bottom">
                <h2>Login</h2>
                <form method='post'>
                    <div className="col-md-6">
                        <div className="login-mail">
                            <input type="text" name='email' value={allData.email} onChange={changeHandel} placeholder="Email" required />
                            <i className="fa fa-envelope" />
                        </div>
                        <div className="login-mail">
                            <input type="password" name='password' value={allData.password} onChange={changeHandel} placeholder="Password" required />
                            <i className="fa fa-lock" />
                        </div>

                    </div>
                    <div className="col-md-6 login-do">
                        <label className="hvr-shutter-in-horizontal login-sub">
                            <input type="submit" onClick={changeSubmitHandel} defaultValue="login" />
                        </label>
                    </div>
                    <div className="clearfix"> </div>
                </form>
            </div>
        </div>

    )
}

export default SignIn