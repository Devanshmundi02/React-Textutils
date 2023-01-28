// import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// let description = "My name is Devansh Mundi and i am pursuing B.tech computer science engineering at Sushila Devi Bansal College Indore."    
function App() {

  const [alert, setalert] = useState(null)

  // function to show alert message.
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const [mode, setmode] = useState('light'); // whether dark mode is enable or not
  const [btntxt1, setbtntxt1] = useState('Enable Blue Dark Mode')

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      setbtntxt1('Enable white Light Mode');
      document.body.style.backgroundColor = '#042743'
      showalert('Blue Dark Mode has been enabled', 'success');
      //   setInterval(() => {
      //     document.title = "Go Go";
      //   }, 1000);
      //   setInterval(() => {
      //     document.title = "Power Rangers";
      //   }, 1500);
    }
    else {
      setmode('light');
      setbtntxt1('Enable Blue Dark Mode');
      document.body.style.backgroundColor = 'white'
      showalert('white Light Mode has been enabled', 'success');
    }
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Devansh.
    //     </a>
    //   </header>
    // </div>

    // ---------------------------------------------------------------------------------------------

    // lecture 4
    // <>
    //   <nav className = 'blank'>
    //     <li>Home</li>
    //     <li>Contact</li>
    //     <li>About Us</li>
    //   </nav>

    //   <div className = 'box'>This is My description :- {description}</div>

    //   <div className = 'container' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti temporibus at dolore neque quo ipsa itaque consequatur sunt a optio. Quaerat eos dolorum saepe quos consequuntur quas aliquam quod ullam! </div>
    // </>

    // -------------------------------------------------------------

    //     <>
    //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">Power ranger</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">Contact Us</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">About Us</a>
    //         </li>

    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
    //     </>
    // ----------------------------------------------------------------------------
    <>
      <BrowserRouter basename='/React-Textutils'>

        <Navbar title="Power Ranger" mode={mode} togglemode={togglemode} btntxt1={btntxt1} />

        {/* its for default Props  */}
        {/* <Navbar /> */}

        <Alert alert={alert} />

        {/* next lecture */}

        <div className="container mb-3">
          <Routes>
            <Route exact path ="/" element = {<TextForm heading="Enter your information to analysis" mode={mode} showalert={showalert} />}></Route>
            <Route  path ="/About" element={<About mode={mode} togglemode={togglemode} btntxt1={btntxt1} />}></Route>
          </Routes>

          {/* textform component for using to show text*/}
          {/* <TextForm heading="Enter your information to analysis" mode={mode} showalert={showalert} /> */}

          {/* about component for using about component and dark mode*/}
          {/* <About /> */}

        </div>
      </BrowserRouter>
    </>


  );
}

export default App;
