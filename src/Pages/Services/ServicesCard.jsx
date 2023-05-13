import React from 'react';

const ServicesCard = ({ service }) => {
   const { title, img, price } = service;
   return (
      <div className="card w-96 bg-base-100 border-2 font-primary">
         <figure className="px-6 pt-6">
            <img src={img} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>

            <div className="card-actions">
               <p className="text-xl text-[#FF3811]">Price: ${price}</p>
               <button className="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default ServicesCard;