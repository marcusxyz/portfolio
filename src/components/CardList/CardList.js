import React from "react"
import "./cardList.scss"

// Project thumbnails
import Wunderlist from "../../assets/images/wunderlist-thumb.png"
import Kiviks from "../../assets/images/kiviks-thumb-min.webp"
import Smoove from "../../assets/images/smoove.webp"
import Gallery from "../../assets/images/berzelli-thumb-min.webp"
import Helsingborg from "../../assets/images/hsb-thumb-min.webp"
import Aesop from "../../assets/images/aesop-thumb-min.webp"

const Cards = [
  {
    id: 1,
    title: "Wunderlist",
    description:
      "A simple todo list application that takes tasks submitted by user in a form and saves them in a SQLite database",
    link: "https://github.com/marcusxyz/wunderlist",
    buttonText: "View project on GitHub",
    image: Wunderlist,
    imageAlt: "Water plants illustration",
    topics: ["School project", "CRUD app"],
    languages: ["PHP", "SQLite"],
    isWhite: false,
  },
  {
    id: 2,
    title: "Kiviks Musteri",
    description:
      "Help showcase a wide range of products for a beverage company",
    link: "https://www.kiviksmusteri.se/",
    buttonText: "View website",
    image: Kiviks,
    imageAlt: "A product display on Kiviks website with a blurred background",
    topics: ["Client work", "Cider mill"],
    languages: ["Web design", "Figma"],
    isWhite: true,
  },
  {
    id: 3,
    title: "Smoove",
    description: "Landing page concept for a futuristic car",
    link: "https://smoovepioneer.netlify.app/",
    buttonText: "View website",
    image: Smoove,
    imageAlt: "Smoove car panel",
    topics: ["School project", "Automotive company"],
    languages: ["HTML/CSS", "JavaScript"],
    isWhite: true,
  },
  {
    id: 4,
    title: "Berzelii Gallery Dept",
    description:
      "As a way to practice fundamental PHP I developed an art gallery page showcasing various art",
    link: "https://marcushagerstrand.com/fine-art-gallery",
    buttonText: "View website",
    image: Gallery,
    imageAlt:
      "Night with her Train of Stars, 1912 The painting's title is derived from W. E Henley's (1849-1903) poem 'Margaritae Sorori' (Translates as 'Sister Margaret') Artist: E.R.Hughes (Edward Robert Hughes)",
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
    image: Helsingborg,
    imageAlt:
      "View of ticket page for Helsingborgs konserthus with a blurred background",
    topics: ["Client work", "Concert hall"],
    languages: ["Web design", "Sketch"],
    isWhite: true,
  },
  {
    id: 6,
    title: "Aesop",
    description: "Designed and developed a landing page concept for Aesop",
    link: "https://github.com/amandahulten/Landing-page",
    buttonText: "View project on Github",
    image: Aesop,
    imageAlt: "Outside view of a Aesop shop",
    topics: ["School project", "Beauty supply store"],
    languages: ["Figma", "HTML/CSS", "JavaScript"],
    isWhite: true,
  },
]

// console.log(Cards)

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
        <div className="thumbnail">
          <img src={props.card.image} alt={props.card.imageAlt} />
        </div>
      </a>
    </div>
  )
}

const CardList = () => {
  return (
    <section className="card-container">
      {Cards.map(card => {
        return <CardsListItem card={card} key={card.id} />
      })}
    </section>
  )
}

export default CardList
