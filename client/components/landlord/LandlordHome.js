import React from 'react'
import LandlordSidebar from './LandlordSidebar'


export default class LandlordHome extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>LANDLORD HOME</h1>
        < LandlordSidebar />
      </div>
    )
  }
}
