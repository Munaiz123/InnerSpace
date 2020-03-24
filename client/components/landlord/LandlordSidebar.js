import React from 'react'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'
import {logout} from '../../store//user'
import Navbar from '../navbar'

export class LandlordSidebar extends React.Component{
  constructor(){
    super()
  }

  // handleClick(){
  //   this.props.logout()
  // }


  render(){
    const {user} = this.props
    console.log(this.props)

    return <div style={{display:'flex', flexDirection:'column'}}>
      <h3> {user.firstName}'s Sidebar, bruv</h3>
      <h4>Link1</h4>
      <h4>Link2</h4>
      <h4>Link3</h4>
      <h4>Link4</h4>
      <h4>Link5</h4>
      <a href="#" onClick={()=> this.props.logout()}>Logout</a>
    </div>
  }
}

const mapState = state => ({
  user:state.user
})

const mapDispatch = dispatch =>({
  logout : () => dispatch(logout())
})

export default connect(mapState,mapDispatch)(LandlordSidebar)
