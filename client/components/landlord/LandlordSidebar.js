import React from 'react'
import {NavLink, Link} from "react-router-dom"
import {connect} from 'react-redux'
import {logout} from '../../store//user'

export class LandlordSidebar extends React.Component{
  constructor(){
    super()
  }

  render(){
    const {user} = this.props
    console.log(this.props)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <h5>
          {user.firstName}
          {user.lastName}'s Sidebar
        </h5>
        <Link className="landlordLinks" to="/buildings">
          My Buildings
        </Link>
        <Link className="landlordLinks" to="/units">
          My Units
        </Link>
        <Link className="landlordLinks" to="/tenants">
          My Tenants
        </Link>
        <Link className="landlordLinks" to="/tickets">
          {' '}
          All Tickets
        </Link>
      </div>
    )
  }
}

const mapState = state => ({
  user:state.user
})

const mapDispatch = dispatch =>({
  logout : () => dispatch(logout())
})

export default connect(mapState,mapDispatch)(LandlordSidebar)
