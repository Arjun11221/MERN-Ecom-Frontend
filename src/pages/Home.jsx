import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Product from '../features/product/Product'

const Home = () => {
  return (
    <div>
        <Navbar>
            <Product/>
        </Navbar>
    </div>
  )
}

export default Home