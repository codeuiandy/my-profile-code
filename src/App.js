import React from 'react';
import './App.css';
import Wraper from './components/wrapper'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Contact from './components/contact'
import Tryy from './components/Tryy'
import Link from './components/links'

function App() {
 
  return (

    <Wraper>
      <div className='App'>
     <Navbar />
      <Hero/>
        <Link />
      </div>

      </Wraper>
  );
}

export default App;
