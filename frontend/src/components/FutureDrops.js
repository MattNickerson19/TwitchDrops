import React from 'react'
import Header from './Header'
import DropCarousel from './DropCarousel'

const FutureDrops = ({drops}) => {

  const dropBox = drops.filter(drop => drop.drop_status === 'future');

  return (
      <>
        <Header></Header>
        {dropBox.map(drop =>{
                return (<DropCarousel 
                        key={drop.name} 
                        title={drop.name}
                        drops={drop.drops} 
                        start_date={drop.start_date}
                        end_date={drop.end_date}/>)
            })}
      </>
  )
}

export default FutureDrops