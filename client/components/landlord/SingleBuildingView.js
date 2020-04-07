import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchSingleBuilding} from '../../store/singleBuilding'

export class SingleBuildingView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleBuilding(this.props.match.params.id)
  }

  render() {
    let {building} = this.props


    return (
      <div>
        <h4>{building.buildingName}</h4>
      </div>
    )
  }
}

const mapState = state => ({
  building: state.building
})

const mapDispatch = dispatch => ({
  fetchSingleBuilding: id => dispatch(fetchSingleBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleBuildingView)
