import React from 'react'
import {NavLink, Link} from "react-router-dom"
import {connect} from 'react-redux'


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

        <NavLink to="/landlordhub/buildings" className="landlordLink" href="#">
          {' '}
          My Buildings
        </NavLink>

        <NavLink to="/landlordhub/units" className="landlordLink" href="#">
          {' '}
          My Units
        </NavLink>

        <NavLink to="/landlordhub/tenants" className="landlordLink" href="#">
          {' '}
          My Tenants
        </NavLink>

        <NavLink to="/landlordhub/tickets" className="landlordLink" href="#">
          {' '}
          Tenant Tickets
        </NavLink>

      </div>
    )
  }
}

const mapState = state => ({
  user:state.user
})

export default connect(mapState)(LandlordSidebar)
