import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import {connect} from 'react-redux'

import AllBuildings  from '../landlord/BuildingComponents/AllBuildings'
import AllUnits from './UnitComponents/AllUnits'
import AllTenants from './TenantComponents/AllTenants'
import AllTickets from  './ticketComponents/AllTickets'


export class LandlordSidebar extends React.Component{
  constructor(){
    super()
  }

  render(){
    const {user} = this.props

    return (
      <Router>
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

        <Link to="/landlordhub/buildings" className="landlordLink" >
          My Buildings
        </Link>

        <Link to="/landlordhub/units" className="landlordLink">
          My Units
        </Link>

        <Link to="/landlordhub/tenants" className="landlordLink">
          My Tenants
        </Link>

        <Link to="/landlordhub/tickets" className="landlordLink">
          Tenant Tickets
        </Link>

        <Switch>
          <Route exact path = '/landlordhub/buildings' component={AllBuildings} />
          <Route exact path = '/landlordhub/units' component={AllUnits} />
          <Route exact path = '/landlordhub/tenants' component={AllTenants} />
          <Route exact path = '/landlordhub/tickets' component={AllTickets} />
        </Switch>

      </div>
      </Router>
    )
  }
}

const mapState = state => ({
  user:state.user
})

export default connect(mapState)(LandlordSidebar)
