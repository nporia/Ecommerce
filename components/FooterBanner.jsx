import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  const imgurl = urlFor(image)
  return (
    <div className="footer-banner-container" style={{ backgroundImage: `url(${imgurl})` }}>
      <div className="banner-desc">
        <div className="left">
         
          <h3>{largeText1}</h3>
          <h4>{largeText2}</h4>
          <p>{saleTime}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        {/* <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div> */}

        
      </div>
    </div>
  )
}

export default FooterBanner