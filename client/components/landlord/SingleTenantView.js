import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import EditTenantForm from './EditTenantForm'

import {fetchSingleTenant} from '../../store/singleTenant'
import {fetchTenantUnit} from '../../store/singleUnit'

export class SingleTenantView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleTenant(this.props.match.params.id)
    this.props.fetchTenantUnit(this.props.match.params.id)
  }

  render() {
    const {email,firstName, lastName, id} = this.props.tenant;
    const {unitNumber, bathroomCount, bedroomCount, rent} = this.props.unit
    const unitId = this.props.unit.id

    return (
      <div style={{display:'flex', flexDirection:'column'}}>

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

        <div className="singleTenantInfo">
          <h4>Edit Tenant</h4>
          <EditTenantForm tenId={id}/>
        </div>

      </div>

    )
  }
}

const mapState = state => ({
  tenant: state.tenant,
  unit: state.unit
})

const mapDispatch = dispatch => ({
  fetchSingleTenant: id => dispatch(fetchSingleTenant(id)),
  fetchTenantUnit: id => dispatch(fetchTenantUnit(id))
})

export default connect(mapState, mapDispatch)(SingleTenantView)
