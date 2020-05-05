import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import LandlordHome from './LandlordHome'
import AllBuildings from './AllBuildings'
import AllUnits from './AllUnits'
import AllTenants from './AllTenants'
import AllTickets from './ticketComponents/AllTickets'

import SingleBuildingView from './SingleBuildingView'
import SingleUnitView from './SingleUnitView'
import SingleTenantView from './SingleTenantView'


const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <h4>HOME</h4>,
    main: () => < LandlordHome />
  },
  {
    path: '/buildings/:id',
    exact: true,
    sidebar: () => <h4> My Buildings / {}</h4>,
    main: () => <Route exact path= '/buildings/:id' component={SingleBuildingView} />
  },
  {
    path: '/buildings',
    exact: true,
    sidebar: () => <h4>My Buildings</h4>,
    main: () => <AllBuildings />,
  },
  {
    path: '/units/:id',
    exact: true,
    sidebar: () => <h4> My Units / {}</h4>,
    main: () => <Route exact path= '/units/:id' component={SingleUnitView} />
  },
  {
    path: '/units',
    exact: true,
    sidebar: () => <h4>My Units</h4>,
    main: () => <AllUnits />
  },
  {
    path: '/tenants/:id',
    exact: true,
    sidebar: () => <h4> My Tenants / {}</h4>,
    main: () => <Route exact path= '/tenants/:id' component={SingleTenantView} />
  },
  {
    path: '/tenants',
    exact: true,
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
      // <Switch>
      <Router>
        <div style={{display: 'flex'}}>

          <div style={{ padding:'10px', width:'125px', backgroundColor:'pink'}}> {/*  START Sidebar */}

            <ul style={{listStyleType:'none', padding:'3px'}}>
              <li style={{paddingBottom:'20px'}}><Link to='/'>HOME</Link></li>
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
          </div> {/*  END Sidebar */}



          {/*  Our Pages */}
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
      // {/* </Switch> */}
    )
  }
}
