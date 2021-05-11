import React, { useState } from 'react';
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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <h1>Product Manager</h1>
                <p>
                    <label>Product Name<br />
                        <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName} />
                    </label>
                </p>
                <p>
                    <label>Price<br />
                        <input type="text" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                    </label>
                </p>
                <p>
                    <label>Product Description<br />
                        <input type="text" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} />
                    </label>
                </p>
                <input type="submit" />
            </div>
            
        </form>

    )
}

export default ProductForm;