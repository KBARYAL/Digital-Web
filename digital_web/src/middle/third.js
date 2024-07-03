import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiGlobe} from 'react-icons/bi';

function Thrid(){
    return(
    <div id="package" className='pt-32 font-sans font-bold text-2xl bg-white pb-16'>
        <div className=' flex flex-row justify-center ml-20'>
        <h1 className=''>Packages We Offer</h1>
        <div className='ml-4  border-2 border-yellow-300 font-serif p-2 text-sm'>
            <h1>Coming Soon</h1>
        </div>
        </div>
        
        <div className='flex flex-col md:flex-row'>
           <div className='md:flex-1 shadow-gray-700 shadow-sm  duration-200  hover:scale-105 hover:border-yellow-500 flex flex-col border-gray-600 border-2 ml-10 mr-10 md:mr-4 pt-10 mt-10 pb-10'>
               <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                   <BiGlobe/>
               </div>
               <h2 className='text-xl mb-5'>SEO</h2>
               <p className='text-xl font-light text-gray-600 mb-10'>Search Engine Optimization Service</p>
               <div className='flex justify-center'>
                   <button className='flex flex-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                   <p>Get Started</p> 
                   <AiOutlineArrowRight/>
                   </button>
               </div>
        </div>
        
        <div className=' md:flex-1 shadow-gray-700 shadow-sm  duration-200 hover:scale-105 hover:border-yellow-500 flex flex-col border-gray-600 border-2 ml-10 md:ml-4  mr-10 md:mr-4 pt-10 mt-10 pb-10'>
               <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                   <BiGlobe/>
               </div>
               <h2 className='text-xl mb-5'>PPC</h2>
               <p className='text-xl font-light text-gray-600 mb-10'>Pay-Per-Click Service</p>
               <div className='flex justify-center'>
                   <button className='md:mt-6 flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                   <p>Get Started</p> 
                   <AiOutlineArrowRight/>
                   </button>
               </div>
            </div>
        
        
        <div className='md:flex-1 shadow-gray-700 shadow-sm  duration-200 hover:scale-105  hover:border-yellow-300 flex flex-col border-gray-600 border-2 ml-10 md:ml-4 mr-10 md:mr-4 pt-10 mt-10 pb-10'>
               <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                   <BiGlobe/>
               </div>
               <h2 className='text-xl mb-5'>SMM</h2>
               <p className='text-xl font-light text-gray-600 mb-10'>Social Media Marketing Service</p>
               <div className='flex justify-center'>
                   <button className='md:mt-6 flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                   <p>Get Started</p> 
                   <AiOutlineArrowRight/>
                   </button>
               </div>
        </div>
      
        
        <div className='md:flex-1 shadow-gray-700 shadow-sm  duration-200 hover:scale-105 hover:border-yellow-500 flex flex-col border-gray-600 border-2 ml-10 md:ml-4 mr-10 md:mr-8 pt-10 mt-10 pb-10'>
               <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                   <BiGlobe/>
               </div>
               <h2 className='text-xl mb-5'>Website</h2>
               <p className='text-xl font-light text-gray-600 mb-10'>Design & Development Service</p>
               <div className='flex justify-center'>
                   <button className='flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                   <p>Get Started</p> 
                   <AiOutlineArrowRight/>
                   </button>
               </div>
            </div>
        
        </div>
    </div>

    )
}
export default Thrid;