import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
   const services = useLoaderData();
   const { _id, service_id, title, img, price, description, facility } = services;
   return (
      <div className='container mx-auto py-28 bg-slate-200'>
         <h2>{title}</h2>
         <div className='border-2 w-1/2  mx-auto rounded-md '>
            <div className=" bg-base-100">
               <form onSubmit={[]}>
                  <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-4 '>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' required placeholder="Your email" className="input input-bordered" />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" name='password' required placeholder="Your password" className="input input-bordered" />

                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' required placeholder="Your email" className="input input-bordered" />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" name='password' required placeholder="Your password" className="input input-bordered" />
                     </div>
                  </div>
                  <div className="form-control mb-0 mt-6">
                     <input className="btn bg-[#FF3811] btn-block border-none" type="submit" value="Order Confirm" />
                  </div>
               </form>
            </div>
         </div>

      </div>
   );
};

export default CheckOut;