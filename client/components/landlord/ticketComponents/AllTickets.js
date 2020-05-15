import React from 'react'
import {connect} from 'react-redux'

import SingleTicketCard from './SingleTicketCard'

import {fetchTickets} from '../../../store/tickets'
import {fetchBuildings} from '../../../store/buildings'

export class AllTickets extends React.Component {
  constructor() {
    super()
    this.state = {
      statusFilter: 'all',
      selectedBuildings:[],
      slectedIssues:[]
    }
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleBuildingSelectors = this.handleBuildingSelectors.bind(this)
    this.handleIssueSelectors = this.handleIssueSelectors.bind(this)
  }

  componentDidMount() {
    this.props.fetchTickets()
    this.props.fetchBuildings()
  }

  handleStatusChange(){
    this.setState({statusFilter:event.target.value})
  }

  handleBuildingSelectors(){
    if(this.state.selectedBuildings.indexOf(event.target.value) !== -1){
      this.setState((state)=>({
        selectedBuildings: state.selectedBuildings.filter(num =>{
          return num.toString() !== event.target.value.toString()
        })
      }))
    } else {
      this.setState((state) =>({
        selectedBuildings: state.selectedBuildings.concat([event.target.value])
      }))
    }
  }

  handleIssueSelectors(){
    console.log(event.target.value)
  }

  render() {
    let {allTickets,allBuildings} = this.props

    if(this.state.statusFilter === 'all') allTickets;
    else allTickets = allTickets.filter( tick =>{
      return tick.pending.toString() === this.state.statusFilter
    })

    if(this.state.selectedBuildings.length > 0){
      allTickets = allTickets.filter( tick =>{
        return this.state.selectedBuildings.includes(tick.buildingId.toString())
      })
    }

    return (
      <div  style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{width: '25%', backgroundColor: 'lightCyan'}}>
          <h1>All Tickets</h1>
          {allTickets.map((tick, i) => (
            <SingleTicketCard key={i} index={i + 1} buildInfo={tick.building} tick={tick} />
          ))}
        </div>
        <div style={{width:'35%'}}> {/* start SEARCH & FILTERS */}

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

          {/* start --- BUILDING SELECTOR */}
            <form onChange={this.handleBuildingSelectors}>
            <h5>SELECT BUILDINGS</h5>
              {allBuildings.map( (build,i) =>(
                <label style={{paddingBottom:'5%'}} key={i} htmlFor={build.buildingName}>
                  <input type='checkBox' name={build.buildingName} defaultValue={build.id} /> { build.buildingName}
                </label>
              ))}
            </form>

          {/* end --- BUILDING SELECTOR */}

          {/* start --- ISSUE SELECTOR */}
          <form onChange={this.handleIssueSelectors}>
            <h5>SELECT TICKET CATEGORY</h5>
              <label htmlFor='ELECTRICAL'>
                <input type='checkBox' name='ELECTRICAL' defaultValue= 'ELECTRICAL'/>ELECTRICAL
              </label>
              <label htmlFor='PLUMBING'>
                <input type='checkBox' name='PLUMBING' defaultValue= 'PLUMBING'/>PLUMBING
              </label>
              <label htmlFor='HEAT/AC'>
                <input type='checkBox' name='HEAT/AC' defaultValue= 'HEAT/AC'/>HEAT/AC
              </label>
              <label htmlFor='OTHER'>
                <input type='checkBox' name='OTHER' defaultValue= 'OTHER'/>OTHER
              </label>
          </form>
          {/* end --- ISSUE SELECTOR */}

        </div> {/* end SEARCH & FILTERS */}
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
