import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {deleteAUnit} from '../../../store/units'

export class SingleUnitCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {index, deleteAUnit, buildInfo} = this.props
    const {
      id,
      unitNumber,
      bedroomCount,
      bathroomCount,
      rent,
      tenantId,
      unitLandlordId,
      buildingId
    } = this.props.unitInfo



    if (buildInfo) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'spaceBetween'
          }}
        >
          <Link
            to={`/units/${id}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flexStart'
            }}
          >
            <h6 style={{marginTop: '5px', paddingRight: '5px'}}>{index})</h6>
            <div>
              <h6 style={{marginTop: '5px', marginBottom: '5px'}}>
                {unitNumber}
              </h6>
              <h6 style={{marginTop: '3px', marginBottom: '5px'}}>
                Building: {buildInfo.buildingName}
              </h6>
              <h6 style={{marginTop: '3px'}}> Tenant ID: {tenantId} </h6>
            </div>
          </Link>
          <button className="deleteButton" onClick={() => deleteAUnit(id)}>
            DELETE
          </button>
        </div>
      )
    } else return <div></div>
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
  deleteAUnit: unitId => dispatch(deleteAUnit(unitId))
})

export default connect(mapState, mapDispatch)(SingleUnitCard)
