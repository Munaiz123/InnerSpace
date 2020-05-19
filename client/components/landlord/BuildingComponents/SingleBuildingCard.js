import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {deleteBuilding} from '../../../store/buildings'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {id, buildingName, address, unitsCount} = this.props.buildInfo
    const {index,deleteBuilding} = this.props

    return (
      <div style={{display: 'flex', flexDirection: 'row', alignContent:'spaceBetween'}}>
        <Link
          to={`/buildings/${id}`}
          style={{display: 'flex', flexDirection: 'row', alignItems:'flexStart'}}
        >
          <h6 style={{marginTop:'5px',paddingRight: '5px'}}>{index})</h6>
          <div>
            <h6 style={{marginTop:'5px', marginBottom: '5px'}}>{buildingName}</h6>
            <h6 style={{marginTop: '3px', marginBottom: '5px'}}>{address}</h6>
            <h6 style={{marginTop: '3px'}}>Count: {unitsCount}</h6>
          </div>
        </Link>

        {/** NOTE: When a building is deleted, we need to make sure that all associated data is also deleted because when you try to filter tickets or tenants based on a building it'll break the code. I think it has to do with tenants or tickets that end up having NULL in their fields in the DB for buildingId ⤵️⤵️⤵️  ~~~ need to figure out how to deal with NULL values in buildingId fields*/}

        {/* <button className="deleteButton" onClick={() => deleteBuilding(id)}>
          DELETE
        </button> */}

      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
  deleteBuilding: id => dispatch(deleteBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
