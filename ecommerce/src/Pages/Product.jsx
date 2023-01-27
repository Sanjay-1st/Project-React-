import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Product() {
    const initialValue = { category: "", description: "", image: "", price: "", title: "" }
    const [data, setData] = useState(initialValue)
    // console.log(data)
    const { item } = useParams()
    // console.log(item)
    // https://e-commerce-726a3-default-rtdb.firebaseio.com/Products/${item}.json
    // https://e-commerce-726a3-default-rtdb.firebaseio.com/Products/-NLKaboI9yOiX7p6IrNZ.json
    const fetchData = () => {
        fetch(` https://e-commerce-726a3-default-rtdb.firebaseio.com/Products/${item}.json`)
            .then(res => res.json())
            .then(json => {
                setData(json)
                // console.log(json)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="container border border-dark ">
                <div className="row mt-5">
                    <div className="col-md-6 border ">
                        <img src={data.image} alt={data.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6 mt-5 text-left ">
                        <h4 className='text-uppercase'>{data.category}</h4>
                        <h1 className='fs-1'>{data.title}</h1>
                        <h3>${data.price}</h3>
                        <p>{data.description}</p>
                        <Link to="" className="btn btn-outline-dark me-2">Add to Cart</Link>
                        <Link to="/cart" className="btn btn-dark">Go to Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product