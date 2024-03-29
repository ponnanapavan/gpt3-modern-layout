import React from 'react'
import './brand.css'
import { google,slack,atlassian,shoipfy,dropbox } from './importbrand'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'> 
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shoipfy} alt="" />
      </div>
    </div>
  )
}

export default Brand
