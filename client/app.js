import React from 'react'
import {connect} from 'react-redux'

import {Navbar} from './components'
import Routes from './routes'

import LandLordHome from './components/landlord/LandlordHome'

const App = props => {
  const {user} = props

  return (
    <div>
      {user.isLandlord ? (
        <div>
          <Navbar />
          <LandLordHome />
          <Routes />
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes />
        </div>
      )}
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(App)
