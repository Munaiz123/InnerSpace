import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchSingleTicket} from '../../../store/singleTicket'

export class SingleTicketView extends React.Component {
  constructor(props) {
    super(props)
    const {ticketStatus} = props.location.state // comes from react Link in SingleTicketCard

    this.state = {
      ticketStatus:ticketStatus
    }

    this.handleButton = this.handleButton.bind(this)
  }

  componentDidMount() {
    this.props.fetchSingleTicket(this.props.match.params.id)
  }

  handleButton(){
   this.setState((state)=>({
     ticketStatus: !state.ticketStatus
   }))
  }

  render() {
    console.log('single ticket view props', this.props)
    const {singleTicket} = this.props
    const {ticketTenant, unit, building} = singleTicket
    let date = new Date(singleTicket.createdAt)

    console.log("this.state", this.state)



    return (
      <div
        id="singleTicketViewDiv"
        style={{padding: '3%', display: 'flex', flexDirection: 'column'}}
      >
        <div style={{width: '45%'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <h2>{singleTicket.issue}</h2>
            {this.state.ticketStatus ? <button style={{backgroundColor:'green', height:'5%'}} onClick={this.handleButton} type='button'>Resolve Ticket</button>
            : <button style={{backgroundColor:'red', height:'5%'}} onClick={this.handleButton} type='button'> Mark as pending</button>}
          </div>

          {building ? (
            <Link to={`/buildings/${building.id}`}>
              <h5>{building.buildingName}</h5>
            </Link>
          ) : ( <React.Fragment /> )}

          <h5>{date.toDateString()}</h5>
          <p>{singleTicket.details}</p>
        </div>

        {ticketTenant && unit ?
          <div
            id="tenant&unitInfo"
            style={{display: 'flex', flexDirection: 'row'}}
          >
            <div style={{width: '45%'}}>
              <h1>Tenant Info</h1>
              <Link to={`/tenants/${ticketTenant.id}`}>
                <h5> {ticketTenant.firstName} {ticketTenant.lastName}</h5>
              </Link>
              <h5>{ticketTenant.email}</h5>
            </div>

            <div style={{width: '45%'}}>
              <h1>Unit Info</h1>
              <Link to={`/units/${unit.id}`}>
                <h5>Unit Number: {unit.unitNumber}</h5>
              </Link>
              <h5>Bed: {unit.bedroomCount}</h5>
              <h5>Bath: {unit.bathroomCount}</h5>
              <h5>Rent: {unit.rent}</h5>
            </div>

          </div> : ( <React.Fragment /> )}
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
