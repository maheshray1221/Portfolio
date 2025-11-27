import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AdminProvider } from './context/AdminContext'
import AdminAuth from './Admin-pages/AdminAuth'
import Layout from './Layout'
import About from "./Admin-pages/About.jsx"
import Skill from './Admin-pages/Skill.jsx'
import Project from './Admin-pages/Project.jsx'
import Experience from './Admin-pages/Experience.jsx'
import { PortfolioProvider } from './context/portfolio_context.jsx'
import { AboutUpdate } from './Admin-pages/Update-page/AboutUpdate.jsx'
export default function App() {
  return (
    <div>
      <Router>
        <AdminProvider>
          <PortfolioProvider>
            <Routes>
              <Route path='/admin-Auth' element={<AdminAuth />} />
              <Route path='/' element={<Layout />}>
                <Route path='about' element={<About />} />
                <Route path='about/:id' element={<AboutUpdate />} />
                <Route path='skill' element={<Skill />} />
                <Route path='skill/:id' element={<Skill />} />
                <Route path='project' element={<Project />} />
                <Route path='project/:id' element={<Project />} />
                <Route path='experience' element={<Experience />} />
                <Route path='experience/:id' element={<Experience />} />

              </Route>
            </Routes>
          </PortfolioProvider>
        </AdminProvider>
      </Router>
    </div>
  )
}

