import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchSingleUnit} from '../../../store/singleUnit'
import {fetchUnitTickets} from '../../../store/tickets'

import EditUnitForm from './EditUnitForm'

export class SingleUnitView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let unitId = this.props.match.params.id
    this.props.fetchSingleUnit(unitId)
    this.props.fetchUnitTickets(unitId)
  }

  render() {
    const {unit} = this.props
    const {building, tenant} = unit

    console.log("this.props single unit view", this.props)

    if (building && tenant) {
      return (
        <div id="singleUnitViewDiv">
          <div>
          <div style={{display: 'flex', flexDirection: 'row'}}>

            <div style={{width: '25%'}}>
              <h1>{unit.unitNumber}</h1>
              <h6>Bedroom Count: {unit.bedroomCount}</h6>
              <h6>Bathroom Count: {unit.bathroomCount}</h6>
              <h6>Rent: {unit.rent}</h6>
            </div>

            <div style={{width: '45%'}}>
              <h4>Edit Unit</h4>
              <EditUnitForm unitId={unit.id} />
            </div>

          </div>

          <div style={{display: 'flex', flexDirection: 'row'}}>

            <div style={{width: '25%'}}>
              {/* <h4>Tenant Info</h4> */}
              <Link to={`/tenants/${tenant.id}`}>
              <h6> Tenant Name: {tenant.firstName} {tenant.lastName} </h6>
              </Link>
              <h6> Email: {tenant.email} </h6>
            </div>

            <div>
              {/* <h3>Building Info</h3> */}
              <Link to={`/buildings/${building.id}`}>
              <h6>Building Name: {building.buildingName}</h6>
              </Link>
              <h6>Address: {building.address}</h6>

            </div>
          </div>
          </div>
          <div>
            <h4>Previous Unit Tickets</h4>

          </div>
        </div>
      )
    } else return <div></div>
  }
}

const mapState = state => ({
  unit: state.unit,
  tickets: state.tickets
})

const mapDispatch = dispatch => ({
  fetchSingleUnit: id => dispatch(fetchSingleUnit(id)),
  fetchUnitTickets: id => dispatch(fetchUnitTickets(id))
})

export default connect(mapState, mapDispatch)(SingleUnitView)
