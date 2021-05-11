import {Router} from '@reach/router'
import Main from './views/Main';
import Detail from './views/Detail';
import React from 'react';
import ProductList from './components/ProductList';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/product"/>
        <Detail path="/product/:id"/>
      </Router>
    </div>
  );
}

export default App;
