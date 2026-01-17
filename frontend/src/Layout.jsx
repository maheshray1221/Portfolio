import React from 'react'

import { Outlet } from "react-router-dom"
import Header from './Admin-pages/header'
import Footer from './Admin-pages/footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
