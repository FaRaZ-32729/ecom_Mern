import { Star } from 'lucide-react';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
            <div className="flex md:1/2 gap-4 ">
                <div className="flex flex-col gap-4 md:h-[500px] ">
                    <img src={product.image1} alt="" className='md:h-[150px] w-[200px]' />
                    <img src={product.image2} alt="" className='md:h-[150px] w-[200px]' />
                </div>
                <div>
                    <img src={product.image1} className='md:h-[580px]' alt="" />
                </div>
            </div>
            <div className="flex md:1/2 flex-col mt-8 md:mt-0 ">
                <h1 className="text-[#3d3d3d text-4xl font-bold]"> {product.name} </h1>
                <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4 ">
                    <Star fill='red' />
                    <Star fill='red' />
                    <Star fill='red' />
                    <Star fill='red' />
                    <Star fill='gray' />
                    <p>(112)</p>
                </div>
                <div className="flex gap-5 font-semibold items-center my-5">
                    <div className="text-gray-500 text-2xl line-through ">${product.old_price}</div>
                    <div className="text-red-500 text-3xl ">${product.new_price}</div>
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, sint sapiente libero necessitatibus deleniti consequuntur molestias id fuga vel illo, unde repellat fugit omnis distinctio doloribus corrupti neque enim eum!</div>
                <div>
                    <h1 className='font-semibold text-gray-400 text-2xl mt-4' >  Select Size</h1>
                    <div className="flex gap-4 items-center my-4 ">
                        <div className="border bg-gray-100 p-4 ">S</div>
                        <div className="border bg-gray-100 p-4 ">M</div>
                        <div className="border bg-gray-100 p-4 ">L</div>
                        <div className="border bg-gray-100 p-4 ">XL</div>
                        <div className="border bg-gray-100 p-4 ">XXL</div>
                    </div>
                </div>
                <NavLink to="/cart">
                    <button onClick={()=>addToCart(product.id)} className='bg-red-500 text-white px-6 py-3 my-4 w-max' >ADD To Cart</button>
                </NavLink>
                <p> <span className='font-semibold' >Category:</span> Women, T-shirt, Crop top </p>
                <p> <span className='font-semibold' >Tags:</span> Modern, Latest </p>
            </div>
        </div>

    )
}

export default ProductDisplay
