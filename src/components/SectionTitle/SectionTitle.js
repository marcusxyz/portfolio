import React from "react"
import PropTypes from "prop-types"

import "./SectionTitle.scss"

export default function SectionTitle({ title, text }) {
  return (
    <div className="section-title">
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}
