import React from "react"
import Nav from "../components/Nav/Nav"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import CardList from "../components/CardList/CardList"
import Footer from "../components/Footer/Footer"

import "normalize.css"
import "../assets/styles/global.scss"

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
        <Title />
        <div className="wrapper">
          <SectionTitle
            title="Selected projects"
            text="I’ve worked on a variety of projects helping clients from different sectors to create beautiful and user-focused websites. This list contains a mix of previous client work and school projects."
          />
          <CardList />
          <SectionTitle
            title="About me"
            text={
              <>
                A creative UI Designer and developer student with a passion for
                simplistic design, animation/interaction, problem-solving, and
                for mastering the latest front-end technologies.
                <br />
                <br />
                I'm currently studying at{" "}
                <a className="link" href="https://yrgo.se">
                  Yrgo
                </a>{" "}
                to hopefully make use of my UI/UX knowledge in the coding world
                and most importantly, to encourage good cooperation and
                communication between designers and developers.
                <br />
                <br />
                Outside of work, I enjoy jogging in the woods, casual gaming and
                taking care of my house plants. 🪴
                <br />
                <br />
                <a
                  className="link"
                  href="https://marcushagerstrand.com/documents/CV.pdf"
                >
                  View Resumé
                </a>
              </>
            }
          />
        </div>
        <Footer />
      </main>
    </div>
  )
}
