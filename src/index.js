import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Login from './features/counter/Home/Login.jsx';
import Home from './features/counter/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/product/:productId' element={<productDetails />}/> */}
          <Route path='/login' element={<Login />}/>
          {/* <Route path='/dashboard' element={<Dashboard />}/> */}
          {/* /* <Route path='/form' element={<HomeRegi />}/> */}
          <Route path='*' element={<h1>404 Page not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
