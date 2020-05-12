import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchSingleTicket} from '../../../store/singleTicket'

export class SingleTicketView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSingleTicket(this.props.match.params.id)
  }

  render() {
    console.log('single ticket view props', this.props)
    const {singleTicket} = this.props
    let date = new Date(singleTicket.createdAt)

    return (
      <div
        id="singleTicketViewDiv"
        style={{padding: '3%', display: 'flex', flexDirection: 'column'}}
      >
        <div style={{width: '45%'}}>
          <h3>{singleTicket.issue}</h3>
          <h5>{date.toDateString()}</h5>
          <p>{singleTicket.details}</p>
          <h5>Mark as resolved BUTTON</h5>
        </div>
        <div id='tenant&unitInfo' style={{display:'flex', flexDirection:'row'}}>
          <div style={{width: '45%'}}>
          <h1>Tenant Info</h1>
          </div>
          <div style={{width: '45%'}}>
          <h1>Unit Info</h1>
          </div>

        </div>
      </div>
    )
  }
}

const mapState = state => ({
  singleTicket: state.singleTicket
})

const mapDispatch = dispatch => ({
  fetchSingleTicket: id => dispatch(fetchSingleTicket(id))
})

export default connect(mapState, mapDispatch)(SingleTicketView)
