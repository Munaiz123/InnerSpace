import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {updateBuilding} from '../../store/buildings'


export class EditBuildingForm extends React.Component {
  constructor() {
    super()
    this.state={}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(){
    event.preventDefault()
    this.props.updateBuilding(this.state,this.props.buildId)
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

          <button style={{backgroundColor:'lightBlue'}} type="submit">Update Building</button>
        </form>


      </div>
    )
  }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
  updateBuilding: (building,id) => dispatch(updateBuilding(building,id))
})

export default connect(mapState, mapDispatch)(EditBuildingForm)
