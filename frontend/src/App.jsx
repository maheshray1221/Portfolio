import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AdminProvider } from './context/AdminContext'
import AdminAuth from './Admin-pages/AdminAuth'
import Layout from './Layout'
import About from "./Admin-pages/About.jsx"
export default function App() {
  return (
    <div>
      <Router>
        <AdminProvider>
          <Routes>
            <Route path='/admin-Auth' element={<AdminAuth />} />
            <Route path='/' element={<Layout />}>
              <Route path='about' element={<About />} />
              <Route path='project' />
            </Route>
          </Routes>
        </AdminProvider>
      </Router>
    </div>
  )
}

