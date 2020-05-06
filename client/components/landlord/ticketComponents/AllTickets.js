import React from 'react'
import {connect} from 'react-redux'

import SingleTicketCard from './SingleTicketCard'

import {fetchTickets} from '../../../store/tickets'
import {fetchBuildings} from '../../../store/buildings'

export class AllTickets extends React.Component {
  constructor() {
    super()
    this.state = {
      statusFilter: 'all'
    }
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleBuildingSelectors = this.handleBuildingSelectors.bind(this)
  }

  componentDidMount() {
    this.props.fetchTickets()
    this.props.fetchBuildings()
  }

  handleStatusChange(){
    this.setState({statusFilter:event.target.value})
  }

  handleBuildingSelectors(){
    console.log(event.target.value)
  }

  render() {
    let {allTickets,allBuildings} = this.props

    if(this.state.statusFilter === 'all') allTickets;
    else allTickets = allTickets.filter( tick =>{
      return tick.pending.toString() === this.state.statusFilter
    })


    return (
      <div  style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{width: '35%', backgroundColor: 'lightCyan'}}>
          <h1>All Tickets</h1>
          {allTickets.map((tick, i) => (
            <SingleTicketCard key={i} index={i + 1} tick={tick} />
          ))}
        </div>
        <div>
          {/* <h4> SEARCH & FILTERS </h4> */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <h5 style={{paddingRight: '7px'}}> Filter by Status: </h5>

            <select onChange={this.handleStatusChange}>
              <option value='all'>All Tickets</option>
              <option value='true'>Pending</option>
              <option value='false'>Completed</option>
            </select>
          </div>

          <div>
            <ul style={{margin: '0px', padding:'0px'}}>
              {allBuildings.map( build =>(
                <div>
                  <input type='checkBox' value={build.id} />
                  <label>{build.buildingName}</label>
                </div>
              ))}
            </ul>

          </div>

          {/* end SEARCH & FILTERS */}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allTickets: state.tickets,
  allBuildings: state.buildings
})

const mapDispatch = dispatch => ({
  fetchTickets: () => dispatch(fetchTickets()),
  fetchBuildings:() => dispatch(fetchBuildings())
})

export default connect(mapState, mapDispatch)(AllTickets)
