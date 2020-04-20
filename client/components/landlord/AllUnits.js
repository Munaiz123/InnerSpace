import React from 'react'
import {connect} from 'react-redux'

import {fetchUnits} from '../../store/units'
import {fetchBuildings} from '../../store/buildings'

import SingleUnitCard from './SingleUnitCard'
import AddUnitForm from './AddUnitForm'

export class AllUnits extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  componentDidMount() {
    this.props.fetchUnits()
    this.props.fetchBuildings()
  }

  render() {
    let {allUnits, allBuildings} = this.props

    console.log(allBuildings)



    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'spaceBetween'
        }}
      >
        <div style={{width: '35%', backgroundColor: 'yellow'}}>
          <h1>My Units</h1>
          {allUnits.map((unit, i) => (
            <SingleUnitCard key={i} index={i + 1} unitInfo={unit} />
          ))}
        </div>
        <div>
          <div>
            {/* <h4> SEARCH & FILTERS </h4> */}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <h5 style={{paddingRight: '3px'}}> Filter by Building:</h5>

              <select onChange={this.handleChange}>
                {allBuildings.map((build,i) => <option key={i}>{build.buildingName}</option>)}
              </select>

              <input
                name="search"
                onChange={this.searchHandleChange}
                defaultValue={this.state.search}
                placeholder=" Type Here, bruv"
              />
            </div>
          </div>

          {/* end SEARCH & FILTERS */}

          <div>
            <h3>ADD NEW UNIT</h3>
            <AddUnitForm />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allUnits: state.units,
  allBuildings: state.buildings
})

const mapDispatch = dispatch => ({
  fetchUnits: () => dispatch(fetchUnits()),
  fetchBuildings: () => dispatch(fetchBuildings())
})

export default connect(mapState, mapDispatch)(AllUnits)
