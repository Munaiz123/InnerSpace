import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Sidebar from './landlord/LandlordSidebar'


/**
 * COMPONENT
 */


export class UserHome extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {user} = this.props

    return (
      <div>
        <h3>Welcome Back, {user.firstName}!</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
