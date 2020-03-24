import React from 'react'
import {connect} from 'react-redux'

export class AllTenants extends React.Component{
  constructor(){
    super()
  }

  render(){
    return <h1>AllTenants</h1>
  }
}

const mapState = state =>({

})

const mapDispatch = dispatch =>({

})

export default connect(mapState, mapDispatch)(AllTenants)
