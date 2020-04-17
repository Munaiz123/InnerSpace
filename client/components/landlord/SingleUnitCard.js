import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class SingleUnitCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log('SINGLE UNIT CARD PROPS', this.props)

    const {index} = this.props
    const { id,
      unitNumber,
      bedroomCount,
      bathroomCount,
      rent,
      tenantId,
      unitLandlordId,
      buildingId} = this.props.unitInfo


    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'spaceBetween'
        }}
      >
        <Link
          // to={`/units/${id}`}
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
              Building ID: {buildingId}
            </h6>
            <h6 style={{marginTop: '3px'}}> Tenant ID: {tenantId} </h6>
          </div>
        </Link>
        {/* <button className="deleteButton" onClick={() => deleteBuilding(id)}>
          DELETE
        </button> */}
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
  // deleteBuilding: id => dispatch(deleteBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleUnitCard)
