import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


export class SingleTenantsCard extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log('SINGLE TEN CARD PROPS', this.props)

    const {index} = this.props
    const {firstName, lastName} = this.props.tenInfo

    return (
      <div style={{display: 'flex', flexDirection: 'row', alignContent:'spaceBetween'}}>
        <Link
          // to={`/tenants/${id}`}
          style={{display: 'flex', flexDirection: 'row', alignItems:'flexStart'}}
        >
          <h6 style={{marginTop:'5px',paddingRight: '5px'}}>{index})</h6>
          <div>
            <h6 style={{marginTop:'5px', marginBottom: '5px'}}>{firstName} {lastName}</h6>
          </div>
        </Link>
        {/* <button className="deleteButton" onClick={() => deleteBuilding(id)}>
          DELETE
        </button> */}
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(SingleTenantsCard)
