import React from 'react'

export const FormattPrice = ({ price }) => {
  return  Intl.NumberFormat("en-IN",{
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(price/100);
}
