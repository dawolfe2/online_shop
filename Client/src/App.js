import React from 'react';
import Header from './components/Header.js'
import Body from './components/Body.js'
import About from './components/about/about.js'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Contact from './components/contact/contact.js'

 function App(){
  return(
      <Router>
         <Header/>
         <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </Router>
  )
}

export default App
