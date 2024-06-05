import React from 'react'
import { useProductContext } from './context/productcontext'

export const About = () => {
  const myname = useProductContext(); 
  return (
    <div>{myname}</div>
  )
}
