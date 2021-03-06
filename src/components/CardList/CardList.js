import React from "react"
import { Fade } from "react-reveal"
import { StaticImage } from "gatsby-plugin-image"

import "./cardList.scss"

const Cards = [
  {
    id: 1,
    title: "Yum Yum",
    description:
      "Developed a simple restaurant website powered by Contentful API",
    link: "https://github.com/marcusxyz/yumyum",
    buttonText: "View project on Github",
    image: (
      <StaticImage
        src="../../assets/images/06-yumyum-min.webp"
        alt="Restaurant during rush hour"
        placeholder="blurred"
      />
    ),
    topics: ["School project", "Ramen shop"],
    languages: ["React", "Contentful", "Styled-components"],
    isWhite: true,
  },
  {
    id: 2,
    title: "Wunderlist",
    description:
      "A simple todo list application that takes tasks submitted by user in a form and saves them in a SQLite database",
    link: "https://github.com/marcusxyz/wunderlist",
    buttonText: "View project on GitHub",
    image: (
      <StaticImage
        src="../../assets/images/01-wunderlist-thumb.png"
        alt="Water plants illustration"
        placeholder="blurred"
      />
    ),
    topics: ["School project", "CRUD app"],
    languages: ["PHP", "SQLite"],
    isWhite: false,
  },
  {
    id: 3,
    title: "Kiviks Musteri",
    description:
      "Help showcase a wide range of products for a beverage company",
    link: "https://www.kiviksmusteri.se/",
    buttonText: "View website",
    image: (
      <StaticImage
        src="../../assets/images/02-kiviks-thumb-min.webp"
        alt="A product display on Kiviks website with a blurred background"
        placeholder="blurred"
      />
    ),
    topics: ["Client work", "Cider mill"],
    languages: ["Web design", "Figma"],
    isWhite: true,
  },
  {
    id: 4,
    title: "Berzelii Gallery Dept",
    description:
      "As a way to practice fundamental PHP I developed an art gallery page showcasing various art",
    link: "https://github.com/marcusxyz/fine-art-gallery",
    buttonText: "View project on Github",
    image: (
      <StaticImage
        src="../../assets/images/04-gallery-thumb-min.webp"
        alt="Night with her Train of Stars, 1912 The painting's title is derived from W. E Henley's (1849-1903) poem 'Margaritae Sorori' (Translates as 'Sister Margaret') Artist: E.R.Hughes (Edward Robert Hughes)"
        placeholder="blurred"
      />
    ),
    topics: ["School project", "Art gallery"],
    languages: ["Web design & development", "Figma", "PHP"],
    isWhite: true,
  },
  {
    id: 5,
    title: "Helsingborgs konserthus",
    description:
      "Redesigned ticket listing and concert information for an overall improved user experience",
    link: "https://helsingborgskonserthus.se/sok-evenemang/",
    buttonText: "View website",
    image: (
      <StaticImage
        src="../../assets/images/05-hsb-thumb-min.webp"
        alt="View of ticket page for Helsingborgs konserthus with a blurred background"
        placeholder="blurred"
      />
    ),
    topics: ["Client work", "Concert hall"],
    languages: ["Web design", "Sketch"],
    isWhite: true,
  },
  {
    id: 6,
    title: "Smoove",
    description: "Landing page concept for a futuristic car",
    link: "https://smoovepioneer.netlify.app/",
    buttonText: "View website",
    image: (
      <StaticImage
        src="../../assets/images/03-smoove-thumb-min.webp"
        alt="Smoove car panel"
        placeholder="blurred"
      />
    ),
    topics: ["School project", "Automotive company"],
    languages: ["HTML/CSS", "JavaScript"],
    isWhite: true,
  },
]

const CardsListItem = props => {
  return (
    <div className="project-card">
      <a href={props.card.link} rel="external">
        <div className={props.card.isWhite ? "content white" : "content"}>
          <div className="tags">
            <div className="topics bottom">
              <ul>
                {props.card.topics.map((topic, key) => {
                  return <li key={key}>{topic}</li>
                })}
              </ul>
            </div>
            <div className="languages top">
              <ul>
                {props.card.languages.map((language, key) => {
                  return (
                    <li className={props.card.isWhite ? "white" : ""} key={key}>
                      {language}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="button">
            <button>
              <div className="button-content">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path d="M0 7h16v2H0z" />
                    <path d="M7 16V0h2v16z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{props.card.buttonText}</span>
              </div>
            </button>
          </div>
          <div className="info">
            <h4>{props.card.title}</h4>
            <p>{props.card.description}</p>
          </div>
        </div>
        <div className="thumbnail">{props.card.image}</div>
      </a>
    </div>
  )
}

const CardList = () => {
  return (
    <Fade>
      <section className="card-container">
        {Cards.map(card => {
          return <CardsListItem card={card} key={card.id} />
        })}
      </section>
    </Fade>
  )
}

export default CardList
