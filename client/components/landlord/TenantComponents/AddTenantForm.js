import React from 'react'
import {connect} from 'react-redux'

import {addATenant} from '../../../store/tenants'



export class AddTenantForm extends React.Component {
  constructor() {
    super()
    this.state={}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(){
    event.preventDefault()
    this.props.addATenant(this.state)
    this.setState({
      firstName:'',
      lastName:'',
      email:''
    })

  }

  handleChange(){
    this.setState({[event.target.name]:event.target.value})
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}
        style={{display:'flex', flexDirection:'column', justifyContent:'spaceEvenly'}}
        >

        <input
            type="text"
            name="firstName"
            value={this.state.firstName || ''}
            onChange={this.handleChange}
            placeholder='First Name'
          />


          <input
            type="text"
            name="lastName"
            value={this.state.lastName || ''}
            onChange={this.handleChange}
            placeholder='Last Name'
          />

          <input
            type="text"
            name="email"
            value={this.state.email || ''}
            onChange={this.handleChange}
            placeholder='Email'
          />

          <button style={{backgroundColor:'lightBlue'}} type="submit">Add Tenant</button>
        </form>


      </div>
    )
  }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
  addATenant: tenant => dispatch(addATenant(tenant))

})

export default connect(mapState, mapDispatch)(AddTenantForm)
