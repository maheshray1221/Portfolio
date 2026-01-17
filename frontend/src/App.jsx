import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AdminProvider } from './context/AdminContext'
import AdminAuth from './Admin-pages/AdminAuth'
import ClientSide from './ClientSide.jsx'
import Layout from './Layout'
import About from "./Admin-pages/About.jsx"
import Skill from './Admin-pages/Skill.jsx'
import Project from './Admin-pages/Project.jsx'
import Experience from './Admin-pages/Experience.jsx'
import { PortfolioProvider } from './context/portfolio_context.jsx'
import { AboutUpdate } from './Admin-pages/Update-page/AboutUpdate.jsx'
import { SkillUpdate } from './Admin-pages/Update-page/SkillUpdate.jsx'
import { ExperienceUpdate } from './Admin-pages/Update-page/ExperienceUpdate.jsx'
import { ProjectUpdate } from './Admin-pages/Update-page/ProjectUpdate.jsx'
import MobileContact from './User-Pages/MobileContact.jsx'
export default function App() {
  return (
    <div>
      <Router>
        <AdminProvider>
          <PortfolioProvider>
            <Routes>
              <Route path='/' element={<ClientSide />} />
              <Route path='/talkme' element={<MobileContact/>}/>
              <Route path='/admin-Auth' element={<AdminAuth />} />
              <Route path='/admin' element={<Layout />}>
                <Route path='about' element={<About />} />
                <Route path='about/:id' element={<AboutUpdate />} />
                <Route path='skill' element={<Skill />} />
                <Route path='skill/:id' element={<SkillUpdate />} />
                <Route path='project' element={<Project />} />
                <Route path='project/:id' element={<ProjectUpdate />} />
                <Route path='experience' element={<Experience />} />
                <Route path='experience/:id' element={<ExperienceUpdate />} />
              </Route>
            </Routes>
          </PortfolioProvider>
        </AdminProvider>
      </Router>
    </div>
  )
}

