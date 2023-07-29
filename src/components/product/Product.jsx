import React, { Component } from 'react'
import { connect } from "react-redux";
import "./Product.scss"
import  { fetchProduct } from "../../store/slices/product-slice"
 class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
     

            },
        };
        this.props.loadProduct()
      }
     
  render() {
    
    return (
      <div>
        <section className="product-details">
            <div className="product-image">
                <img src={this.props.product.image} alt=""/> 
            </div>
            <div className="details">
                <h2 className="product-brand">{this.props.product.title}</h2>
                <div className="rating">
                  <box-icon type='solid'color="yellow" name='star'></box-icon>
                  <box-icon type='solid' color="yellow" name='star'></box-icon>
                  <box-icon type='solid' color="yellow" name='star'></box-icon>
                  <box-icon type='solid' color="yellow" name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  </div>
                <p className="product-short-des">{this.props.product.category}</p>
                <span className="product-price">{this.props.product.price}</span>
                <p className="product-short-des">{this.props.product.description}</p>
                
                
                <p className="product-sub-heading">select size</p>
        
                <input type="radio" name="size" value="s"  hidden id="s-size"></input>
                <label htmlFor="s-size" className="size-radio-btn check">s</label>
                <input type="radio" name="size" value="m" hidden id="m-size"></input>
                <label htmlFor="m-size" className="size-radio-btn">m</label>
                <input type="radio" name="size" value="l" hidden id="l-size"></input>
                <label htmlFor="l-size" className="size-radio-btn">l</label>
                <input type="radio" name="size" value="xl" hidden id="xl-size"></input>
                <label htmlFor="xl-size" className="size-radio-btn">xl</label>
                <input type="radio" name="size" value="xxl" hidden id="xxl-size"></input>
                <label htmlFor="xxl-size" className="size-radio-btn">xxl</label>
                <div className='group-btn'>
                  <button className="btn cart-btn"  >Buy Now</button>
                  <button className="btn" >add to wishlist</button>
                </div>
            </div>
        
        </section>


       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
  product: state.productState.product,
  
 }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProduct : () =>  dispatch(fetchProduct())
  }
};


export default connect(mapStateToProps , mapDispatchToProps)(Product)