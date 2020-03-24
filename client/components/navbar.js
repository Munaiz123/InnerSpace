import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            margin: '7px'
          }}
        >
          <h1>INNER SPACE</h1>
          {/* <Link to="/home">Home</Link> */}
          <Link to="#" onClick={handleClick} style={{margin: '7px'}}>
            {' '}
            Logout{' '}
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="landingPagelink">INNER SPACE</h1>
          <Link to="/login" className="landingPagelink">
            Login
          </Link>
          <Link to="/signup" className="landingPagelink">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
