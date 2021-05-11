import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
        .then(res => setProduct({
            ...res.data
        }))
    },)

    return(
        <div>
            <p>Product Name: {product.productName} </p>
            <p>Price: {product.productPrice} </p>
            <p>Product Description: {product.productDescription} </p>
        </div>
    )
}

export default Detail;

