import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="four">
            <img src="images/404.png" alt />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link to="/forms" className="hvr-shutter-in-horizontal">Go To Home</Link>
        </div>

    )
}

export default Error