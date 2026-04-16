// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Product from './pages/Product'
// import Navbar from './components/Navbar'
// import Men from './pages/Men'
// import Women from './pages/Women'
// import RandomAbout from './pages/RandomAbout'
// import Courses from './pages/Courses'
// import Cohort1 from './pages/Cohort1'
// import AnyCourse from './pages/AnyCourse'
// import CourseDetail from './pages/CourseDetail'
// import NotFound from './pages/NotFound'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/product' element={<Product />} />
//         <Route path='/courses' element={<Courses />} />

//         {/* Nested Routes  */}
//         <Route path='/product/men' element={<Men />} />
//         <Route path='/product/women' element={<Women />} />

//         {/* Dynamic Route  */}
//         <Route path='/about/:id' element={<RandomAbout />} />
//         <Route path='/Courses/:courseId' element={<AnyCourse />} />

//         {/* Nested Dynamic Routes  */}
//         <Route path='/courses/:coursesId/detail' element={<CourseDetail />} />\

//         {/* Notfound Page  */}
//         <Route path='/*' element={<NotFound />} />

//       </Routes>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Courses from './pages/Courses'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import AnyCourse from './pages/AnyCourse'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import Teacher from './pages/Teacher'

const App = () => {
  return (
    <div >
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/courses' element={<Courses />} />

        //nested

        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />

        //Dynamic

        <Route path='/courses/:courseId' element={<AnyCourse />} />
        <Route path='/courses/:courseId/detail' element={<CourseDetail />} />

        <Route path='/*' element={<NotFound />} />

        <Route path='/courses/:courseId/detail/teacher' element={<Teacher />} />


        
        
      </Routes>

    </div>
  )
}

export default App
