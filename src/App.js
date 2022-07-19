import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import ProductsAdmin from './components/productos/ProductsAdmin';
import ProductsAdd from './components/productos/ProductsAdd';
import EditarProducto from './components/productos/EditarProducto';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/productos" element={<ProductsAdmin />}></Route>
        <Route path="/productos/add" element={<ProductsAdd />}></Route>
        <Route path="/productos/edit" element={<EditarProducto />}></Route>
      </Routes>
    </div>
  );
  /**
   * 


import ClientsAdmin from './components/clients/ClientsAdmin';
import ClientsAdd from './components/clients/ClientsAdd';
import ClientsEdit from './components/clients/ClientsEdit';

import UsersAdmin from './components/clients/UsersAdmin';
import UsersAdd from './components/clients/UsersAdd';
import UsersEdit from './components/clients/UsersEdit';

   * 
        
        <Route path="/clients" element={<ClientsAdmin />}></Route>
        <Route path="/clients/add" element={<ClientsAdd />}></Route>
        <Route path="/clients/edit" element={<ClientsEdit />}></Route>
        <Route path="/users" element={<UsersAdmin />}></Route>
        <Route path="/users/add" element={<UsersAdd />}></Route>
        <Route path="/users/edit" element={<UsersEdit />}></Route>
   * 
   */
}

export default App;
