import { Link } from "gatsby"
import React from "react"
import Proptypes from "prop-types"

import "./nav.scss"

const Header = ({ siteName }) => {
  return (
    <header>
      <div className="links">
        <div className="logo">
          <Link to="/">{siteName}</Link>
        </div>
        <div className="externals">
          <a href="https://github.com/marcusxyz">
            Github
            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_644_214)">
                <path d="M1.27511 8.97938e-07L1.27511 1.24862L9.75627 1.24862L-4.34978e-08 11.0049L0.995113 12L10.7514 2.24468L10.7514 10.7258L12 10.7258L12 4.29138e-07L1.27511 8.97938e-07Z" />
              </g>
              <defs>
                <clipPath id="clip0_644_214">
                  <rect
                    width="15"
                    height="15"
                    transform="translate(0 12) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="mailto:marcus.hagerstrand@gmail.com">
            Contact
            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_644_214)">
                <path d="M1.27511 8.97938e-07L1.27511 1.24862L9.75627 1.24862L-4.34978e-08 11.0049L0.995113 12L10.7514 2.24468L10.7514 10.7258L12 10.7258L12 4.29138e-07L1.27511 8.97938e-07Z" />
              </g>
              <defs>
                <clipPath id="clip0_644_214">
                  <rect
                    width="15"
                    height="15"
                    transform="translate(0 12) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteName: Proptypes.string.isRequired,
}

export default Header
