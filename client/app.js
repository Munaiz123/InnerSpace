import React from 'react'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'

import LandLordHub from './components/landlord/LandlordHub'

const App = props => {
  const {user} = props

  return (
    <div>
      {user.isLandlord ? (
        <div>
          <Navbar />
          <LandLordHub/>
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
