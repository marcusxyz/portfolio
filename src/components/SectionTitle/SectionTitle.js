import React from "react"
import { Fade } from "react-reveal"
import PropTypes from "prop-types"

import "./sectionTitle.scss"

const SectionTitle = ({ title, text }) => {
  return (
    <div className="section-title">
      <Fade bottom cascade distance="16px" delay={100}>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </Fade>
    </div>
  )
}

export default SectionTitle

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
