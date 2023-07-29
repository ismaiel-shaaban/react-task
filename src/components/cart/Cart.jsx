import React, { Component } from 'react'
import { connect } from "react-redux";
import "./Cart.scss"
import  { hideCart ,removeFromCart } from "../../store/slices/cart-slice"
 class Cart extends Component {
  render() {
    return (
      <div>
        <div class="cart-container">
            <div class="shopping-cart">
                <div class="shopping-cart-header">
                    <span className='cart-icon'><box-icon name='cart-alt' type='solid' ></box-icon></span><span class="badge">{this.props.products.length}</span>
                    <span className='cart-close' onClick={()=>{this.props.hideCart()}}> X</span>
                </div> 
                

                <ul class="shopping-cart-items">
                {
                  this.props.products.map((el) =>(
                    <>
                     <li key={el.id} className="clearfix">
                      <img src={el.image} alt="item1" />
                      <span className="item-name">Sony DSC-RX100M III</span>
                      <span className="item-price">{el.price}</span>
                      <span className="item-quantity">Quantity: 01</span>
                      <span className='delet-icon' onClick={()=>{this.props.removeFromCart(el)}}> <box-icon name='trash'></box-icon></span>
                     </li>
                     
                    
                    </>
                    

                     ))  
                }
               

              
                </ul>
                <>
                  {
                    this.props.products.length > 0 ? 
                    <>
                        <div className="shopping-cart-total">
                          <span className="lighter-text">Total:</span>
                          <span className="main-color-text">$2,229.97</span>
                      </div> 
                      <a href="#" className="button">Checkout</a>
                    </>
                    
                    : <h2 className='container d-flex '>Cart Is Empty</h2>
                  }
                </>
                
            </div> 
        </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   products: state.cart.items,
   isCartOpen : state.cart.isCartOpen
  }
 };
 const mapDispatchToProps = (dispatch) => {
  return {
    hideCart : () =>  dispatch(hideCart()),
    removeFromCart : (el) =>  dispatch(removeFromCart(el))
  }
};

 
 
 export default connect(mapStateToProps , mapDispatchToProps)(Cart)