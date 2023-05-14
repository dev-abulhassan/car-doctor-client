import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Register = () => {
   
   const handleRegister = event => {
      event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

      //   createUser(email, password)
      //       .then(result => {
      //           const user = result.user;
      //           console.log(user)
      //       })
      //       .catch(error => console.log(error))

   }



   return (
      <div className="container mx-auto py-20 px-10">
         <div className="flex flex-col lg:flex-row ">
            <div className="w-1/2 ">
               <img src={img} alt="" />
            </div>
            <div className='border-2 w-1/2 p-5'>
               <div className=" bg-base-100">
                  <div className="">
                     <h1 className="text-3xl text-center font-bold">Register</h1>
                     <form onSubmit={handleRegister} className='p-6'>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Name</span>
                           </label>
                           <input type="text" name='name' required placeholder="Your email" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Email</span>
                           </label>
                           <input type="text" name='email' required placeholder="Your email" className="input input-bordered" />
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                        </div>

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Confirm password" className="input input-bordered" />
                                <label className="label">
                                    <a href="_#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                        <div className="form-control mt-6">
                           <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                     </form>
                     <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;