import React from 'react'
import {connect} from 'react-redux'

import {fetchSingleBuilding} from '../../../store/singleBuilding'
import {fetchBuildingUnits} from '../../../store/units'

import EditBuildingForm from './EditBuildingForm'
import SingleUnitCard from '../UnitComponents/SingleUnitCard'
import AddUnitForm from '../UnitComponents/AddUnitForm'

import {Grid} from '@material-ui/core'

export class SingleBuildingView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const buildingId = this.props.match.params.id
    this.props.fetchSingleBuilding(buildingId)
    this.props.fetchBuildingUnits(buildingId)
  }

  render() {
    let {building,units} = this.props
    const buildingId = this.props.match.params.id


    return (
      <div >

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div id="singleBuildInfo" style={{width: '40%'}}>
            <h4>{building.buildingName}</h4>
            <h5>Address: {building.address}</h5>
            <h5>Number of Units: {building.unitsCount}</h5>
          </div>
          <div style={{width: '40%'}}>
            <h4>Edit Building</h4>
            <EditBuildingForm buildId={building.id} />
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', paddingTop:'5%', alignItems:'baseline'}}>
          <div style={{width: '40%'}}>
            <h3>UNITS</h3>

            <div>
              {units.map((unit,i)=>(
                <SingleUnitCard key={i} index={i +1} unitInfo={unit} tenInfo={unit.tenant}/>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{marginBottom: '5px', marginTop: '0px'}}>ADD NEW UNIT</h3>
            <AddUnitForm buildId={buildingId} />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  building: state.building,
  units: state.units
})

const mapDispatch = dispatch => ({
  fetchSingleBuilding: id => dispatch(fetchSingleBuilding(id)),
  fetchBuildingUnits: buildingId => dispatch(fetchBuildingUnits(buildingId))
})

export default connect(mapState, mapDispatch)(SingleBuildingView)
