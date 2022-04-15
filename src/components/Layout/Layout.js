import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteName="Marcus Hägerstrand" />
      <div className="wrapper">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
