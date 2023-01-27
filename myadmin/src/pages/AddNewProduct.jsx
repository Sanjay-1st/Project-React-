import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddNewProduct() {
    const initiaData = { category: "", price: "", description: "", title: "", image: ""}
    const [formData, setFormData] = useState(initiaData)
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://e-commerce-726a3-default-rtdb.firebaseio.com/Products.json', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setFormData(json));
        navigate("/productlist")
    }



    const input = {
        display: "flex", justifyContent: "center", flexDirection: "column", width: "50%"
    }
    const inputTag = {
        fontSize: "20px", padding: "10px", margin: "10px 0"
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
                        <div className="container">
                            <form style={input} onSubmit={handleSubmit} >
                                <input onChange={handleChange} style={inputTag} type="text" name='title' value={formData.title} placeholder="New title" required />
                                <input onChange={handleChange} style={inputTag} type="text" name='category' value={formData.category} placeholder="New category" required />
                                <input onChange={handleChange} style={inputTag} type="text" name='description' value={formData.description} placeholder="New description" required />
                                <input onChange={handleChange} style={inputTag} type="text" name='image' value={formData.image} placeholder="New image" required />
                                <input onChange={handleChange} style={inputTag} type="number" name='price' value={formData.price} placeholder="New price" required />
                                <input type="submit" value="Submit" style={{ width: "50%", margin: "10px 0" }} />
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewProduct