import React from 'react';
import Header from './components/Header.js'
import Body from './components/Body.js'
import About from './components/about/about.js'
import Home from './components/home/home.js'
import Thanks from './components/thanks/thanks.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/contact/contact.js'

 function App(){
  return(
      <Router>
         <Header/>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/thanks' element={<Thanks />} />
            <Route path='/store' element={<Body />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App
