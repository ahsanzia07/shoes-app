import React from 'react';
import { BrowserRouter, NavLink, Router, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Shoes from './components/Shoes';
import Adddetail from "./components/adddetail"

function Contact() {
  return <div>
    <img className="contactImg" src={"https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/contact-us-pages-kinsta-5f639fc47db5e.png"} alt="" />
  </div>

}

function App() {
  return (<BrowserRouter>
    <div className="App">

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <!-- Brand/logo --> */}
        <a className="navbar-brand" href="#">
          <img src="shoes.jpg" className="shoes" alt="logo" />
        </a>

        {/* <!-- Links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">  <li>Home </li> </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shoes" className="nav-link">  <li> Shoes</li> </NavLink>

          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">  <li>Contact </li> </NavLink>
          </li>
        </ul>
        <NavLink to="/"><div className="btn1"> <button>Back to 0 Point</button></div> </NavLink>
      </nav>

      <Route path="/home" component={Home}></Route>

      <Route path="/shoes" component={Shoes}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/ad-details/:id" component={Adddetail} />

    </div></BrowserRouter>
  );
}

export default App;
