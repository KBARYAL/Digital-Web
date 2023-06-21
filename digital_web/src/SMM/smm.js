import React from "react";
import first from './images/first.png';
import second from './images/second.png';
import {useForm} from "react-hook-form";
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {TiTick} from 'react-icons/ti';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {DiGoogleAnalytics} from 'react-icons/di';
import {BsFillArrowRightCircleFill,BsClipboard,BsPeopleFill,BsFillRocketTakeoffFill} from 'react-icons/bs';
function SMM(){
    const dataTypeas=yup.object().shape({
        fullName:yup.string().required(),
        email:yup.string().email().required(),
        number:yup.number().required(),
        message:yup.string().max(300)
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(dataTypeas),
    });
    const info = (data) =>{
        console.log(data)
    }
    return (
        <div className=" bg-orange-400 pt-32">
            <div className="text-white font-bold pb-8 pl-1 pr-1">
                <h1 className="text-2xl mb-3">Get SMM Services & Generate More Leads</h1>
                <p className="text-xl ">Social Media Marketing</p>
            </div>
            <div className=" flex flex-col md:flex-row font-sans text-left pt-10 bg-gray-100 pl-4 pr-2 font-bold text-2xl">
               <div className="flex-1">
                    <h1>
                            More Lead With Social Media Marketing
                    </h1>
                    
                    
                    <p className=" pt-4 text-lg font-light ">
                            Looking For SMM (Social Media Marketing) Service, so you are at the right place               </p>
                    
                    <img className="pl-1 pr-1 pt-4" src={first}></img>
                    
               
               </div>
               
               <form className=" flex-1 md:ml-5 pb-10" onSubmit={handleSubmit(info)}>
                   <input className="  bg-gray-100 outline-none  text-lg font-sans font-medium pl-2" type="text" placeholder="Full Name" {...register("fullName")}/>
                   <div className=" border-2 border-gray-400 m-2 "></div>
                  
                   <input className="  bg-gray-100 outline-none  text-lg font-sans font-medium pl-2" type="text" placeholder="Email"{...register("email")} />
                   <div className=" border-2 border-gray-400 m-2 "></div>
                   <input className="  bg-gray-100 outline-none  text-lg font-sans font-medium pl-2" type="number" placeholder="Number"{...register("number")}/>
                   <div className=" border-2 border-gray-400 m-2 "></div>
                   <input className=" w-full mr-1 bg-gray-100 outline-none text-lg font-sans font-medium pl-2 " type="text" placeholder="Any Message...." {...register("message")}></input>
                   <div className=" border-2 border-gray-400 m-2 "></div>
                   <div className="flex justify-center">
                        <button className="p-2 mt-4 rounded-lg text-white bg-orange-400" type="submit">Let's Connect</button>
                   </div>                  
               </form>
            </div>
            <div className="bg-white pt-4">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1"><img src={second}></img></div>
                    <div className="flex-1">
                    <h1 className=" text-4xl font-bold mb-7">Why Social Media Marketing?</h1>
                    <div className=" flex flex-col pl-10 leading-7 text-lg">
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>Imporved Brand Awareness</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>Cost Effective</p>
                        </div>
                        <div className="flex flex-row items-center ">
                            <TiTick/>
                            <p>Engage With Your Customers</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>Improve Brand Loyalty</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>Healthier Customer Satisfaction</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>Marketplace Awareness</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>More Band Authority</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <TiTick/>
                            <p>Enhanced SEO Ranking</p>
                        </div>             
                </div>
                </div>
              
                </div>
                <div className=" mt-20">
                    <h1 className="font-sans font-bold text-2xl pl-4 pr-4 mb-5">We Do Social Media Marketing (SMM) for All Platforms</h1>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-3">
                    <div className=" duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-4 flex flex-col p-10 md:ml-5 md:mr-2 ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <AiFillFacebook/>
                            </div>
                            <h2 className=" text-black text-2xl font-bold">Facebook</h2>
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-4 flex flex-col p-10 md:ml-2 md:mr-2 ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <BsMessenger/>
                            </div>
                            <h2 className=" text-black text-2xl font-bold">Messenger</h2>
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-4 flex flex-col p-10 md:ml-2 md:mr-5 ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <AiFillInstagram/>
                            </div>
                            <h2 className=" text-black text-2xl font-bold">Instagram</h2>
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-4 flex flex-col p-10 md:ml-5 md:mr-2 ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <AiFillTwitterCircle/>
                            </div>
                            <h2 className=" text-black text-2xl font-bold">Twitter</h2>
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-4 flex flex-col p-10 md:ml-2 md:mr-2 ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <AiFillLinkedin/>
                            </div>
                            <h2 className=" text-black text-2xl font-bold">Linkedin</h2>
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-4 flex flex-col p-10 md:ml-2 md:mr-5 ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <AiOutlineWhatsApp/>
                            </div>
                            <h2 className=" text-black text-2xl font-bold">Whatsapp</h2>
                    </div>
                </div>
                


                <div className="pl-4 pr-4 mb-16">
                    <h1 className="mb-3 font-sans font-bold text-2xl">OUR STRATEGY</h1>
                    <p className=" text-lg">
                        The best location to sell your goods and services is where your potential clients are, which is currently social media. This is a common adage in the field of marketing.
                    </p>
                </div>
                <div className="md:grid  md:grid-cols-2 md:gap-4"> 
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-12 flex flex-col p-10  ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <DiGoogleAnalytics/>
                            </div>
                            <div className="text-lg text-black flex flex-row items-center justify-center">
                                <h2 className=" text-black text-2xl font-bold mr-2 pb-1">Analyse</h2>
                                <BsFillArrowRightCircleFill/>
                            </div>        
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-12 flex flex-col p-10  ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <BsClipboard/>
                            </div>
                            <div className="text-lg text-black flex flex-row items-center justify-center">
                                <h2 className=" text-black text-2xl font-bold mr-2 pb-1">Plan</h2>
                                <BsFillArrowRightCircleFill/>
                            </div>        
                    </div>
                    <div className="duration-200  hover:scale-110 cursor-pointer text-orange-400  border-2 border-gray-300 mb-12 flex flex-col p-10  ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <BsPeopleFill/>
                            </div>
                            <div className="text-lg text-black flex flex-row items-center justify-center">
                                <h2 className=" text-black text-2xl font-bold mr-2 pb-1">Audience</h2>
                                <BsFillArrowRightCircleFill/>
                            </div>        
                    </div>
                    <div className="duration-200  hover:scale-110  cursor-pointer text-orange-400  border-2 border-gray-300 mb-12 flex flex-col p-10  ml-10 mr-10">                
                            <div className=" flex justify-center text-6xl">
                            <BsFillRocketTakeoffFill/>
                            </div>
                            <div className=" text-black flex flex-row items-center justify-center text-lg">
                                <h2 className=" text-black text-2xl font-bold mr-2 pb-1">Lunch</h2>
                                <BsFillArrowRightCircleFill/>
                            </div>        
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default SMM;