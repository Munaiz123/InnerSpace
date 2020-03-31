import React from 'react'
import {connect} from 'react-redux'

import SingleBuildingCard from './SingleBuildingCard'
import {fetchBuildings} from '../../store/building'


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

    console.log('BUILDINGS', allBuildings)

    return (
      <div>
        <h1>All Buildings</h1>
        <h6>TEST</h6>
        <div style={{display:'flex', flexDirection:'row'}}>
        {allBuildings.map((build,i) => <SingleBuildingCard key={i} buildInfo={build}/>)}

        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allBuildings: state.building
})

const mapDispatch = dispatch => ({
  fetchBuildings: () => dispatch(fetchBuildings())
})

export default connect(mapState, mapDispatch)(AllBuildings)
