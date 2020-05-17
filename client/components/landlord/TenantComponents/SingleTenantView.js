import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import EditTenantForm from './EditTenantForm'
import SingleTicketCard from '../TicketComponents/SingleTicketCard'

import {fetchSingleTenant} from '../../../store/singleTenant'
import {fetchTenantUnit} from '../../../store/singleUnit'
import {fetchTenantTickets} from '../../../store/tickets'

export class SingleTenantView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const tenantId = this.props.match.params.id

    this.props.fetchSingleTenant(tenantId)
    this.props.fetchTenantUnit(tenantId)
    this.props.fetchTenantTickets(tenantId)
  }

  render() {
    const {email,firstName, lastName, id} = this.props.tenant;
    const {unitNumber, bathroomCount, bedroomCount, rent} = this.props.unit
    const unitId = this.props.unit.id

    let {tickets} = this.props

    console.log('SINGLETENVIEW PROPS',tickets)

    return (
      <div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around' , width:'45%'}}>
          <div>
            <div className="singleTenantInfo"> {/* styled in style.css */}
              <h2>{firstName} {lastName}</h2>
              <p>{email}</p>
            </div>

            <div className="singleTenantInfo"> {/* styled in style.css */}
              <Link to={`/units/${unitId}`}>
              <h3>{unitNumber}</h3>
              </Link>
              <p> Baths: {bathroomCount}</p>
              <p> Beds: {bedroomCount}</p>
              <p> Rent: {rent}</p>
            </div>
          </div>

          <div style={{width:'45%'}} className="singleTenantInfo">
            <h4>Edit Tenant</h4>
            <EditTenantForm tenId={id}/>
          </div>

        </div>
        {tickets.length ?
          <div>
            <h5>Tenant Tickets</h5>
            {tickets.map((tick,i)=>(
              <SingleTicketCard index={i+1} tick={tick}/>
            ))}
          </div>
          : <React.Fragment />
        }
      </div>

    )
  }
}

const mapState = state => ({
  tenant: state.tenant,
  unit: state.unit,
  tickets: state.tickets
})

const mapDispatch = dispatch => ({
  fetchSingleTenant: id => dispatch(fetchSingleTenant(id)),
  fetchTenantUnit: id => dispatch(fetchTenantUnit(id)),
  fetchTenantTickets: id => dispatch(fetchTenantTickets(id))
})

export default connect(mapState, mapDispatch)(SingleTenantView)
