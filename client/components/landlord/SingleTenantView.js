import React from 'react'
import {connect} from 'react-redux'

export class SingleTenantView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props)

    return (
      <div>
        <div>
          <div id="singleTenantInfo">
            <h4>SINGLE TENANT VIEW</h4>
            <h5>Name: {}</h5>
            <h5>Email: </h5>
          </div>
          <div>
            <h4>Edit Tenant</h4>
            {/* <EditBuildingForm buildId={building.id} /> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleTenantView)
