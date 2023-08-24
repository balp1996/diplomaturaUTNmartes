import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Servicios from './pages/Servicios';
import Contactos from './pages/Contactos';
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';


const router = createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/servicios',
  element:<Servicios/>
}
,
{
  path:'/contacto',
  element:<Contactos/>
},
{
  path:'/galeria',
  element:<Galeria/>
},
{
  path:'/nosotros',
  element:<Nosotros/>
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
