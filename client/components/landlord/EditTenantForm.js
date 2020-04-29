import React from 'react'
import {connect} from 'react-redux'

export class EditTenantForm extends React.Component {
  constructor() {
    super()
    this.state={}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(){
    event.preventDefault()

    // this.props.updateAUnit(this.state, this.props.unitId)

    this.setState({
      firstName:'',
      lastName:'',
      email:''
    })

    // this.props.fetchSingleUnit(this.props.unitId)

  }

  handleChange(){
    this.setState({[event.target.name]:event.target.value})
  }

  render() {

    console.log('EDIT FORM PROPS',this.props)


    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'spaceEvenly'
          }}
        >
          <input
            type="text"
            name="firstName"
            value={this.state.firstName || ''}
            onChange={this.handleChange}
            placeholder="First Name"
          />

          <input
            type="text"
            name="lastName"
            value={this.state.lastName || ''}
            onChange={this.handleChange}
            placeholder="Last Name"
          />

          <input
            type="text"
            name="email"
            value={this.state.email || ''}
            onChange={this.handleChange}
            placeholder="Email"
          />

          <button style={{backgroundColor: 'lightBlue'}} type="submit">
            Edit Unit
          </button>
        </form>
      </div>
    )
  }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
})

export default connect(mapState, mapDispatch)(EditTenantForm)
