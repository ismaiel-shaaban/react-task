import React, { Component } from 'react'
import 'boxicons'
import "./Card.scss";
import { connect } from "react-redux";
import  { addToCart } from "../../store/slices/cart-slice"
 class Card extends Component {
    constructor(props) {
        super(props);
        
        
      }
     
  render() {
   
    return (
        <div >
            <div className="product">
            <div className="top d-flex">
              <img src={this.props.product.image} alt="" />
              <div className="icon d-flex">
              <box-icon type='solid' color='blue' name='heart' ></box-icon>
              </div>
            </div>
            <div className="bottom">
              <div className="d-flex">
                  <h4>{this.props.product.title.slice(0,20)}</h4>
                  <button  className="btn cart-btn" onClick={()=>{this.props.addToCart(this.props.product)}} >Add to Cart</button>
              </div>
              <div className="d-flex">
                  <div className="price">$${this.props.product.price}</div>
                  <div className="rating">
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  </div>
              </div>
            </div>
            </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart : (el) =>  dispatch(addToCart(el))
    }
  };

  export default connect(null , mapDispatchToProps)(Card)