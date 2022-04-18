import React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="group-container">
          <div className="group">
            <h4>Contact me</h4>
            <ul>
              <li>
                <a className="link" href="mailto:marcus.hagerstrand@gmail.com">
                  hello@marcus.com
                </a>
              </li>
              <li>
                <a className="link" href="tel:0707640259">
                  +46 707 640 259
                </a>
              </li>
            </ul>
          </div>
          <div className="group">
            <h4>Follow me</h4>
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
          </div>
        </div>
        <div className="footer-title">
          <h3>Let's grab a coffee</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
