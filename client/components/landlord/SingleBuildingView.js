import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchSingleBuilding} from '../../store/singleBuilding'

export class SingleBuildingView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let buildingId = this.props.match.params.id
    this.props.fetchSingleBuilding(buildingId)
  }

  render() {
    let {singleBuilding} = this.props
    console.log("this.props", this.props.singleBuilding)

    return (
      <div>
        <h4>Single View</h4>
        {/* <h6>{singleBuilding.id}</h6> */}
        {/* <h6>{singleBuilding.buildingName}</h6> */}
      </div>
    )
  }
}

const mapState = state => ({
  singleBuilding: state.singleBuilding
})

const mapDispatch = dispatch => ({
  fetchSingleBuilding: id => dispatch(fetchSingleBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleBuildingView)
