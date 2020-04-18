import React from 'react'
import {connect} from 'react-redux'

import {fetchUnits} from '../../store/units'

import SingleUnitCard from './SingleUnitCard'
import {AddUnitForm} from './AddUnitForm'

export class AllUnits extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchUnits()
  }

  render() {
    let {allUnits} = this.props

    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'spaceBetween'}}>
        <div style={{width:'35%', backgroundColor:'yellow'}}>
          <h1>My Units</h1>
          {allUnits.map((unit, i) => (
            <SingleUnitCard key={i} index={i + 1} unitInfo={unit} />
          ))}
        </div>

        <div>
          <h3>ADD NEW UNIT</h3>
          <AddUnitForm />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allUnits: state.units
})

const mapDispatch = dispatch => ({
  fetchUnits: () => dispatch(fetchUnits())
})

export default connect(mapState, mapDispatch)(AllUnits)
