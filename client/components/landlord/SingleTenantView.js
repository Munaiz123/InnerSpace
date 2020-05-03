import React from 'react'
import {connect} from 'react-redux'

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


    return (
      <div>
        <div>
          <div style={{display:'flex', flexDirection:'row'}}>
          <div id="singleTenantInfo"> {/* styled in style.css */}
            <h3>SINGLE TENANT VIEW</h3>
            <h5>Name: {firstName} {lastName}</h5>
            <h5>Email: {email} </h5>
          </div>
          <div id="singleTenantInfo">
            <h4>Unit Information </h4>
            <h5> Unit Number: {unitNumber}</h5>
            <h5> Number of Bath: {bathroomCount}</h5>
            <h5> Number of Bed: {bedroomCount}</h5>
            <h5> Rent: {rent}</h5>
          </div>
          </div>
          <div>
            <h4>Edit Tenant</h4>
            <EditTenantForm tenId={id}/>
          </div>
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
