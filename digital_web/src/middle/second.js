import fourth from './images/fourth.png';
import { useState, useEffect } from "react";
import {AiOutlineMail,AiOutlineArrowRight} from 'react-icons/ai';

function Second(){
    
    useEffect(()=>{
        let drop = document.querySelectorAll(".drop")
        let drip = document.querySelectorAll(".drip")
        let ninty=document.querySelectorAll(".ninty")
         drip.forEach((e)=>{
        e.addEventListener('click',()=>{
            
            drop.forEach((j)=>{
               if(j.dataset.i==e.id){
                ninty.forEach((l)=>{
                    if(l.dataset.k==e.id){
                        l.classList.toggle('rotate-90')
                    }
                })
                j.classList.toggle('h-0')
                j.classList.toggle('max-h-full')
               }
            })
        })
    })
    },[])
    return(
        <div className='flex flex-col md:flex-row'>
        <div className='md:flex-1 flex justify-center items-center pl-20'>    
           <div className='pt-10 text-xl font-bold flex flex-col justify-center'>

                <h2 className='text-orange-500 mb-4'>Bringing Action To Brands</h2>
                <h1 className='mb-4 md:mb-6 md:mt-6'>
                     Choose What Matters To Your Businesxss & Customers
                </h1>
            <div className=' ml-5 mr-5 text-left bg-gray-100'>
            <div>
                <div id="1" className='cursor-pointer   drip p-2 border-2 border-gray-300 flex flex-col items-left'>
                    <div className=' flex flex-row items-center'>
                    <div data-k="1" className='ninty duration-150'><AiOutlineArrowRight/></div>
                    <p className='ml-2 text-lg font-sans font-medium'>Search Engine Optimization</p>
                    </div>
                </div>
                <div data-i="1" className=' drop h-0 overflow-y-hidden'>
                    <p className=' font-sans font-normal text-lg p-4 bg-white '>
                        SEO: What is it? Increasing your website's visibility in the organic search results of the major search engines is the essence of search engine optimization (SEO). Marketers successfully communicate with search engines what their website is about and why it should rank well in search engine results pages by using technical, on-page, and off-page SEO methods.
                    </p>
                </div>
            </div>
            <div >
                <div id="2" className='cursor-pointer drip p-2 border-2 border-gray-300 flex flex-col items-left'>
                    <div className='flex flex-row items-center'>
                        <div data-k="2" className='ninty duration-150'><AiOutlineArrowRight/></div>
                        <p className='ml-2 text-lg font-sans font-medium'>Socail Media Marketing</p>
                    </div>
                </div>
                <div data-i="2" className='drop h-0 overflow-y-hidden'>
                    <p className=' font-sans font-normal text-lg p-4 bg-white '>
                        Connecting with your audience or clients and assisting them in better understanding your brand are the main goals of social media marketing. It is quite advantageous for the expansion of your business.
                    </p>
                </div>
             </div>
            <div>
                <div id="3" className=' drip p-2 border-2 border-gray-300 flex flex-col items-left'>
                    <div className='cursor-pointer flex flex-row items-center'>
                        <div data-k="3" className='ninty duration-150'><AiOutlineArrowRight/></div>
                        <p className='ml-2 text-lg font-sans font-medium'>Pay Per Click</p>
                    </div>
                </div>
                <div data-i="3" className='drop h-0 overflow-y-hidden'>
                    <p className=' font-sans font-normal text-lg p-4 bg-white '>
                        Pay-per-click, or PPC, is an internet marketing strategy where advertisers are charged a fee each time one of their adverts is clicked. In essence, it's a method of purchasing visitors to your website rather than making an effort to "win" those visitors naturally.
                    </p>
                </div>
            </div>
            <div>
                <div id="4" className='cursor-pointer drip p-2 border-2 border-gray-300 flex flex-col items-left'>
                    <div className='flex flex-row items-center'>
                        <div data-k="4" className='ninty duration-150'><AiOutlineArrowRight/></div>
                        <p className='ml-2 text-lg font-sans font-medium'>Website For Business</p>
                     </div>
                </div>
                <div data-i="4" className='drop h-0 overflow-y-hidden mb-5'>
                    <p className=' font-sans font-normal text-lg p-4 bg-white '>
                        One of the most intriguing benefits of having a website for your company is that it can boost lead generation and sales. When someone searches online and finds your organisation, they strive to learn more about your goods or services and the business overall.
                    </p>
                </div>
            </div>    
            </div>
            </div>
        </div>
            <div className='md:flex-1 pt-10 pl-8 pr-8 pb-12'>
                <div className='flex justify-center '>
                <img className='w-2/4' src={fourth}></img>
                </div>
            </div>
        </div>
    )
}
export default Second;