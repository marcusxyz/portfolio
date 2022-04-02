import React from "react"
import Nav from "../components/Nav/Nav"

import "normalize.css"
import "../assets/styles/global.scss"

export default function Home() {
  return (
    <section>
      <Nav />
      <div>
        <h1>Design</h1>
        <h2>Develop & deploy</h2>
        <p>lorem ipsum blablabla</p>
      </div>
    </section>
  )
}
