import React, { Component } from 'react'
import Layout from '../components/layout/Layout'

export default class Home extends Component {
  render() {
    return (
    <Layout>
       <div className='home-component'>
        
          <img src="/images/logo.png" alt="" />
       </div>
    </Layout>
     
    );
  }
}
