import React from 'react'
import {connect} from 'react-redux'

export class AllBuildings extends React.Component{
  constructor(){
    super()
  }

  render(){
    return <h1>All Buildings</h1>
  }
}

const mapState = state =>({

})

const mapDispatch = dispatch =>({

})

export default connect(mapState, mapDispatch)(AllBuildings)
