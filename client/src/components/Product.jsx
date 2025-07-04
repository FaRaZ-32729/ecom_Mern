import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({item}) => {
  return (
    <div className='group relative' >
      <NavLink to={`/product/${item.id}`}>
        <div onClick={window.scrollTo(0,0)} className="aspect-h-1 aspect-w-lw-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-96 lg:h-80  ">
            <img src={item.image1} alt={item.name} className='h-full w-full object-cover object-center'  />
        </div>
      </NavLink>
      <div className=" mt-4 flex justify-between ">
        <div>
            <h3 className="text-sm text-gray-700 ">
                <NavLink>
                    <span aria-hidden="true" className=' inset-0' >{item?.name}</span>
                </NavLink>
            </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 "> ${item?.new_price} </p>
      </div>
    </div>
  )
}

export default Product
