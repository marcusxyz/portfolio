import { Link } from "gatsby"
import React from "react"

export default function Nav() {
  return (
    <nav>
      <div className="links">
        <div className="logo">
          <Link to="/">Marcus Hägerstrand</Link>
        </div>
        <div className="externals">
          <Link to="https://github.com/marcusxyz">Github</Link>
          <Link to="mailto:marcus.hagerstrand@gmail.com">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
