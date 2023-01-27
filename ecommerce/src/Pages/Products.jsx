import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Products() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const fetchData = () => {
        fetch('https://e-commerce-726a3-default-rtdb.firebaseio.com/Products.json')
            .then(res => res.json())
            .then(json => {
                setData(json)
                console.log(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])




    return (
        // product section
        <section className="product_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Our <span>products</span>
                    </h2>
                </div>

                <div className="row">
                    {
                        Object.keys(data).map((item, key) => {
                            const { description, price, image, category, title, id } = data[item]
                            return (

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="box">
                                        <div className="option_container">
                                            <div className="options">
                                                <Link to={`/product/${item}`} className='btn btn-outline-dark'>Buy Now</Link>
                                            </div>
                                        </div>
                                        <div className="img-box">
                                            <img src={image} alt={description} />
                                        </div>
                                        <div className="detail-box">
                                            <h5>{title} </h5>
                                            <h6>{price}</h6>
                                        </div>
                                     
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="btn-box">
                    <a href>
                        View All products
                    </a>
                </div>
            </div>
        </section>
        //  end product section 

    )
}

export default Products