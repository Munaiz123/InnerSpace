import React from 'react'
import {connect} from 'react-redux'

import SingleBuildingCard from './SingleBuildingCard'
import {fetchBuildings} from '../../store/buildings'


export class AllBuildings extends React.Component {
  constructor() {
    super()
    this.state = {
      filter:null
    }
  }

  componentDidMount(){
    this.props.fetchBuildings()
  }


  render() {
    let {allBuildings} = this.props
    console.log(allBuildings)


    return (
      <div>
        <h1>All Buildings</h1>
        <h6>TEST</h6>
        <div style={{display:'flex', flexDirection:'column'}}>
        {allBuildings.map((build,i) => <SingleBuildingCard key={i} buildInfo={build}/>)}

        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allBuildings: state.buildings
})

const mapDispatch = dispatch => ({
  fetchBuildings: () => dispatch(fetchBuildings())
})

export default connect(mapState, mapDispatch)(AllBuildings)
