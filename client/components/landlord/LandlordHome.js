import React from 'react'
import LandlordSidebar from './LandlordSidebar'

export default class LandlordHome extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', backgroundColor:'pink'}}>
        <div style={{width:"15%", backgroundColor:'lightBlue'}}>
          <LandlordSidebar />
        </div>
        <div>
        <h4>LANDLORD HOME</h4>
        </div>
      </div>
    )
  }
}
