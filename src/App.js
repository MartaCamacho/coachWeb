import {BrowserRouter as Router, Switch} from 'react-router-dom';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        let body = document.getElementsByTagName("body")[0];
        if(isOpen !== true) {
          return body.classList.add("body-navbar-open");
        } else {
          return body.classList.remove("body-navbar-open");
        }
        
    }


  return (
    <Router>
      <div className="App">
      <Navbar toggle={toggle} isOpen={isOpen}/>
      <Switch>
        {/* <Route exact path="/" component={Home} exact/> */}
      </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
