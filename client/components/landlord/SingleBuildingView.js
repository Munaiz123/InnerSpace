import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleBuilding} from '../../store/singleBuilding'



export class SingleBuildingView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount(){
    let buildingId = this.props.match.params.id
    console.log('SINGLE BUILD MATCH', typeof(this.props.match.params.id))

    fetchSingleBuilding(Number(buildingId))
  }

  render() {
    console.log('SINGLE BUILD PROPS', this.props.singleBuilding)
    return (
      <div>
        <h6>Single SingleBuilding View</h6>
      </div>
    )
  }
}

const mapState = state => ({
  singleBuilding: state.building
})

const mapDispatch = dispatch => ({
  fetchSingleBuilding: id => dispatch(fetchSingleBuilding(id))
})

export default connect(mapState, mapDispatch)(SingleBuildingView)
