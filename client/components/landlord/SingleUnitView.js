import React from 'react'
import {connect} from 'react-redux'

import {fetchSingleUnit} from '../../store/singleUnit'

export class SingleUnitView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleUnit(this.props.match.params.id)
  }

  render() {
    const {unit} = this.props

    return (
      <div>
        <div>
          <div id="singleBuildInfo">
            <h4>{unit.unitNumber}</h4>
            <h5>Address: {unit.bedroomCount}</h5>
            <h5>Number of Units: {unit.bathroomCount}</h5>
          </div>
          <div>
            <h4>Edit Unit Here</h4>
            {/* <EditBuildingForm buildId={building.id} /> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  unit: state.unit
})

const mapDispatch = dispatch => ({
  fetchSingleUnit: id => dispatch(fetchSingleUnit(id))
})

export default connect(mapState, mapDispatch)(SingleUnitView)
