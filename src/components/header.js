import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '75ch',
        padding: `1.45rem 1.0875rem`,
        display: 'inline',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#6dabc9`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link to="/AboutPage/" style={{ float: 'right', marginRight: 2}}>About</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Alessandro Allegranzi`,
}

export default Header
