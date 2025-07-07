import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';

const Collections = () => {
  const { newCollections } = useContext(ShopContext);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center font-serif ">
          New collections
        </h2>
        <p className="text-center mt-3 md:px-53">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ullam maxime odit est architecto repudiandae odio quasi officia itaque neque!
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.isArray(newCollections) && newCollections.length > 0 ? (
            newCollections.map((item) => (
              <Product key={item._id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
