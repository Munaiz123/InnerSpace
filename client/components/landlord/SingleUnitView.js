import React from 'react'
import {connect} from 'react-redux'


export class SingleUnitView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <div>

          <div id="singleBuildInfo">
            <h4> SINGLE UNIT VIEW</h4>
            {/* <h5>Address: {building.address}</h5>
            <h5>Number of Units: {building.unitsCount}</h5> */}
          </div>
          <div>
            {/* <h4>Edit Building</h4>
            <EditBuildingForm buildId={building.id} /> */}
          </div>

        </div>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleUnitView)
