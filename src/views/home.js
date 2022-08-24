import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Markets Technician</title>
        <meta property="og:title" content="Regional Markets Technician" />
      </Helmet>
    </div>
  )
}

export default Home
