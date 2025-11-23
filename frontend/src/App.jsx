import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AdminProvider } from './context/AdminContext'
import AdminAuth from './Admin-pages/AdminAuth'
import Layout from './Layout'
import About from "./Admin-pages/About.jsx"
import Skill from './Admin-pages/Skill.jsx'
import Project from './Admin-pages/Project.jsx'
import Experience from './Admin-pages/Experience.jsx'
export default function App() {
  return (
    <div>
      <Router>
        <AdminProvider>
          <Routes>
            <Route path='/admin-Auth' element={<AdminAuth />} />
            <Route path='/' element={<Layout />}>
              <Route path='about' element={<About />} />
              <Route path='skill' element={<Skill />} />
              <Route path='project' element={<Project />} />
              <Route path='experience' element={<Experience />} />

            </Route>
          </Routes>
        </AdminProvider>
      </Router>
    </div>
  )
}

