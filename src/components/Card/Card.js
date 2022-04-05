import React from "react"
import PropTypes from "prop-types"

import "./card.scss"

export default function Card({
  title,
  description,
  topics,
  languages,
  image,
  imageAlt,
  isWhite,
}) {
  return (
    <div className="project-card">
      <div className={isWhite ? "content white" : "content"}>
        <div className="tags">
          <div className="topics">
            <ul>
              {topics.map((topic, key) => {
                return <li key={key}>{topic}</li>
              })}
            </ul>
          </div>
          <div className="languages">
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
        <div className="info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="thumbnail">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isWhite: PropTypes.bool.isRequired,
}
