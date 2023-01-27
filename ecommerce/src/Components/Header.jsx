import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        // header section strats
        < header className="header_section" >
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="index.html">
                        <img width={250} src="images/logo.png" alt="#" />
                    </Link>
                    <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="blog_list.html">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact.html">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-danger text-white" to="/login">Login </Link>
                            </li>

                        
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
        //   end header section

    )
}

export default Header