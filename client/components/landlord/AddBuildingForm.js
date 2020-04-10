import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addBuild} from '../../store/buildings'

export class AddBuildingForm extends React.Component {
  constructor() {
    super()
    this.state={}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(){
    event.preventDefault()
    // console.log(this.state)
    this.props.addBuild(this.state)

    this.setState({
      buildingName:'',
      address:'',
      unitsCount:''
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
            name="buildingName"
            value={this.state.buildingName || ''}
            onChange={this.handleChange}
            placeholder='Builing Name'
          />


          <input
            type="text"
            name="address"
            value={this.state.address || ''}
            onChange={this.handleChange}
            placeholder='Address'
          />

          <input
            type="text"
            name="unitsCount"
            value={this.state.unitsCount || ''}
            onChange={this.handleChange}
            placeholder='Number of Units'
          />

          <button style={{backgroundColor:'lightBlue'}} type="submit">Add Building</button>
        </form>


      </div>
    )
  }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
  addBuild: building => dispatch(addBuild(building))
})

export default connect(mapState, mapDispatch)(AddBuildingForm)
