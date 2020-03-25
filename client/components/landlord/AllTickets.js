import React from 'react'
import {connect} from 'react-redux'

export class AllTickets extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1>All Tickets</h1>
        <h6>TEST</h6>
      </div>
    )
  }
}

const mapState = state =>({

})

const mapDispatch = dispatch =>({

})

export default connect(mapState, mapDispatch)(AllTickets)
