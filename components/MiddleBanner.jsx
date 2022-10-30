import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const MiddleBanner = ({ heroBanner }) => {

  const imgurl = urlFor(heroBanner.image)
  return (
    <div className="hero-banner-container" style={{ backgroundImage: `url(${imgurl})` }}>
      <div  >
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <div className='largetext'>{heroBanner.largeText1}</div>
        
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5 style={{ color: "black" }} >{heroBanner.product}</h5>
            <h5 style={{ color: "black" }}>{heroBanner.desc}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleBanner