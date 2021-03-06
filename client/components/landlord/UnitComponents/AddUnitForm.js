import React from 'react'
import {connect} from 'react-redux'

import {addAUnit} from '../../../store/units'

export class AddUnitForm extends React.Component{
  constructor(){
    super()
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    const {buildId} = this.props

    event.preventDefault()
    this.props.addAUnit(this.state,buildId)

    this.setState({
      unitNumber:'',
      bedroomCount:'',
      bathroomCount:'',
      rent:''
    })

  }

  handleChange(){
    this.setState({[event.target.name]:event.target.value})
  }



  render(){

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
            name="unitNumber"
            value={this.state.unitNumber || ''}
            onChange={this.handleChange}
            placeholder="Unit Number"
          />

          <input
            type="integer"
            name="bedroomCount"
            value={this.state.bedroomCount || ''}
            onChange={this.handleChange}
            placeholder="Number of Bedrooms"
          />

          <input
            type="integer"
            name="bathroomCount"
            value={this.state.bathroomCount || ''}
            onChange={this.handleChange}
            placeholder="Number of Bathrooms"
          />

          <input
            type="integer"
            name="rent"
            value={this.state.rent || ''}
            onChange={this.handleChange}
            placeholder="Rent"
          />

          <button style={{backgroundColor: 'lightBlue'}} type="submit">
            Add Unit
          </button>
        </form>
      </div>
    )
  }
}


const mapState = state => ({

})

const mapDispatch = dispatch =>({
  addAUnit: (unit,buildId) => dispatch(addAUnit(unit,buildId))
})

export default connect(mapState, mapDispatch)(AddUnitForm)
