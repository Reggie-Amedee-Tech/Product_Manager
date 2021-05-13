import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Update = (props) => {
    const {id} = props;
    const[productName, setProductName] = useState("");
    const[productPrice, setProductPrice] = useState();
    const[productDescription, setProductDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
        .then(res => {
            setProductName(res.data.productName);
            setProductPrice(res.data.productPrice);
            setProductDescription(res.data.productDescription);
        })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + props.id, {
            productName,
            productPrice,
            productDescription
        })
        .then(res => console.log(res))
    }

    return (
        <form onSubmit={updateProduct}>
            <div>
                <h1>Update Product</h1>
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

export default Update;