import React from "react";
import first from './images/first.png';
import {useForm} from "react-hook-form";
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {MdOutlineVerifiedUser} from 'react-icons/md';
function WEBSITE(){
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
    return(
        <div className=" bg-orange-400 pt-32">
           <div className="text-white font-bold pb-8 pl-1 pr-1">
                <h1 className="text-2xl mb-3">Take Your Business Online With Website Now</h1>
                <p className="text-lg ">Website Development & Design</p>
            </div>
            <div className="flex flex-col md:flex-row font-sans text-left pt-10 bg-gray-100 pl-4 pr-2 font-bold text-2xl">
               <div className="flex-1">
                    <h1>
                            Get Website For Your Offline Business
                    </h1>
                    
                    
                    <p className=" pt-4 text-lg font-light ">
                            Looking For Website (Design & Development) Service, so you are at the right place. Fill Form To Get Service                </p>                 
                    <img className="pl-1 pr-1 pt-4" src={first}></img>
                    
               </div>
               
               
               <form className="flex-1 pb-10" onSubmit={handleSubmit(info)}>
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


            <div className=" bg-white pl-1 pr-1 pt-10">
                <h2 className=" text-lg font-bold mb-4">CHANGE IS INEVITABLE</h2>
                <h1 className=" text-2xl font-bold mb-12">
                    And We Change Your Digital Experiences For A Better ROI!
                </h1>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">CREATING THE FIRST IMPRESSION</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Never risk your company's reputation by using unprofessional websites. Hai Web Tech guarantees to build your website with the strongest and most captivating firs t impression. 
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">INCREASES CREDIBILITY</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        To persuade customers to come in and perform the necessary action, all it needs is a great website with the newest designs and compelling online copy. With Hai Web Tech, you can stand out from the competition.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold"> IMPROVED RANKING ON SERP</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        A website that doesn't wow its visitors also doesn't wow the search engines. Hai Web Tech assists you in creating websites and content that have excellent designs and have a positive effect on readers.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold"> INCREASED MOBILE TRAFFIC</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        The website development and design teams at Hai web Tech guarantee a layout that works on both desktop and mobile devices. The readers benefit from higher adaptability at a lesser cost of development.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">MINIMIZED BOUNCE RATES</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        The website design services provided by Hai Web Tech are expertly crafted to pique readers interest. We guarantee that readers won't abandon your website after viewing the home page.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">INCREASED REVENUE</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Your website's visitors will be impressed by its clever design, which will help you turn them into prospects. Every potential customer will undoubtedly increase returns and revenue for your business.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default WEBSITE;