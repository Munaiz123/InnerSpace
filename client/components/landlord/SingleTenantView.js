import React from 'react'
import {connect} from 'react-redux'

import EditTenantForm from './EditTenantForm'

import {fetchSingleTenant} from '../../store/singleTenant'

export class SingleTenantView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleTenant(this.props.match.params.id)
  }

  render() {
    const {email,firstName, lastName, id} = this.props.tenant;


    return (
      <div>
        <div>
          <div id="singleTenantInfo">
            <h4>SINGLE TENANT VIEW</h4>
            <h5>Name: {firstName} {lastName}</h5>
            <h5>Email: {email} </h5>
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
  tenant: state.tenant
})

const mapDispatch = dispatch => ({
  fetchSingleTenant: id => dispatch(fetchSingleTenant(id))
})

export default connect(mapState, mapDispatch)(SingleTenantView)
