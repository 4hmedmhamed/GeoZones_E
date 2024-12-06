import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow ' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <i className='fa fa-heart'></i>
                <h4>{name}</h4>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
