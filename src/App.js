import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  )
}

export default App
