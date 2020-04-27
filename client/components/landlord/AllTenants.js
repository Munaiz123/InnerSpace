import React from 'react'
import {connect} from 'react-redux'

import {fetchTenants} from '../../store/tenants'


export class AllTenants extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.fetchTenants()

  }


  render(){
    console.log("this.props.AllTenants", this.props)
    return (
      <div>
        <h1>All Tenants</h1>
        <h6>TEST</h6>
      </div>
    )
  }
}

const mapState = state =>({
  tenants: state.tenants

})

const mapDispatch = dispatch =>({
  fetchTenants: () => dispatch(fetchTenants())

})

export default connect(mapState, mapDispatch)(AllTenants)
