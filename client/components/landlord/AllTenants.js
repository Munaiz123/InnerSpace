import React from 'react'
import {connect} from 'react-redux'

import {fetchTenants} from '../../store/tenants'
import SingleTenantCard from './SingleTenantCard'

export class AllTenants extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchTenants()
  }

  render() {
    const {allTenants} = this.props
    console.log(allTenants)
    return (
      <div>
        <div style={{width: '30%', backgroundColor: 'gainsboro'}}>
          <h1 style={{marginTop: '0px'}}>MY TENANTS</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '3px',
              flexFlow: 'columnWrap'
            }}
          >
            {allTenants.map((ten, i) => (
              <SingleTenantCard key={i} index={i + 1} tenInfo={ten} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allTenants: state.tenants
})

const mapDispatch = dispatch => ({
  fetchTenants: () => dispatch(fetchTenants())
})

export default connect(mapState, mapDispatch)(AllTenants)
