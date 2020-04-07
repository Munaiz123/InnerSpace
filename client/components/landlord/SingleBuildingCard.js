import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {id, buildingName, address, unitsCount} = this.props.buildInfo
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Link to={`/buildings/${id}`} style={{'paddingRight':'5px'}}>
          <h6 style={{'marginBottom':"5px"}}>{buildingName}</h6>
          <h6 style={{'marginTop':"3px"}}>{address}</h6>
        </Link>
        <h6> Count: {unitsCount}</h6>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
