import React from 'react'
import LandlordSidebar from './LandlordSidebar'

export default class LandlordHome extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', backgroundColor:'pink'}}>
        <div style={{width:"25%", backgroundColor:'lightBlue'}}>
          <LandlordSidebar />
        </div>
        <h1>LANDLORD HOME</h1>
      </div>
    )
  }
}
