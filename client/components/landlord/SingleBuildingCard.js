import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class SingleBuildingCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {id, buildingName, address, unitsCount} = this.props.buildInfo
    const {index} = this.props

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Link
          to={`/buildings/${id}`}
          style={{paddingRight: '5px', display: 'flex', flexDirection: 'row'}}
        >
          <h6 style={{paddingRight:'5px'}}>{index})</h6>
          <div>
            <h6 style={{marginBottom: '5px'}}>{buildingName}</h6>
            <h6 style={{marginTop: '3px'}}>{address}</h6>
          </div>
        </Link>
        <h6> Count: {unitsCount}</h6>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleBuildingCard)
