import React, { useState, useEffect } from 'react';
import axios from "axios";

const ProductForm = () => {
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState()
    const [productDescription, setProductDescription] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            productName,
            productPrice,
            productDescription
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Product Name<br/>
                    <input type="text" onChange={(e) => setProductName(e.target.value)} />
                </label>
            </p>
            <p>
                <label>Price<br/>
                    <input type="text" onChange={(e) => setProductPrice(e.target.value)} />
                </label>
            </p>
            <p>
                <label>Product Description<br/>
                    <input type="text" onChange={(e) => setProductDescription(e.target.value)} />
                </label>
            </p>
            <input type="submit"/>
        </form>

    )
}

export default ProductForm;