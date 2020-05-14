import React from 'react'
import {connect} from 'react-redux'

import {fetchSingleBuilding} from '../../../store/singleBuilding'
import EditBuildingForm from './EditBuildingForm'

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
      <div style={{padding: '5%'}}>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div id="singleBuildInfo" style={{width: '40%'}}>
            <h4>{building.buildingName}</h4>
            <h5>Address: {building.address}</h5>
            <h5>Number of Units: {building.unitsCount}</h5>
          </div>
          <div style={{width: '40%'}}>
            <h4>Edit Building</h4>
            <EditBuildingForm buildId={building.id} />
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', paddingTop:'5%'}}>
          <div style={{width: '40%'}}>
            <h3>UNITS</h3>
          </div>
          <div >
          <h3>TENANTS</h3>
          </div>
        </div>
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
