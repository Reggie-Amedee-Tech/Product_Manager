import React from 'react';
import { Link } from '@reach/router'

const ProductList = (props) => {

    return (
        <div>
            {props.product.map((item, i) => {
                return <div>
                    <Link to={"/product/" + item._id} key={i}>{item.productName}</Link>
                </div>
            })}
        </div>
    )
}

export default ProductList;

