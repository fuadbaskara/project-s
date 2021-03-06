/*
project name : Canfazz Dashboard
source : app/pages/page-404/index.js
description : component for display page 404 (not found)
*/


import React from 'react'
import { Link } from 'react-router-dom'

import PUBLIC_URL from '../../config/url'
import './page-404.scss'

const Page404 = () => (
  <div className="page-404">
    <div className="page-404-inner">
      <h1>Page not found :(</h1>
      <h2>{'Oops! The page you were looking for doesn\'t exist'}</h2>
      <Link to={PUBLIC_URL} className="ant-btn ant-btn-primary full-width">Back to homepage</Link>
    </div>
  </div>
)

export default Page404
