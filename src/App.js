import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import CourtRegistration from './pages/CourtRegistrations'
import MyCourts from './pages/MyCourts'
import SingleCourtPage from './pages/SingleCourtPage'
import UserCourtPage from './pages/UserCourtPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CourtRegistration" element={<CourtRegistration/>} />
        <Route path="/MyCourts" element={<MyCourts/>} />
        <Route path="/openCourtEdit/:id" element={<SingleCourtPage/>} />
        <Route path="/courtBooking/:id" element={<UserCourtPage/>} />


        

        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
