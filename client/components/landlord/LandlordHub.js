import React from 'react'
import LandlordSidebar from './LandlordSidebar'

import {Route, Switch} from 'react-router-dom'

import AllBuildings from './AllBuildings'
import AllUnits from './AllUnits'
import AllTenants from './AllTenants'
import AllTickets from './AllTickets'

export default class LandlordHub extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', backgroundColor:'pink'}}>
        <div style={{width:"15%", backgroundColor:'lightBlue'}}>
          <LandlordSidebar />
          <Switch>
            <Route  path="/landlordhub/buildings" component={AllBuildings} />
            <Route  path="/landlordhub/units" component={AllUnits} />
            <Route  path="/landlordhub/tenants" component={AllTenants} />
            <Route  path="/landlordhub/tickets" component={AllTickets} />
          </Switch>

        </div>
        <div>
        <h4>LANDLORD HUB</h4>
        </div>
      </div>
    )
  }
}
