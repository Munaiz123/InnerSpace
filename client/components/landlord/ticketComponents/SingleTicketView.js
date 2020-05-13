import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchSingleTicket} from '../../../store/singleTicket'

export class SingleTicketView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleTicket(this.props.match.params.id)
  }

  render() {
    console.log('single ticket view props', this.props)
    const {singleTicket} = this.props
    const {ticketTenant, unit, building} = singleTicket
    let date = new Date(singleTicket.createdAt)

    return (
      <div
        id="singleTicketViewDiv"
        style={{padding: '3%', display: 'flex', flexDirection: 'column'}}
      >
        <div style={{width: '45%'}}>
          <h2>{singleTicket.issue}</h2>

          {building ? (
            <Link to={`/buildings/${building.id}`}>
              <h5>{building.buildingName}</h5>
            </Link>
          ) : ( <React.Fragment /> )}

          <h5>{date.toDateString()}</h5>
          <p>{singleTicket.details}</p>
          <h5>Mark as resolved BUTTON</h5>
        </div>

        {ticketTenant && unit ? (
          <div
            id="tenant&unitInfo"
            style={{display: 'flex', flexDirection: 'row'}}
          >
            <div style={{width: '45%'}}>
              <h1>Tenant Info</h1>
              <h5>
                {ticketTenant.firstName} {ticketTenant.lastName}
              </h5>
              <h5>{ticketTenant.email}</h5>
            </div>
            <div style={{width: '45%'}}>
              <h1>Unit Info</h1>
              <h5>{unit.unitNumber}</h5>
              <h5>{unit.bedroomCount}</h5>
              <h5>{unit.bathroomCount}</h5>
              <h5>{unit.rent}</h5>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  singleTicket: state.singleTicket
})

const mapDispatch = dispatch => ({
  fetchSingleTicket: id => dispatch(fetchSingleTicket(id))
})

export default connect(mapState, mapDispatch)(SingleTicketView)
