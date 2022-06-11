import React from "react"
import { Fade } from "react-reveal"

import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="group-container">
          <div className="group">
            <Fade bottom distance="8px" ssrFadeout>
              <h4>Contact me</h4>
            </Fade>
            <Fade bottom cascade distance="24px" delay={100} ssrFadeout>
              <ul>
                <li>
                  <a
                    className="link"
                    href="mailto:marcus.hagerstrand@gmail.com"
                  >
                    Say hi
                  </a>
                </li>
                <li>
                  <a className="link" href="tel:0707640259">
                    +46 707 640 259
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
          <div className="group">
            <Fade bottom distance="8px" delay={100} ssrFadeout>
              <h4>Follow me</h4>
            </Fade>
            <Fade bottom cascade distance="24px" delay={200} ssrFadeout>
              <ul>
                <li>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/marcus-h%C3%A4gerstrand-218b22a5/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="link" href="https://github.com/marcusxyz">
                    Github
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        </div>
        <div className="footer-title">
          <Fade bottom cascade distance="16px" delay={300} ssrFadeout>
            <h3>Let's grab a coffee</h3>
          </Fade>
        </div>
      </div>
    </footer>
  )
}

export default Footer
