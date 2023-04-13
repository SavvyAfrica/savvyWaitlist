import React from 'react'
import Frame from '../features/hompage/frame1/frame'
import Frame2 from '../features/hompage/frame2/frame'
import Frame3 from '../features/hompage/frame3/frame'
import Frame4 from '../features/hompage/frame4/frame'

import Frame6 from '../features/hompage/frame6/frame'
// import MobileCarousel from '../helpers/carousel'
import Landing from '../features/hompage/landing/landing'

function Index() {
  return (
    <div className='w-full'>
      <Landing />
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame4 />

      {/* <MobileCarousel/> */}
      <Frame6 />
    </div>
  )
}

export default Index
