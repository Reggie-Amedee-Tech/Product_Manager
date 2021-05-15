import React from 'react';
import { Link } from '@reach/router';


const ProductList = (props) => {
    const {deleteProduct} = props;

    

    return (
        <div>
            {props.product.map((item, i) => {
                return <p key={i}>
                    <Link to={"/product/" + item._id}>{item.productName}</Link>
                    <Link to={"/product/" + item._id + "/edit"}> Edit </Link>
                    <button onClick={(e) => {deleteProduct(item._id)}}>Delete</button>
                    </p>
            })}
            
        </div>
    )
}

export default ProductList;

