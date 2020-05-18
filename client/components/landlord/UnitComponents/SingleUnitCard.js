import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {deleteAUnit} from '../../../store/units'

export class SingleUnitCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {index, deleteAUnit, buildInfo, tenInfo} = this.props
    const {id, unitNumber} = this.props.unitInfo

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'space-between'
        }}
      >
        <h6 style={{marginTop: '5px', paddingRight: '5px'}}>{index})</h6>
        <div>
          <Link to={`/units/${id}`}>
          <h6 style={{marginTop: '5px', marginBottom: '5px'}}>{unitNumber}</h6>
          </Link>

          {buildInfo ?
            <h6 style={{marginTop: '3px', marginBottom: '5px'}}>
              Building: {buildInfo.buildingName}
            </h6> : <React.Fragment />
          }

          <h6 style={{marginTop: '3px'}}>
            Tenant: {tenInfo.firstName} {tenInfo.lastName}
          </h6>
        </div>
        <button className="deleteButton" onClick={() => deleteAUnit(id)}>
          DELETE
        </button>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
  deleteAUnit: unitId => dispatch(deleteAUnit(unitId))
})

export default connect(mapState, mapDispatch)(SingleUnitCard)
