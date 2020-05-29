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
      <Grid>
        <Grid container style={{padding: '2.5%'}}>
          <Grid item xs={5}>
            <div id="singleBuildInfo">
              <h2>{building.buildingName}</h2>
              <h5>Address: {building.address}</h5>
              <h5>Number of Units: {building.unitsCount}</h5>
            </div>
          </Grid>

          <Grid
            item
            xs={5}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <EditBuildingForm buildId={building.id} />
          </Grid>
        </Grid>
        <Grid container style={{padding: '2.5%'}}>
          <Grid item xs={5}>
            <div>
              <h3>UNITS</h3>
              {units.map((unit, i) => (
                <SingleUnitCard
                  key={i}
                  index={i + 1}
                  unitInfo={unit}
                  tenInfo={unit.tenant}
                />
              ))}
            </div>
          </Grid>
          <Grid item lg={3}>
            <AddUnitForm buildId={buildingId} />
          </Grid>
        </Grid>
      </Grid>
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
