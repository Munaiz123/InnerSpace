import React from 'react'
import {connect} from 'react-redux'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {id, buildingName, address, unitCount} = this.props.buildInfo
    console.log('PROPS', this.props)

    return (
      <div>
        <h4>Single Building Card</h4>
        <h6>{} {buildingName}</h6>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
