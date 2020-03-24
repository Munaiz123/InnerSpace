import React from 'react'
import {connect} from 'react-redux'

export class AllTickets extends React.Component{
  constructor(){
    super()
  }

  render(){
    return <h1>AllTickets</h1>
  }
}

const mapState = state =>({

})

const mapDispatch = dispatch =>({

})

export default connect(mapState, mapDispatch)(AllTickets)
