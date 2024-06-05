import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
export const CartAmountToggle = ({amount,setDecrease,setincrease}) => {
  return (
    <>
    <div className='flex gap-3 mt-4'>
        <button onClick={()=> setDecrease()}><FaMinus/></button>
        <div>
            {amount}
        </div>
        <button onClick={()=> setincrease()}><FaPlus/></button>
    </div>
    <NavLink to={"/cart"}>
        <button className='text-white bg-purple-600 px-4 py-3 mt-2'>Add To Cart</button>
    </NavLink>
    </>
  )
}
