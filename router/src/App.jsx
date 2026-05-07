import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import About  from './pages/About'
import Detail from './pages/Detail'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:subject' element={<Detail />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
