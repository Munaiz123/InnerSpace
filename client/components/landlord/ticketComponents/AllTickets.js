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
      buildingCheckboxes:{},
      selectedBuildings:[]
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
    if(this.state.selectedBuildings.indexOf(event.target.value) !== -1){
      this.setState({
        selectedBuildings: this.state.selectedBuildings.filter(num =>{
          return num.toString() !== event.target.value.toString()
        })
      })
    } else {
      this.setState({
        selectedBuildings: this.state.selectedBuildings.concat([event.target.value])
      })
    }
    console.log(this.state)
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

    console.log('LENGTH',this.state.selectedBuildings.length)
    if(this.state.selectedBuildings.length > 0) console.log('LOLOLOL', this.state.selectedBuildings.length)



    return (
      <div  style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{width: '35%', backgroundColor: 'lightCyan'}}>
          <h1>All Tickets</h1>
          {allTickets.map((tick, i) => (
            <SingleTicketCard key={i} index={i + 1} buildInfo={tick.building} tick={tick} />
          ))}
        </div>
        <div> {/* start SEARCH & FILTERS */}

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

          <div style={{padding:'7%', paddingTop:'.5%'}}> {/* start --- BUILDING SELECTOR */}
            <h5 style={{paddingBottom:'.5%'}}>Select Buildings</h5>
            <form onChange={this.handleBuildingSelectors}>
              {allBuildings.map( (build,i) =>(
                <div key={i} style={{display:'flex', flexDirection:'column'}}>
                  <input type='checkBox' name={build.buildingName} defaultValue={build.id} />
                  <label htmlFor={build.buildingName}>{build.buildingName}</label>
                </div>
              ))}
            </form>
          </div> {/* end --- BUILDING SELECTOR */}

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
