import React from 'react'
import {connect} from 'react-redux'

import SingleBuildingCard from './SingleBuildingCard'
import BuildingForm from './BuildingForm'
import {fetchBuildings} from '../../store/buildings'

export class AllBuildings extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      nameOrAddress: 'buildingName'
    }

    this.searchHandleChange = this.searchHandleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchBuildings()
  }

  handleChange(event) {
    if (event.target.value === 'Building Name')
      this.setState({nameOrAddress: 'buildingName'})
    else this.setState({nameOrAddress: 'address'})
  }
  searchHandleChange(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let {allBuildings} = this.props

    allBuildings = allBuildings.filter(build =>
      build[this.state.nameOrAddress]
        .toLowerCase()
        .includes(this.state.search.toLowerCase())
    )

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '30%', backgroundColor: 'gainsboro'}}>
          <h1 style={{marginBottom: '0px', marginTop: '0px'}}>All BUILDINGS</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '3px',
              flexFlow: 'columnWrap'
            }}
          >
            {allBuildings.map((build, i) => (
              <SingleBuildingCard key={i} index={i + 1} buildInfo={build} />
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '30px'
          }}
        >
          {/* start SEARCH & FILTERS */}
          <div>
            {/* <h4> SEARCH & FILTERS </h4> */}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <h5 style={{paddingRight: '3px'}}> Search by:</h5>

              <select onChange={this.handleChange}>
                <option>Building Name</option>
                <option>Address</option>
              </select>

              <input
                name="search"
                onChange={this.searchHandleChange}
                defaultValue={this.state.search}
                placeholder=" Type Here, bruv"
              />
            </div>
          </div> {/* end SEARCH & FILTERS */}

          <div>
            <h1 style={{marginBottom: '0px', marginTop: '0px'}}>
              ADD NEW BUILDING
            </h1>
            <BuildingForm />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allBuildings: state.buildings
})

const mapDispatch = dispatch => ({
  fetchBuildings: () => dispatch(fetchBuildings())
})

export default connect(mapState, mapDispatch)(AllBuildings)
