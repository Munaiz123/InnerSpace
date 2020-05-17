import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchSingleTicket, toggleStatus} from '../../../store/singleTicket'

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
   this.props.toggleStatus(this.props.match.params.id)
  }

  render() {
    const {singleTicket} = this.props
    const {ticketTenant, unit, building} = singleTicket
    let createdDate = new Date(singleTicket.createdAt)
    let updatedDate = new Date(singleTicket.updatedAt)

    console.log('SINGLE TICKET VIEW PROPS', this.props)

    return (
      <div
        id="singleTicketViewDiv"
        style={{padding: '3%', display: 'flex', flexDirection: 'column'}}
      >
        <div style={{width: '45%'}}>

          <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <h2>{singleTicket.issue}</h2>

            { /** if ticketStatus is pending (false) then show green button that toggles it to completed (true) other wise show red button which toggles ticket.pending to true */
            this.state.ticketStatus ?
              <button style={{backgroundColor:'green', height:'5%'}}
              onClick={this.handleButton} type='button'>Resolve Ticket</button>
              :
              <button style={{backgroundColor:'red', height:'5%'}}
              onClick={this.handleButton} type='button'> Mark as pending</button>
            }
          </div>

          {building ? (
            <Link to={`/buildings/${building.id}`}>
              <h5>{building.buildingName}</h5>
            </Link>
          ) : ( <React.Fragment /> )}

          <h5 style={{marginBottom:'0px'}}>Submitted: {createdDate.toDateString()}</h5>
          {/* Only show updatedDate if ticket has been marked as complete ⤵️ */}
          {this.state.ticketStatus ? <React.Fragment /> : <h5 style={{marginTop:'0px'}}>Updated: {updatedDate.toDateString()}</h5>}
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
  fetchSingleTicket: id => dispatch(fetchSingleTicket(id)),
  toggleStatus: id => dispatch(toggleStatus(id))
})

export default connect(mapState, mapDispatch)(SingleTicketView)
