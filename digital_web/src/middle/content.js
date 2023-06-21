import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
import {AiOutlineMail,AiOutlineArrowRight} from 'react-icons/ai';
import {BiGlobe} from 'react-icons/bi';
import Second from './second.js';
import Third from './third.js';
import Fourth from './fourth.js';
import { HashLink } from 'react-router-hash-link';
function Content(){ 
    return(
        <div id="home" className='fle flex-col pt-32 bg-gray-200'> 
                <div className='flex justify-center '>
                    <img className=' w-64' src={first}></img>
                </div>
                <div className='pt-4 pb-16  '>
                    <p className='mb-3 ml-5 mr-5 text-3xl font-sans font-light text-center'>
                    Without Digital Marketing Your Business Resemble This Car
                    </p>
                    <p className=' mb-3 ml-5 mr-5 text-2xl font-sans font-light text-center '>
                    Lift your business to new heights with our
                     <span className=' text-orange-500'> digital marketing services.</span>
                    </p>
                    <p  className='mb-8 ml-5 mr-5 text-2xl font-sans font-light text-center '>
                        Converting visitors into customers is the name of our game.
                    </p>
                    <HashLink to={'/#services'}>
                        <button className=" p-1 text-2xl mr-8 bg-black text-white rounded-sm">Services</button>
                    </HashLink>
                    <HashLink to={'/#package'}>
                        <button className="p-1 text-2xl bg-orange-400 text-white rounded-sm">Packages</button>
                    </HashLink>
                </div>


                <div className='  pt-14 pb-20 bg-white flex flex-col justify-center'>
                    
                     <div className='ml-10 mr-10 border-gray-150 border-2 flex flex-col md:flex-row'>
                        <div className='bg-orange-400 pt-16 pb-16 md:flex-1'>
                            <div className='flex justify-center'>
                            <img className="w-2/4" src={second}></img>
                            </div>
                            
                            <p className='text-white font-semibold  text-3xl'>
                                Design
                            </p>
                        </div>
                        <div className='pb-6 md:flex-1'>
                            <h1 className='pb-4 pt-4 font-bold text-3xl font-sans'>Hai WebTech</h1>
                            <p>Get<span className=' text-center text-orange-500'> Website, SEO, SMM and PPC </span>Serices In One Place.</p>
                            <p className='pt-3 pb-3'>We are the Digital Marketing Company thats gets you Results.</p>
                            <div className='flex flex-row justify-center items-center'>
                                <div className='pt-1 flex items-center'><AiOutlineMail/></div>
                                <p>info @ haiwebtech.com</p>
                            </div>
                        </div>
                        <div className='md:flex-1 bg-black text-white flex justify-center flex-col items-center pt-16 pb-16'>
                            <img src={third}></img>
                            <p className='font-bold text-2xl'>Development</p>
                        </div>
                     </div>





                     <div id="services" className='pt-16 font-sans font-bold text-2xl'>
                         <h1 >Services We Offer</h1>
                         <div className='flex flex-col md:flex-row'>
                         <div className='md:flex-1 shadow-gray-700 shadow-sm  duration-200  hover:scale-105 hover:border-yellow-500 flex flex-col border-gray-600 border-2 ml-10 mr-10 md:mr-0 pt-10 mt-10 pb-10'>
                                <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                                    <BiGlobe/>
                                </div>
                                <h2 className='text-xl mb-5'>SEO</h2>
                                <p className='text-xl font-light text-gray-600 mb-10'>Search Engine Optimization Service</p>
                                <div className='flex justify-center'>
                                    <button className='hover:bg-blue-400 hover:text-white flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                                        <p>Get Started</p> 
                                        <AiOutlineArrowRight/>
                                    </button>
                                </div>
                             </div>
                        
                            <div className='md:flex-1 shadow-gray-700 shadow-sm  duration-200 hover:scale-105 hover:border-yellow-500 flex flex-col border-gray-600 border-2 ml-10 md:ml-4 mr-10 md:mr-0 pt-10 mt-10 pb-10'>
                                    <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                                        <BiGlobe/>
                                    </div>
                                    <h2 className='text-xl mb-5'>PPC</h2>
                                    <p className='text-xl font-light text-gray-600 mb-10'>Pay-Per-Click Service</p>
                                    <div className='flex justify-center'>
                                        <button className='md:mt-7 hover:bg-blue-400 hover:text-white flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                                        <p>Get Started</p> 
                                        <AiOutlineArrowRight/>
                                        </button>
                                    </div>
                            </div>
                            
                         
                         <div className='md:flex-1 shadow-gray-700 shadow-sm  duration-200 hover:scale-105  hover:border-yellow-300 flex flex-col border-gray-600 border-2 ml-10 md:ml-4 mr-10 md:mr-0 pt-10 mt-10 pb-10'>
                                <div className='flex justify-center text-yellow-400 mb-5 text-4xl'>
                                    <BiGlobe/>
                                </div>
                                <h2 className='text-xl mb-5'>SMM</h2>
                                <p className='text-xl font-light text-gray-600 mb-10'>Social Media Marketing Service</p>
                                <div className='flex justify-center'>
                                    <button className='md:mt-7 hover:bg-blue-400 hover:text-white flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
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
                                    <button className='hover:bg-blue-400 hover:text-white flex flx-row items-center p-2 rounded-md border-gray-600 border-2 text-xl font-light text-gray-600'>
                                    <p>Get Started</p> 
                                    <AiOutlineArrowRight/>
                                    </button>
                                </div>
                         </div>
                         </div>    
                    </div>
                     
                </div>
                <div>
                    <Second/>
                </div>
                <div>
                    <Third/>
                </div>
                <div>
                    <Fourth/>
                </div>
        </div>
        
    )
}
export default Content;