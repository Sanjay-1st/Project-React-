import React from 'react'

function SignUp() {
    return (
        <div className="login">
            <h1><a href="index.html">Minimal </a></h1>
            <div className="login-bottom">
                <h2>Register</h2>
                <div className="col-md-6">
                    <div className="login-mail">
                        <input type="text" placeholder="Email" required />
                        <i className="fa fa-envelope" />
                    </div>
                    <div className="login-mail">
                        <input type="password" placeholder="Password" required />
                        <i className="fa fa-lock" />
                    </div>
                    <div className="login-mail">
                        <input type="password" placeholder="Repeated password" required />
                        <i className="fa fa-lock" />
                    </div>
                    <a className="news-letter" href="#">
                        <label className="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>I agree with the terms</label>
                    </a>
                </div>
                <div className="col-md-6 login-do">
                    <label className="hvr-shutter-in-horizontal login-sub">
                        <input type="submit" defaultValue="Submit" />
                    </label>
                    <p>Already register</p>
                    <a href="signin.html" className="hvr-shutter-in-horizontal">Login</a>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>

    )
}

export default SignUp