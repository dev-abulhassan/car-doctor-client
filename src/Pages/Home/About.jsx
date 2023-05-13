import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'


const About = () => {
   return (
      <div className="hero min-h-screen mb-28">
         <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
               <img src={person} className="md:w-4/5 md:h-[473px] rounded-lg shadow-2xl" />
               <img src={parts} className="md:w-[327px] md:h-[332px] absolute right-5 top-1/2 rounded-lg border-t-8 border-l-8 border-white " />
            </div>
            <div className='lg:w-1/2 space-y-4 py-4 font-primary'>
               <h3 className='text-3xl text-[#FF3811] font-bold'>About Us</h3>
               <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
               <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
               <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
               <button className='bg-[#FF3811] py-3 px-6 rounded-md text-white'>Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;