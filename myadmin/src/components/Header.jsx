import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div id="wrapper">
            {/*-*/}
            <nav className="navbar-default navbar-static-top" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <h1> <Link className="navbar-brand" to="index.html">Minimal</Link></h1>
                </div>
                <div className=" border-bottom">
                    <div className="full-left">
                        <section className="full-top">
                            <button id="toggle"><i className="fa fa-arrows-alt" /></button>
                        </section>
                        <form className=" navbar-left-right">
                            <input type="text" defaultValue="Search..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search...';}" />
                            <input type="submit" defaultValue className="fa fa-search" />
                        </form>
                        <div className="clearfix"> </div>
                    </div>
                    {/* Brand and toggle get grouped for better mobile display */}
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="drop-men">
                        <ul className=" nav_1">
                            <li className="dropdown at-drop">
                                <Link to="#" className="dropdown-toggle dropdown-at " data-toggle="dropdown"><i className="fa fa-globe" /> <span className="number">5</span></Link>
                                <ul className="dropdown-menu menu1 " role="menu">
                                    <li><Link to="#">
                                        <div className="user-new">
                                            <p>New user registered</p>
                                            <span>40 seconds ago</span>
                                        </div>
                                        <div className="user-new-left">
                                            <i className="fa fa-user-plus" />
                                        </div>
                                        <div className="clearfix"> </div>
                                    </Link></li>
                                    <li><Link to="#">
                                        <div className="user-new">
                                            <p>Someone special liked this</p>
                                            <span>3 minutes ago</span>
                                        </div>
                                        <div className="user-new-left">
                                            <i className="fa fa-heart" />
                                        </div>
                                        <div className="clearfix"> </div>
                                    </Link></li>
                                    <li><Link to="#">
                                        <div className="user-new">
                                            <p>John cancelled the event</p>
                                            <span>4 hours ago</span>
                                        </div>
                                        <div className="user-new-left">
                                            <i className="fa fa-times" />
                                        </div>
                                        <div className="clearfix"> </div>
                                    </Link></li>
                                    <li><Link to="#">
                                        <div className="user-new">
                                            <p>The server is status is stable</p>
                                            <span>yesterday at 08:30am</span>
                                        </div>
                                        <div className="user-new-left">
                                            <i className="fa fa-info" />
                                        </div>
                                        <div className="clearfix"> </div>
                                    </Link></li>
                                    <li><Link to="#">
                                        <div className="user-new">
                                            <p>New comments waiting approval</p>
                                            <span>Last Week</span>
                                        </div>
                                        <div className="user-new-left">
                                            <i className="fa fa-rss" />
                                        </div>
                                        <div className="clearfix"> </div>
                                    </Link></li>
                                    <li><Link to="#" className="view">View all messages</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Rackham<i className="caret" /></span><img src="images/wo.jpg" /></Link>
                                <ul className="dropdown-menu " role="menu">
                                    <li><Link to="profile.html"><i className="fa fa-user" />Edit Profile</Link></li>
                                    <li><Link to="/"><i className="fa fa-clipboard" />Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>{/* /.navbar-collapse */}
                    <div className="clearfix">
                    </div>
                    <div className="navbar-default sidebar" role="navigation">
                        <div className="sidebar-nav navbar-collapse">
                            <ul className="nav" id="side-menu">

                                {/* <li><Link to="/signup" className=" hvr-bounce-to-right"><i className="fa fa-sign-in nav_icon" />Singup</Link></li> */}
                                <li><Link to="/" className=" hvr-bounce-to-right"><i className="fa fa-sign-in nav_icon" />Login</Link></li>
                                <li><Link to="/customerlist" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon" />Customer List</Link></li>
                                <li><Link to="/productlist" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon" />Product List</Link></li>
                                {/* <li><Link to="/forms" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon" />Basic forms</Link></li> */}
                                {/* <li><Link to="/forms1" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon" />POST forms</Link></li> */}
                                {/* <li><Link to="/add_customer" className=" hvr-bounce-to-right"><i className="fa fa-align-left nav_icon" />Add Customer</Link></li> */}
                                {/* <li><Link to="/tabel" className=" hvr-bounce-to-right"><i className="fa fa-check-square-o nav_icon" />Validation</Link></li> */}
                                <li><Link to="/error" className=" hvr-bounce-to-right"> <i className="fa fa-info-circle nav_icon" />Error 404</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Header