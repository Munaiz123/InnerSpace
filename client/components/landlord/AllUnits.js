import React from 'react'
import {connect} from 'react-redux'

import {fetchUnits} from '../../store/units'

import SingleUnitCard from'./SingleUnitCard'


export class AllUnits extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.fetchUnits()
  }

  render(){
    let {allUnits} = this.props

    return (
      <div>
        <h1>My Units</h1>
        <h6>TEST</h6>
        {allUnits.map( (unit,i) => (
          < SingleUnitCard key={i} index={i+1} unitInfo ={unit}/>
        ))}
      </div>
    )
  }
}

const mapState = state =>({
  allUnits: state.units

})

const mapDispatch = dispatch =>({
  fetchUnits: () => dispatch(fetchUnits())
})

export default connect(mapState, mapDispatch)(AllUnits)
