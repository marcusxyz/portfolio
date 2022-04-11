import React from "react"
import Nav from "../components/Nav/Nav"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"

// Project thumbnails
import Wunderlist from "../assets/images/wunderlist-thumb.png"
import Smoove from "../assets/images/smoove.webp"
import Kiviks from "../assets/images/kiviks-thumb-min.webp"
import Gallery from "../assets/images/berzelli-thumb-min.webp"
import HSB from "../assets/images/hsb-thumb-min.webp"
import Aesop from "../assets/images/aesop-thumb-min.webp"

import "normalize.css"
import "../assets/styles/global.scss"

export default function Home() {
  return (
    <body>
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
              topics={["School project", "CRUD app"]}
              languages={["PHP", "SQLite"]}
              title="Wunderlist"
              description="A simple todo list application that takes tasks submitted by user in a form and saves them in a SQLite database"
              link="https://github.com/marcusxyz/wunderlist"
              buttonText="View project on GitHub"
              image={Wunderlist}
              imageAlt="Water plants illustration"
              isWhite={false}
            />
            <Card
              topics={["Client work", "Cider mill"]}
              languages={["Web design", "Figma"]}
              title="Kiviks Musteri"
              description="Help showcase a wide range of products for a beverage company"
              link="https://www.kiviksmusteri.se/"
              buttonText="View website"
              image={Kiviks}
              imageAlt="Two Paul & Thom products floating in the air"
              isWhite={true}
            />
            <Card
              topics={["School project", "Automotive company"]}
              languages={["HTML/CSS", "JavaScript"]}
              title="Smoove"
              description="Landing page concept for a futuristic car"
              link="https://smoovepioneer.netlify.app/"
              buttonText="View website"
              image={Smoove}
              imageAlt="Smoove car panel"
              isWhite={true}
            />
            <Card
              topics={["School project", "Art gallery"]}
              languages={["Web design & development", "Figma", "PHP"]}
              title="Berzelii Gallery Dept"
              description="As a way to practice fundamental PHP I developed an art gallery page showcasing various art."
              link="https://marcushagerstrand.com/fine-art-gallery"
              buttonText="View website"
              image={Gallery}
              imageAlt="Night with her Train of Stars, 1912 The painting's title is derived from W. E Henley's (1849-1903) poem 'Margaritae Sorori' (Translates as 'Sister Margaret') Artist: E.R.Hughes (Edward Robert Hughes)"
              isWhite={true}
            />
            <Card
              topics={["Client work", "Concert Hall"]}
              languages={["Web design", "Sketch"]}
              title="Helsingborgs konserthus"
              description="Redesigned ticket listing and concert information for an overall improved user experience"
              link="https://helsingborgskonserthus.se/sok-evenemang/"
              buttonText="View website"
              image={HSB}
              imageAlt="View of ticket page for Helsingborgs konserthus with a blurred background"
              isWhite={true}
            />
            <Card
              topics={["School project", "Beauty supply store"]}
              languages={["Figma", "HTML/CSS", "JavaScript"]}
              title="Aesop"
              description="Designed and developed a landing page concept for Aesop"
              link="https://github.com/amandahulten/Landing-page"
              buttonText="View project on Github"
              image={Aesop}
              imageAlt="View of ticket page for Helsingborgs konserthus with a blurred background"
              isWhite={true}
            />
          </section>
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
                <a class="link" href="https://yrgo.se">
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
    </body>
  )
}
