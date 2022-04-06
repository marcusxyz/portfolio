import React from "react"
import Nav from "../components/Nav/Nav"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Card from "../components/Card/Card"

// Project thumbnails
import Wunderlist from "../assets/images/wunderlist-thumb.png"
import Smoove from "../assets/images/smoove.webp"
import PaulThom from "../assets/images/pot-thumb-min.webp"
import HSB from "../assets/images/hsb-thumb-min.webp"

import "normalize.css"
import "../assets/styles/global.scss"

export default function Home() {
  return (
    <main>
      <Nav />
      <Title />
      <div className="wrapper">
        <SectionTitle
          title="Selected projects"
          text="I’ve worked on a variety of projects helping clients from different sectors to create beautiful and user-focused websites. This list contains a mix of previous client work and school projects."
        />
        <section className="card-container">
          <Card
            topics={["School project", "Web app"]}
            languages={["PHP", "SQLite"]}
            title="Wunderlist"
            description="A simple todo list application that takes tasks submitted by user in a form and saves them in a SQLite database"
            image={Wunderlist}
            imageAlt="Water plants illustration"
            isWhite={false}
          />
          <Card
            topics={["Concept", "School project"]}
            languages={["JavaScript", "HTML/CSS"]}
            title="Smoove"
            description="A simple todo list application that takes tasks submitted by user in a form and saves them in a SQLite database"
            image={Smoove}
            imageAlt="Smoove car panel"
            isWhite={true}
          />
          <Card
            topics={["Client work", "Wholesaler"]}
            languages={["Web design", "Figma"]}
            title="Paul & Thom"
            description="Recipe focused website for all tapas and gourmet lovers"
            image={PaulThom}
            imageAlt="Two Paul & Thom products floating in the air"
            isWhite={true}
          />
          <Card
            topics={["Client work", "Concert Hall"]}
            languages={["Web design", "Figma"]}
            title="Helsingborgs konserthus"
            description="Recipe focused website for all tapas and gourmet lovers"
            image={HSB}
            imageAlt="Two Paul & Thom products floating in the air"
            isWhite={true}
          />
        </section>
      </div>
    </main>
  )
}
