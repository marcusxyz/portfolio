import React from "react"
import PropTypes from "prop-types"

import "./card.scss"

export default function Card({
  title,
  description,
  link,
  topics,
  languages,
  buttonText,
  image,
  imageAlt,
  isWhite,
}) {
  return (
    <div className="project-card">
      <a href={link} rel="external">
        <div className={isWhite ? "content white" : "content"}>
          <div className="tags">
            <div className="topics bottom">
              <ul>
                {topics.map((topic, key) => {
                  return <li key={key}>{topic}</li>
                })}
              </ul>
            </div>
            <div className="languages top">
              <ul>
                {languages.map((language, key) => {
                  return (
                    <li
                      // style={{
                      //   color: isWhite ? "white" : "black",
                      //   border: isWhite ? "white" : "black",
                      // }}
                      className={isWhite ? "white" : ""}
                      key={key}
                    >
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
                  <g clip-path="url(#a)" fill="#000">
                    <path d="M0 7h16v2H0z" />
                    <path d="M7 16V0h2v16z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{buttonText}</span>
              </div>
            </button>
          </div>
          <div className="info">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="thumbnail">
          <img src={image} alt={imageAlt} />
        </div>
      </a>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isWhite: PropTypes.bool.isRequired,
}
