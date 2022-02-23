import React from 'react'
import Header from './Header'
import DropCarousel from './DropCarousel'

const FutureDrops = ({drops}) => {
  return (
      <>
        <Header></Header>
        <DropCarousel drops={drops} keyword={'future'}/>
      </>
  )
}

export default FutureDrops