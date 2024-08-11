import React from 'react' 
import Home from './Home/Home' 
import Courses from './courses/Courses';
import {Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Contents from './Contents/Contents';

export default function App() {
  return (
    <div> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/course" element={<Courses />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/content" element={<Contents />}/>
        </Routes>
    </div>
  )
}

