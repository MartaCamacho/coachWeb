import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
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
