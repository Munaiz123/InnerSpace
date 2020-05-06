import React from 'react'
import {connect} from 'react-redux'

import SingleTicketCard from './SingleTicketCard'

import {fetchTickets} from '../../../store/tickets'

export class AllTickets extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.fetchTickets()

  }


  render(){
    const {allTickets} = this.props
    return (
      <div>
        <h1>All Tickets</h1>
        <div style={{width: '35%', backgroundColor: 'lightCyan'}}>
          {allTickets.map((tick, i) => (
            <SingleTicketCard
              key={i}
              index={i + 1}
              tick={tick}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state =>({
  allTickets: state.tickets

})

const mapDispatch = dispatch =>({
  fetchTickets: () => dispatch(fetchTickets())
})

export default connect(mapState, mapDispatch)(AllTickets)
