import React from 'react'
import {connect} from 'react-redux'

export class AllUnits extends React.Component{
  constructor(){
    super()
  }

  render(){
    return <h1>AllUnits</h1>
  }
}

const mapState = state =>({

})

const mapDispatch = dispatch =>({

})

export default connect(mapState, mapDispatch)(AllUnits)
