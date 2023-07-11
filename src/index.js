import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
  <Route exact path='/' element={<App/>}></Route>
  <Route exact path='/navbar' element={<SideNav/>}></Route>
</Routes>
  </BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
);
