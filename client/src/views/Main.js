import axios from 'axios';
import React, {useEffect, useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [loaded, setLoaded] = useState(false);
    const {deleteProduct, product, setProduct, createProduct} = props;
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
        });
    },[])

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialProductName="" initialProductPrice="" initialProductDescription=""/>
            <hr/>
            <h1>All Products:</h1>
            {loaded && <ProductList product={product} deleteProduct={deleteProduct}/>}
        </div>
    )
}

export default Main;
