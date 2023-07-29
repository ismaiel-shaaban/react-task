import React, { Component ,Suspense } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss"
import pages from "./utils/pages"
import { register } from 'swiper/element/bundle';
register();

const router = createBrowserRouter(pages);
export default class App extends Component {
  render() {
    return (
      <Suspense fallback = { <div className='loader'> <h1>Please Wait...</h1> </div> }>
        <RouterProvider router={router} />
      </Suspense>
      
    )
  }
}



