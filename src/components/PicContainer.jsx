import React from 'react'
// import img from './images/first.jpg'
const PicContainer = () => {
  return (
    <div className='flex container relative items-center justify-between'>
      <img src='./images/first.jpg' alt=''height={500} width={300}/>
      <img src='./images/second.jpg' alt=''height={500} width={300}/>
      <img src='./images/third.webp' alt=''height={500} width={300}/>
    </div>
  )
}

export default PicContainer
