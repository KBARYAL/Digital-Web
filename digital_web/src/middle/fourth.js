import sixth from './images/sixth.jpg';
import seventh from './images/seventh.jpg';
import eight from './images/eight.jpg';

import {AiOutlineArrowRight} from 'react-icons/ai';
import fifth from './images/fifth.png';

function  Fourth(){
    return(
        <div className=" bg-orange-400 ">
            <div className='lg:flex lg:flex-row flex-col pl-8 pr-8 pb-10' >
                <div >
                    <h1 className="pt-10 text-white text-2xl font-bold font mb-2">Creation & Innovation</h1>
                    <div className="text-white text-left leading-5 pl-6 pr-6 font-sans font-semibold">
                        <p className="mb-5">
                            Digital marketing tactics developed and implemented by Hai Web Tech have been successful for companies in a variety of industries. We take satisfaction in the variety of clients we have been able to service, ranging from sustainable food items, real estate, clothes, and lifestyle to steel engineering, steam engineering, road technology, etc.
                        </p>
                        <p className="mb-5">
                            In order to provide you with a solution that not only meets your business needs but also significantly boosts the value of your brand, we combine the forces of design excellence with cutting-edge innovation.
                        </p>
                        <p className="mb-5">
                            Everything we deliver is packed with both long-term and short-term financial rewards, assisting you in carving out a leadership position in the market.
                        </p>
                        <p className="pb-10">
                            A group of imaginative thinkers, creators, and designers, Hai Web Tech thrives on new information and fresh concepts. This refers to the fact that when you work with us, your digital communication will include the newest content, designs, and marketing techniques that will not only help your brand stand out in the minds of your audience but also help you sell goods and services. 
                        </p>
                    </div>
                </div>
                
                <div className='bg-white pb-5 flex justify-center lg:bg-orange-400'>
                    <div className=' w-2/4 lg:w-full'>
                        <img src={fifth}></img>
                    </div>
                </div>
            </div>
            
            <div className=' bg-gray-200 sm:p-16 '>
                <div>
                <h1 className='pb-5 font-bold text-2xl'>Our Blogs</h1>
                <div className='flex flex-col md:flex-row  items-center'>
                    <div className='md:mr-4  w-3/4 sm:w-full hover:scale-110 duration-200 text-left border-2 mb-5 p-3 border-gray-300'>
                        <div>
                            <img src={sixth}></img>
                        </div>
                        <div>
                            <h1 className='mb-2 mt-5 text-xl font-bold'>How SEO Helps Your Business</h1>
                            <p className='mb-5'>Increased website traffic: By optimizing your website for search engines, you ca...</p>
                                <button className='duration-100 hover:bg-orange-400 hover:text-white w-36 p-2 rounded-lg flex flex-row items-center border-2 border-yellow-500'>
                                    <p className='mr-2'>Coming soon</p>
                                    <div className='pt-1'><AiOutlineArrowRight/></div>
                                </button>
                        </div>    
                    </div>
                    <div className='md:mr-4 w-3/4 sm:w-full hover:scale-110 duration-200 text-left border-2 mb-5 p-3 border-gray-300'>
                        <div>
                            <img src={seventh}></img>
                        </div>
                        <div>
                            <h1 className='mb-2 mt-5 text-xl font-bold'>How SMM Helps Your Business</h1>
                            <p className='mb-5'>Increased website traffic: By optimizing your website for search engines, you ca...</p>
                                <button className='duration-100 hover:bg-orange-400 hover:text-white w-36 p-2 rounded-lg flex flex-row items-center border-2 border-yellow-500'>
                                    <p className='mr-2'>Coming soon</p>
                                    <div className='pt-1'><AiOutlineArrowRight/></div>
                                </button>
                        </div>    
                    </div>
                    <div className='md:mr-4 w-3/4 sm:w-full hover:scale-110 duration-200 text-left border-2 mb-5 p-3 border-gray-300'>
                        <div>
                            <img src={eight}></img>
                        </div>
                        <div>
                            <h1 className='mb-2 mt-5 text-xl font-bold'>How PPC Helps Your Business</h1>
                            <p className='mb-5'>Increased website traffic: By optimizing your website for search engines, you ca...</p>
                                <button className='duration-100 hover:bg-orange-400 hover:text-white w-36 p-2 rounded-lg flex flex-row items-center border-2 border-yellow-500'>
                                    <p className='mr-2'>Coming soon</p>
                                    <div className='pt-1'><AiOutlineArrowRight/></div>
                                </button>
                        </div>    
                    </div>
                </div>
               
                
                </div>        
            </div>
        </div>  
    )
}
export default Fourth;