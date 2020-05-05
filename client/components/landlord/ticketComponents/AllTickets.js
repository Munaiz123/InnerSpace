import React from 'react'
import {connect} from 'react-redux'

import SingleTicketCard from './SingleTicketCard'

export class AllTickets extends React.Component{
  constructor(){
    super()
  }



  render(){
    return (
      <div>
        <h1>All Tickets</h1>
        <SingleTicketCard />
      </div>
    )
  }
}

const mapState = state =>({

})

const mapDispatch = dispatch =>({

})

export default connect(mapState, mapDispatch)(AllTickets)
