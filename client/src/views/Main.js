import axios from 'axios';
import React, {useEffect, useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
        });
    },[])

    return(
        <div>
            <ProductForm/>
            <hr/>
            <h1>All Products:</h1>
            {loaded && <ProductList product={product}/>}
        </div>
    )
}

export default Main;
