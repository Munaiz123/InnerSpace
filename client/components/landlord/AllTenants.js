import React from 'react'
import {connect} from 'react-redux'

import {fetchTenants} from '../../store/tenants'
import SingleTenantCard from './SingleTenantCard'

export class AllTenants extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      firstOrLast: 'firstName'
    }
    this.searchHandleChange = this.searchHandleChange.bind(this)
    this.handleNameFilter = this.handleNameFilter.bind(this)
  }

  componentDidMount() {
    this.props.fetchTenants()
  }

  searchHandleChange(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleNameFilter(event){
    this.setState({firstOrLast:event.target.value})

  }

  render() {
    let {allTenants} = this.props

    allTenants = allTenants.filter(ten =>
      ten[this.state.firstOrLast].toLowerCase().includes(this.state.search.toLowerCase())
    )

    console.log('allTenants', allTenants, this.state)
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', backgroundColor: 'gainsboro'}}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '3px',
              flexFlow: 'columnWrap'
            }}
          >
            <h1 style={{marginTop: '0px'}}>MY TENANTS</h1>
            {allTenants.map((ten, i) => (
              <SingleTenantCard key={i} index={i + 1} tenInfo={ten} />
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <h5 style={{paddingRight: '3px'}}> Search by:</h5>

            <select onChange={this.handleNameFilter}>
              <option value ='firstName'> First Name</option>
              <option value ='lastName'>Last Name</option>
            </select>

            <input
              name="search"
              onChange={this.searchHandleChange}
              defaultValue={this.state.search}
              placeholder={this.state.firstOrLast}
            />
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
