import React, { Component } from 'react'
import '../Styles/Nav.css'
import { NavLink } from 'react-router-dom'

export class Another extends Component {

    isCart = (array) => {
        if (array === null){
            return 'Cart Empty'
        } else {
            return 'Checkout'
        }
      }
  
      userLoggedIn = (obj) => {
          if(obj === {} ){
              return <NavLink to='/login'>Log In</NavLink>
          } else {
              return `Welcome ${obj.first_name}`
          }
      }

    render() {
        return (
            <div className='navbar'>
                 <NavLink className='navSpacing' to='/favorites'>My Favorites</NavLink>
               <NavLink className='navSpacing' to='/profile'>{this.userLoggedIn(this.props.loggedInUser)}</NavLink>
               <NavLink className='navSpacing' to='/checkout'>{this.isCart(this.props.cart)}</NavLink>
               <NavLink className='navSpacing' to='/'>Browse Items</NavLink>
               <NavLink className='navSpacing' to='/profile'>{this.props.loggedInUser.first_name === 'User' ? <NavLink to='/login'>Log In</NavLink> : 'Sign Out' }</NavLink>
            </div>
        )
    }
}

export default Another
