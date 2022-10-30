import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Category = ({ category: { image, name,  details } }) => {
  return (
    <div>
      
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{details}</p>
        </div>
      
    </div>
  )
}

export default Category