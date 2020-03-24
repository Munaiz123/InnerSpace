import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'


import LandlordHome from './components/landlord/LandlordHome'
import AllBuildings from './components/landlord/AllBuildings'
import AllUnits from './components/landlord/AllUnits'
import AllTenants from './components/landlord/AllTenants'
import AllTickets from './components/landlord//AllTickets'


import {me} from './store'


/**
 * COMPONENT
 */


class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isLandlord} = this.props


    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {isLandlord && (
          <Switch>
            {/* Routes placed here are only available to loggged in landlords  */}
            <Route path="/landlordhome" component={LandlordHome} />
            <Route exact path = '/buildings' component={AllBuildings} />
            <Route exact path = '/units' component={AllUnits} />
            <Route exact path = '/tenants' component={AllTenants} />
            <Route exact path = '/tickets' component={AllTickets} />


          </Switch>
        )}

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available to logged in tenants */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}

        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isLandlord: state.user.isLandlord
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
