import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


export class BuildingForm extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {


    return (
      <div>
      <h3>FORM (TEST)</h3>
      </div>
    )
  }
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(BuildingForm)
