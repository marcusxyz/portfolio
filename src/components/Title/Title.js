import React from "react"
import { Fade } from "react-reveal"

import "./title.scss"

export default function Title() {
  return (
    <div className="hero">
      <Fade top distance="32px">
        <h1>UI designer & Developer student based in Gothenburg</h1>
      </Fade>
      <Fade top distance="8px" delay={400}>
        <div className="status">
          <div>
            <span className="circle"></span>
            <p className="status">Available for projects</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
