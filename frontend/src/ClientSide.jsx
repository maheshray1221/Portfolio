import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PortfolioProvider } from './context/portfolio_context.jsx'
import Layout from './Layout'
import About from "./User-Pages/About.jsx"
import Skill from "./User-Pages/Skill.jsx"
import Project from "./User-Pages/Project.jsx"
import Experience from "./User-Pages/Experience.jsx"
import Contact from "./User-Pages/Contact.jsx"
export default function ClientSide() {
    return (
        <>
            <Router>
                <PortfolioProvider>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route path='about' element={<About />} />
                            <Route path='skill' element={<Skill />} />
                            <Route path='project' element={<Project />} />
                            <Route path='experience' element={<Experience />} />
                            <Route path='contact' element={<Contact />} />
                        </Route>
                    </Routes>
                </PortfolioProvider>
            </Router>
        </>
    )
}
