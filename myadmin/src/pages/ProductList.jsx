import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductList() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const FetchData = () => {
        fetch('https://e-commerce-726a3-default-rtdb.firebaseio.com/Products.json')
            .then((response) => response.json())
            .then((json) => {
                setUsers(json)
            });
    }

    useEffect(() => {
        FetchData()
    }, [])

    const [data, setData] = useState("")
    const initialState = {  title: "", category: "", description: "", image: "", price: "" }
    const [formValue, setFormValue] = useState(initialState)
    const handleEdit = (item, title, category, description, image, price) => {
        setFormValue({
            ...formValue,
            title: title,
            category: category,
            description: description,
            image: image,
            price: price
        })
        setData(item)
        console.log(data)

    }

    const handleDelete = (item) => {
        fetch(`https://e-commerce-726a3-default-rtdb.firebaseio.com/Products/${item}.json`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                FetchData()
            });
    }

    const handleONChange = (event) => {
        const { name, value } = event.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleONSubmit = () => {
        console.log(data)

        fetch(`https://e-commerce-726a3-default-rtdb.firebaseio.com/Products/${data}.json`, {
            method: 'PUT',
            body: JSON.stringify(formValue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setFormValue({ ...formValue, title: "", category: "", description: "", image: "", price: "" })
                FetchData()
            });

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
                        <h3 id="forms-example" className>Product List Table</h3>
                        <div style={{ width: "100%", margin: "10px 0" }} className="">
                            <button onClick={() => { navigate("/addnewproduct") }} className="btn btn-primary ">Add New Products</button>
                        </div>
                        <table style={{ width: "100%" }}>
                            <tr>
                                <th>ID</th>
                                <th>title</th>
                                <th>category</th>
                                <th>description</th>
                                <th>image</th>
                                <th>price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                Object.keys(users).map((item, key) => {

                                    const { title, category, description, image, price } = users[item]
                                    return (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td width="200" style={{padding:" 0 10px "}}>{title}</td>
                                            <td width="200">{category}</td>
                                            <td width="200">{description}</td>
                                            <td><img src={image} alt="" width={100} /></td>
                                            <td>{price}</td>
                                            <td><button onClick={() => handleEdit(item, title, category, description, image, price)}
                                                className="btn btn-primary " data-toggle="modal" data-target="#myModal">Edit</button></td>
                                            <td><button onClick={() => handleDelete(item)} className="btn btn-danger ">Delete</button></td>
                                        </tr>
                                    )
                                })}

                        </table>
                    </div>






                    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: 'none' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h2 className="modal-title">Modal title</h2>
                                </div>

                                <div className="modal-body">
                                    <div className="grid-form">
                                        <div className="grid-form1">

                                            <form >
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">title</label>
                                                    <input className="form-control" onChange={handleONChange} type="text" name='title' value={formValue.title} placeholder="New title" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">category</label>
                                                    <input className="form-control" onChange={handleONChange} type="text" name='category' value={formValue.category} placeholder="New category" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">description</label>
                                                    <input className="form-control" onChange={handleONChange} type="text" name='description' value={formValue.description} placeholder="New description" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">image</label>
                                                    <input className="form-control" onChange={handleONChange} type="text" name='image' value={formValue.image} placeholder="New image" required />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">price</label>
                                                    <input className="form-control" onChange={handleONChange} type="number" name='price' value={formValue.price} placeholder="New price" required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input onClick={handleONSubmit} className="btn btn-primary" type="submit" value="Submit" style={{ margin: "10px " }} data-dismiss="modal" />
                                    </div>

                                </div>{/* /.modal-content */}
                            </div>{/* /.modal-dialog */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductList