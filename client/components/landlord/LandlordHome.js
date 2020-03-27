import React from 'react'
import {connect} from 'react-redux'

export class LandlordHome extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {user} = this.props
    console.log(user)
    return (
      <div>
        <h1>HOME</h1>
        <h6>TEST</h6>
      </div>
    )
  }
}

const mapState = state => ({
  user:state.user
})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(LandlordHome)
