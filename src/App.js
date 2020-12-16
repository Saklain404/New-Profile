import React from 'react';
import './App.css';
import Header from './component/Header';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home';
import Tutorials from './screens/Tutorials';
import Contact from './screens/Contact';
import Services from './screens/Services';
import About from './screens/About';
import Footer from './component/Footer';
import { Layout } from 'antd';



function App() {
  return (
    <div className='App'>
      <Header />
      <div className='column screen-container'>
        <Switch>
          <Route exact path='/New-Profile' component={Home} />
          <Route path='/tutorials' component={Tutorials} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/services/:id' component={Services} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
