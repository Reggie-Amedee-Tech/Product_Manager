import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Detail = (props) => {
    const { deleteProduct } = props;

    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    })

    return (
        <div>
            <div>
                <p>Product Name: {product.productName} </p>
                <p>Price: {product.productPrice} </p>
                <p>Product Description: {product.productDescription} </p>
            </div>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>

        </div>
    )
}

export default Detail;

