import React from "react"
import Nav from "../components/Nav/Nav"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"

import "normalize.css"
import "../assets/styles/global.scss"

export default function Home() {
  return (
    <section>
      <Nav />
      <Title />
      <div className="wrapper" style={{ padding: "0 2.5rem" }}>
        <SectionTitle
          title="Selected projects"
          text="I’ve worked on a variety of projects helping clients from different sectors to create beautiful and user-focused websites. This list contains a mix of previous client work and school projects."
        />
      </div>
    </section>
  )
}
