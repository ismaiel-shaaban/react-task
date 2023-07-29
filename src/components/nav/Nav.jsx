import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import 'boxicons'
import "./Nav.scss"
import { connect } from "react-redux";
import Cart from '../cart/Cart';
import  { displayCart } from "../../store/slices/cart-slice"
class Navbar extends Component {
  constructor(props) {
    super(props);
  
    
  }
  render() {
    return (
       <>
          <nav className="navbar">
            <div className="row  d-flex">
              <div className="logo">

                <img src="/images/logo.png" alt="" />
              </div>
    
              <div className="nav-list d-flex">
                <Link  to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/products/1">Single Product</Link>
                
                <div className="close">
                  
                <box-icon name='search-alt-2' ></box-icon>
                </div>
                <a className="user-link">Login</a>
              </div>
    
              <div className="icons d-flex">
                <div className="icon d-flex"><i className="bx bx-search"></i></div>
                <div className="icon user-icon d-flex">
                <box-icon  name='user' ></box-icon>
                </div>
                <div className="icon d-flex" onClick={()=>{this.props.displayCart()}}>
                  <box-icon name='cart-alt' type='solid'  ></box-icon>
                  <span>{this.props.numOfProducts ? this.props.numOfProducts : '0'}</span>
                </div>
              </div>
    
              
              <div className="hamburger">
                <i className="bx bx-menu-alt-right"></i>
                <box-icon type='solid' name='user' ></box-icon>
              </div>
            </div>
          </nav>
          {this.props.isCartOpen ?<Cart isCartOpen ={this.props.numOfProducts } /> :'' }
          
        </> 
    );
  }
}

const mapStateToProps = (state) => {

  return {
   numOfProducts: state.cart.items.length,
   isCartOpen : state.cart.isCartOpen
   
  }

 };
 
 const mapDispatchToProps = (dispatch) => {
  return {
    displayCart : () =>  dispatch(displayCart())
  }
};

 export default connect(mapStateToProps , mapDispatchToProps)(Navbar)
