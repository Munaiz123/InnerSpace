import React from 'react'
import {connect} from 'react-redux'


import {Navbar} from './components'
import Routes from './routes'

import Sidebar from './components/landlord/LandlordSidebar'

const App = (props) => {
  const {user} = props

  return (
    <div>
      <Navbar />
      <Routes />
      {user.isLandlord ? <Sidebar /> : ''}
    </div>
  )
}



const mapState = state =>{
  return{
    user:state.user
  }
}

export default connect(mapState)(App)
