import React from 'react'
import {connect} from 'react-redux'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log('PROPS FROM SINGLEBUILDING CARD', this.props)
    const {id, buildingName, address, unitCount} = this.props.buildInfo

    return (
      <div>
        <h4>Single Building Card</h4>
        {console.log(id, buildingName)}
        <h6>{id} {buildingName}</h6>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
