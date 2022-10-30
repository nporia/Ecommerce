import React from 'react';

import { client } from '../lib/client';
import { MiddleBanner, Product, FooterBanner, HeroBanner } from '../components';
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";

import Image from 'next/image'


const Home = ({  products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Shop by categories</h2>
      <p>Don't forget to check out our new arrivals </p>
    </div>

    <div className="products-container">
    <Image src= {card1}  width={320} height={200}/>
    <Image src= {card2}  width={320} height={200}/>
    <Image src= {card3}  width={320} height={200}/>
    <Image src= {card4}  width={320} height={200}/>
    </div>
    <div>
      <br/> <br/> <br/> 
    <HeroBanner heroBanner={bannerData.length && bannerData[1]}  />
       </div>
    
    <div className="products-heading">
      <h2>Buy the best stationary products</h2>
      <p>Fill your cart with these premium quality products, available at your doorstep. </p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[2]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
