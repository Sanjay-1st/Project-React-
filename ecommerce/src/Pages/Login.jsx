import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const initialValue = { name: "", email: "", password: "", conformPassword: "" }
    const [user, setUser] = useState(initialValue)
    const [userError, setuserError] = useState({})
    const [onSubmit, setOnSubmit] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
        console.log(user)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setuserError(validate(user))
        navigate("/home")
    }
    const validate = (event) => {
        const error = {}
        if (!event.name) {
            error.name = "Please Fill Name"
        }
        if (!event.email) {
            error.email = "Please Fill Email"
        }
        if (!event.password) {
            error.password = " Please Fill Password"
        } else if (event.password.length < 4) {
            error.password = " Please Enter More than 4 Charecters"
        } else if (event.password.length > 10) {
            error.password = " Please Enter less than 10 Charecters"
        }

        if (event.conformPassword !== event.password) {
            error.conformPassword = " Password does not conform to the requirements"
        } else if (event.conformPassword === event.password) {
            error.conformPassword = " Password is correct"
        }
        // if (!event.conformPassword) {
        //     error.conformPassword = " Please Fill Conform Password"
        // } else if (event.conformPassword.length < 4) {
        //     error.conformPassword = " Please Enter More than 4 Charecters"
        // } else if (event.conformPassword.length > 10) {
        //     error.conformPassword = " Please Enter less than 10 Charecters"
        // }
        return error
    }
    useEffect(() => {
        if (Object.keys(userError).length === 0 && onSubmit) {
            console.log(user)
        }
        setOnSubmit(true)
    }, [setuserError])

    return (
        <div>
            {/* inner page section */}
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Login Page</h3>
                                <p>It Helps You LogIn NEW account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end inner page section */}
            {/* why section */}
            <section className="why_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="full">
                                <form method='POST' onSubmit={handleSubmit}>
                                    <fieldset>
                                        <input onChange={handleChange} type="text" name='name' value={user.name} placeholder='Name' />
                                        <p style={{ color: "red" }}>{userError.name}</p>
                                        <input onChange={handleChange} type="email" name='email' value={user.email} placeholder='Email' />
                                        <p style={{ color: "red" }}>{userError.email}</p>
                                        <input onChange={handleChange} type="password" name='password' value={user.password} placeholder='Password' />
                                        <p style={{ color: "red" }}>{userError.password}</p>
                                        <input onChange={handleChange} type="password" name='conformPassword' value={user.conformPassword} placeholder='Conform Password' />
                                        <p style={{ color: "red" }}>{userError.conformPassword}</p>
                                        <input type="submit" value="Submit" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end why section */}
        </div>
    )
}

export default Login