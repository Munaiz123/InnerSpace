import React from 'react'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import LandlordHome from './LandlordHome'
import AllBuildings from './AllBuildings'
import AllUnits from './AllUnits'
import AllTenants from './AllTenants'
import AllTickets from './AllTickets'


const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <h4>HOME</h4>,
    main: () => < LandlordHome />
  },
  {
    path: '/buildings',
    sidebar: () => <h4>My Buildings</h4>,
    main: () => <AllBuildings />
  },
  {path: '/units', sidebar: () => <h4>My Units</h4>, main: () => <AllUnits />},
  {
    path: '/tenants',
    sidebar: () => <h4>My Tenants</h4>,
    main: () => <AllTenants />
  },
  {
    path: '/tickets',
    sidebar: () => <h4>All Tickets</h4>,
    main: () => <AllTickets />
  }
]

export default class LandlordHub extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div style={{display: 'flex'}}>
          <div style={{ padding:'10px', width:'10%', backgroundColor:'pink'}}>
            <ul style={{listStyleType:'none', padding:'0'}}>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/buildings'>My Buildings</Link></li>
              <li><Link to='/units'> My Units</Link></li>
              <li><Link to='/tenants'>My Tenants</Link></li>
              <li><Link to='/tickets'>All Tickets</Link></li>
            </ul>

            {routes.map((route, index)=>(
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />

            ))}
          </div>

          <div style ={{flex:1, padding: '10px'}}>
          {routes.map((route, index)=>(
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>

        </div>
      </Router>
    )
  }
}
