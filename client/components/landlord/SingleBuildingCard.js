import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {id, buildingName, address, unitCount} = this.props.buildInfo

    return (
      <div>
        <Link to={`/buildings/${id}`}>
        <h6>{buildingName}</h6>
        </Link>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
