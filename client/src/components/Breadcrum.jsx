import { ChevronRight } from 'lucide-react';
import React from 'react';

const Breadcrum = ({ product }) => {

  if (!product) {
    return (
      <div className='flex items-center gap-2 px-6 md:px-0 text-[#5e5e5e] font-semibold md:text-lg capitalize mt-4 text-sm'>
        Home <ChevronRight /> Loading...
      </div>
    );
  }

  return (
    <div className='flex items-center md:gap-2 gap-1 px-6 md:px-0 text-[#5e5e5e] font-semibold md:text-lg capitalize mt-4 text-sm'>
      Home <ChevronRight /> {product.category} <ChevronRight /> {product.name}
    </div>
  );
};

export default Breadcrum;
