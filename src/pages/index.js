import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import CardList from "../components/CardList/CardList"

import "normalize.css"
import "../assets/styles/global.scss"

const Home = () => {
  return (
    <div>
      <Layout>
        <Seo
          title="UI Designer & Developer"
          description="I'm Marcus Hägerstrand, a UI/UX Designer and developer with a passion for
            simplistic, user-friendly design and animations"
        />
        <Title />
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
              simplistic design, animation/interaction, problem-solving, and for
              mastering the latest front-end technologies.
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
            </>
          }
        />
      </Layout>
    </div>
  )
}

export default Home
