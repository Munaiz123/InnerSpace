import React from 'react'
import {connect} from 'react-redux'

import {fetchSingleUnit} from '../../store/singleUnit'
import {fetchSingleTenant} from '../../store/singleTenant'
import {fetchSingleBuilding} from '../../store/singleBuilding'

import EditUnitForm from './EditUnitForm'

export class SingleUnitView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleUnit(this.props.match.params.id)
    // await this.props.fetchSingleTenant(this.props.unit.tenantId)
    // await this.props.fetchSingleBuilding(this.props.unit.buildingId)
    // lets pull up tenant info + building info
  }

  render() {
    const {unit} = this.props
    console.log(unit.building, unit.tenant)

    return (
      <div id="singleUnitViewDiv">
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{width:'25%'}}>
            <h4>{unit.unitNumber}</h4>
            <h6>Bedroom Count: {unit.bedroomCount}</h6>
            <h6>Bathroom Count: {unit.bathroomCount}</h6>
            <h6>Tenant Name</h6>
            <h6>Building Name</h6>
          </div>

          <div style={{width:'45%'}}>
            <h4>Edit Unit</h4>
            <EditUnitForm unitId={unit.id} />
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{width:'25%'}}>
            <h4>Tenant Info</h4>
          </div>

          <div>
            <h4>Building Info</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  unit: state.unit,
  tenant: state.tenant,
  building:state.building
})

const mapDispatch = dispatch => ({
  fetchSingleUnit: id => dispatch(fetchSingleUnit(id)),
  fetchSingleTenant: id => dispatch(fetchSingleTenant(id)),
  fetchSingleBuilding: id => dispatch(fetchSingleBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleUnitView)
