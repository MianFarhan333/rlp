import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './Pages/Loginpage'
import Signuppage from './Pages/Signuppage'
import Profilepage from './Pages/Profilepage'
// import {Store} from './redux/Store'

// const store = Store();
// console.log(Store);



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path='/Profile' element={<Profilepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App