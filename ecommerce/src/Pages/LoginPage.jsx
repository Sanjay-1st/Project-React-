import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const initialData = { name: "", age: "", email: "", number: "" }
    const [user, setUser] = useState(initialData)
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        console.log(user)
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://e-commerce-726a3-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>setUser(json));
            navigate("/home")

    }

    
    return (
        <>
            <div>
                {/* inner page section */}
                <section className="inner_page_head">
                    <div className="container_fuild">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <h3>Login Page</h3>
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
                                            <input onChange={handleChange} type="text" name='name' value={user.name} placeholder='Name' required/>
                                            <input onChange={handleChange} type="number" name='age' value={user.age} placeholder='Age' required/>
                                            <input onChange={handleChange} type="email" name='email' value={user.email} placeholder='Email' required/>
                                            <input onChange={handleChange} type="number" name='number' value={user.number} placeholder='Number' required/>
                                            <input  type="submit" value="Submit" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end why section */}

            </div>

        </>
    )
}

export default LoginPage