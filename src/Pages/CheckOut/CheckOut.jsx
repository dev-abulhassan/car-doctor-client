import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const CheckOut = () => {
   const services = useLoaderData();
   // console.log(services)
   const { _id, service_id, title, img, price, description, facility } = services;

   const { user } = useContext(AuthContext)
   console.log(user)
   const handleOrder = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.user?.name.value;
      const date = form.date.value;
      const email = form.user?.email.value;
      const price = form.price.value;
     
      const order = {
         customerName: name,
         serviceDate: date,
         email,
         servicesPrice: price,
         serviceId: _id
      }
      console.log(order);



      
   }
   return (
      <div className='container mx-auto py-12 font-primary'>

         <div className='text-center'>
            <h2 className=' text-3xl font-bold '>CheckOut Services</h2>
            <h2 className=' text-2xl font-semibold py-2 text-[#FF3811]'>{title}</h2>
         </div>
         <div className='py-12'>
            <div className='bg-[#F3F3F3] w-3/4 mx-auto p-24 rounded-md'>
               <form onSubmit={handleOrder}>
                  <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-4 '>
                     {/* name */}
                     <div className="form-control">
                        <input type="text" name='name' defaultValue={user?.displayName} required placeholder="Your Name" className="input input-bordered" />
                     </div>
                     {/* date */}
                     <div className="form-control">
                        <input type="date" name='date' required placeholder="Date" className="input input-bordered" />
                     </div>
                     {/* email */}
                     <div className="form-control">
                        <input type="text" name='email' defaultValue={user?.email} required placeholder="Your email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <input type="text" name='price' defaultValue={"$" + price} required placeholder="Due Ammount" className="input input-bordered" />
                     </div>

                     <div className="form-control mb-0 mt-6 col-span-2">
                        <input className="btn bg-[#FF3811] btn-block border-none" type="submit" value="Order Confirm" />
                     </div>
                  </div>

               </form>
            </div>

         </div>

      </div>
   );
};

export default CheckOut;