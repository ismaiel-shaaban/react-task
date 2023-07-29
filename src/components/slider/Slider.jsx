import React, { Component } from 'react'
import { connect } from "react-redux";
import  { fetchProducts } from "../../store/slices/product-slice"
import Card from '../card/Card';
import "./Slider.scss"
import 'swiper/css';
// import 'swiper/scss/bundle'


 class Slider extends Component {
    constructor(props) {
        super(props);
        this.props.loadProducts()
      }
  render() {
    
    return (
      <div className='products'>
        <h2>YOU MAY ALSO LIKE</h2>
        
    <swiper-container
      slides-per-view="4"
      speed="500" 
      loop="true"
      space-between="20"
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {
          this.props.products.map((el) =>( <swiper-slide lazy="true" ><Card key={el.id} product={el}/></swiper-slide> ))  
        }
      
    </swiper-container>
      
        <div className="swiper-pagination"></div>

      
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

      </div>
    )
  }

  
}
const mapStateToProps = (state) => {

    return {
     products: state.productState.products,
     
    }

   };
   
   const mapDispatchToProps = (dispatch) => {
     return {
       loadProducts : () =>  dispatch(fetchProducts())
     }
   };

   export default connect(mapStateToProps , mapDispatchToProps)(Slider)