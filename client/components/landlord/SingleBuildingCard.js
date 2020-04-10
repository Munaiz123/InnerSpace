import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {deleteBuilding} from '../../store/buildings'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {id, buildingName, address, unitsCount} = this.props.buildInfo
    const {index} = this.props

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
        <button className="deleteButton" onClick={() => deleteBuilding(id)}>
          DELETE
        </button>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({
  deleteBuilding: id => dispatch(deleteBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
