import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


export class SingleTicketCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {index, tick, buildInfo} = this.props

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'spaceBetween',
          paddingTop: '5px'
        }}
      >
        <Link
          to={{pathname:`/tickets/${tick.id}`, state:{ticketStatus:tick.pending}}}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flexStart'
          }}
        >
          <h6 style={{marginTop: '5px', paddingRight: '5px'}}>{`${index})`}</h6>
          <div>
            <h6 style={{marginTop: '5px', marginBottom: '5px'}}>
              {tick.issue}
            </h6>
            {!!buildInfo ?
              <h6 style={{marginTop: '3px', marginBottom: '5px'}}>
                {buildInfo.buildingName}
              </h6> : <React.Fragment />
            }
          </div>
        </Link>
        {/* <button className="deleteButton" onClick={() => deleteAUnit(id)}>
            DELETE
          </button> ***************** MAY NEED DELETE BUTTON LATER ?*/}
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleTicketCard)
