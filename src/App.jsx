import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";


function App(){
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}
export default App