import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class SingleTicketCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'spaceBetween'
        }}
      >
        <Link
          // to={}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flexStart'
          }}
        >
          <h6 style={{marginTop: '5px', paddingRight: '5px'}}>#</h6>
          <div>
            <h6 style={{marginTop: '5px', marginBottom: '5px'}}>
              ISSUE
            </h6>
            <h6 style={{marginTop: '3px', marginBottom: '5px'}}>
              Tenant Name
            </h6>
            <h6 style={{marginTop: '3px', marginBottom: '5px'}}>
              Building
            </h6>
          </div>
        </Link>
        {/* <button className="deleteButton" onClick={() => deleteAUnit(id)}>
            DELETE
          </button> */}
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(SingleTicketCard)
