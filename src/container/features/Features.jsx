import React from 'react'
import './Features.css'
import { Feature } from '../../components'
const Features = () => {
   const featuredata=[
       {
          id:1,
          title:"Improving end distrusts instantly ",
          paragraph:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
       },
       {
        id:2,
        title:"Improving end distrusts instantly ",
        paragraph:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
     },
     {
      id:3,
      title:"Improving end distrusts instantly ",
      paragraph:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
   },
   {
    id:4,
    title:"Improving end distrusts instantly ",
    paragraph:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
 }
   ]
  return (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
    <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
    <p>request for early access</p>
    </div>
    <div className='gpt3__features-container'>
    {featuredata.map((item,indx)=>(
      <Feature title={item.title} text={item.paragraph} key={item.id}/>
    ))}
    </div>
  </div>
  )
}

export default Features
