import React from 'react'
import {Checkbox, Row, Col} from 'antd'
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
        <div style={{width: '35%', backgroundColor: 'lightCyan'}}>
          <h1>My Units</h1>
          {allUnits.map((unit, i) => (
            <SingleUnitCard
              key={i}
              index={i + 1}
              unitInfo={unit}
              buildInfo={unit.building}
              tenInfo={unit.tenant}
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
          <Checkbox.Group style={{paddingTop:'.25%', width:'100%'}} onChange={this.handleBuildingSelectors} >
            <h5>SELECT BUILDINGS</h5>
            <Row>
              {allBuildings.map((build,i)=>(
                <Col key={i} style={{paddingBottom:'5%'}} span={4}>
                  <Checkbox value={build.id}>{build.buildingName}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
          {/* end --- BUILDING SELECTOR */}

        </div> {/* end SEARCH & FILTERS */}

          {/* <div>
            <h3 style={{marginBottom: '0px', marginTop: '0px'}}>ADD NEW UNIT</h3>
            <AddUnitForm />
          </div> */}
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
