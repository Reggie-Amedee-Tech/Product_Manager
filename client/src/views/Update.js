import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'
import {navigate} from 'react'


const Update = (props) => {
    const {product, setProduct} = props;
    const [loaded, setLoaded] = useState(false);
    const[productName, setProductName] = useState("");
    const[productPrice, setProductPrice] = useState();
    const[productDescription, setProductDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true)

        })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + props.id, product)
        .then(res => console.log(res))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <ProductForm 
                onSubmitProp={updateProduct}
                initialProductName={product.productName}
                initialProductPrice={product.productPrice}
                initialProductDescription={product.productDescription}
                />
            )}
        </div>

    )
}

export default Update;