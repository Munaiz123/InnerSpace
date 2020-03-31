import React from 'react'
import {connect} from 'react-redux'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Single Building Card</h1>
        <h6>test</h6>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
