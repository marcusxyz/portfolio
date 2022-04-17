import React from "react"
import PropTypes from "prop-types"

import "./sectionTitle.scss"

const SectionTitle = ({ title, text }) => {
  return (
    <div className="section-title">
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SectionTitle

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
