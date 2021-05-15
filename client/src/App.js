import {Router} from '@reach/router'
import Main from './views/Main';
import Detail from './views/Detail';
import React, {useState} from 'react';
import Update from './views/Update'
import axios from 'axios';
import {navigate} from '@reach/router'

function App() {
  const[product, setProduct] = useState([])

  const removeFromDom = (productId) => {
    setProduct(product.filter(prod => prod._id !== productId));
}

  const deleteProduct = (productID) => {
    axios.delete('http://localhost:8000/api/product/' + productID)
        .then(res => {
            removeFromDom(productID)
            navigate("/product");
        })
        
}

const createProduct = prod => {
  axios.post('http://localhost:8000/api/product', prod )
  .then(res=> {
      setProduct([...product, res.data]);
  })
}

  
  
  return (
    <div className="App">
      <Router>
        <Main path="/product" deleteProduct={deleteProduct} product={product} setProduct={setProduct} createProduct={createProduct}/>
        <Detail path="/product/:id" deleteProduct={deleteProduct}/>
        <Update path="/product/:id/edit" product={product} setProduct={setProduct}/>
      </Router>
    </div>
  );
}

export default App;
