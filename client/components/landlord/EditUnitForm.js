import React from 'react'
import {connect} from 'react-redux'

import {updateAUnit} from '../../store/units'
import {fetchSingleUnit} from '../../store/singleUnit'

export class EditUnitForm extends React.Component {
  constructor() {
    super()
    this.state={}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(){
    event.preventDefault()

    this.props.updateAUnit(this.state, this.props.unitId)

    this.setState({
      unitNumber:'',
      bedroomCount:'',
      bathroomCount:'',
      rent:''
    })

    this.props.fetchSingleUnit(this.props.unitId)

  }

  handleChange(){
    this.setState({[event.target.name]:event.target.value})
  }

  render() {

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
  fetchSingleUnit: id => dispatch(fetchSingleUnit(id)),
  updateAUnit: (unit, id) => dispatch(updateAUnit(unit,id))
})

export default connect(mapState, mapDispatch)(EditUnitForm)
