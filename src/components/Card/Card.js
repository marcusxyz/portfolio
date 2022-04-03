import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./card.scss"

export default function Card({
  title,
  description,
  sector,
  languages,
  image,
  imageAlt,
}) {
  return (
    <div className="project-card">
      <div className="content">
        <div className="tags">
          <div className="sector">
            <li>{sector}</li>
          </div>
          <div className="languages">
            <li>
              {languages.length} scoops: {languages.join(", ")}
            </li>
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
  sector: PropTypes.arrayOf(PropTypes.string).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
