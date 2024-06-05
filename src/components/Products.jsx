import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattPrice } from './helpers/FormattPrice';

export const Products = ({ id, name, category, price, image }) => {
  return (
    <div className="p-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-[100%]">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="flex flex-col justify-between items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
            <img className="w-full h-full object-cover" src={image} alt={name} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
          <p className="mt-2 text-base text-gray-500 text-center"><FormattPrice price={price} /></p>
          <p className="mt-2 text-base text-white pl-7 pr-7 rounded-lg pt-2 pb-2 text-center bg-purple-500">{category}</p>
        </div>
      </NavLink>
    </div>
  );
};
