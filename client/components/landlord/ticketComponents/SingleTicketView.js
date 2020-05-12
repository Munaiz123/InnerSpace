import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class SingleTicketView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount(){}

  render() {
    return (
      <div id="singleTicketViewDiv">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '25%'}}>
            <h1>Issue</h1>
            <h3>Date</h3>
            <p>Details</p>
          </div>

          <div style={{width: '45%'}}>
            <h5>Resolve Ticket Button</h5>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
})

const mapDispatch = dispatch => ({
})

export default connect(mapState, mapDispatch)(SingleTicketView)
