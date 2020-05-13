import React from 'react'
import {connect} from 'react-redux'

import {fetchUnits} from '../../../store/units'
import {fetchBuildings} from '../../../store/buildings'

import SingleUnitCard from '../UnitComponents/SingleUnitCard'
import AddUnitForm from './AddUnitForm'

export class AllUnits extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedBuildings:[]
    }

    this.handleBuildingSelectors = this.handleBuildingSelectors.bind(this)
  }

  componentDidMount() {
    this.props.fetchUnits()
    this.props.fetchBuildings()
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

    console.log(event.target.value)
  }



  render() {
    let {allUnits, allBuildings} = this.props

    if(this.state.selectedBuildings.length > 0){
      allUnits = allUnits.filter( unit =>{
        return this.state.selectedBuildings.includes(unit.buildingId.toString())
      })
    }

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
            <SingleUnitCard
              key={i}
              index={i + 1}
              unitInfo={unit}
              buildInfo={unit.building}
            />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '30px'
          }}
        >
        <div> {/* start SEARCH & FILTERS */}

          {/* start --- BUILDING SELECTOR */}
            <form style={{paddingTop:'.25%'}} onChange={this.handleBuildingSelectors}>
              <h5 style={{paddingBottom:'.5%'}}>SELECT BUILDINGS</h5>
              {allBuildings.map( (build,i) =>(
                <div key={i} style={{display:'flex', flexDirection:'column'}}>
                  <label htmlFor={build.buildingName}>
                    <input type='checkBox' name={build.buildingName} defaultValue={build.id} /> { build.buildingName}
                  </label>
                </div>
              ))}

            </form>
          {/* end --- BUILDING SELECTOR */}

        </div> {/* end SEARCH & FILTERS */}

          <div>
            <h3 style={{marginBottom: '0px', marginTop: '0px'}}>ADD NEW UNIT</h3>
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
