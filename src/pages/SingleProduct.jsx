import React, { Component } from 'react'
import Product from "../components/product/Product"
import Layout from '../components/layout/Layout'      
import Slider from '../components/slider/Slider'
export default class SingleProduct extends Component {
  render() {
    return (
        <Layout>
             <Product/>
             <Slider/>
        </Layout>
    )
  }
}
