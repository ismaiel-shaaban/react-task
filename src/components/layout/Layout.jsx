import React, { Component ,Suspense } from 'react'
import Nav from '../nav/Nav'


export default class Layout extends Component {
  render() {
    return (
      <div>
       <Nav/>
        <Suspense fallback = { <div className='loader'> Please Wait... </div> } >
            {this.props.children}
        </Suspense>
      </div>
    )
  }
}
