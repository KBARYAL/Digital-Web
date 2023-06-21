import React from "react";
import first from './images/first.png';
import {useForm} from "react-hook-form";
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {MdOutlineVerifiedUser} from 'react-icons/md';
function PPC(){
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
                <h1 className="text-2xl mb-3">Get PPC Services & Generate More Leads</h1>
                <p className="text-xl ">Pay Per Click</p>
            </div>
            <div className="flex flex-col md:flex-row font-sans text-left pt-10 bg-gray-100 pl-4 pr-2 font-bold text-2xl">
                 <div className="md:mr-4 flex-1">
                    <h1>
                        Generate More Leads For Your Business Now
                    </h1>
                    <p className=" pt-4 text-lg font-light ">
                        Looking For PPC (Pay Per Click) Service, so you are at the right place. Fill Form To Get Service 
                    </p>                 
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
                <h2 className=" text-lg font-bold mb-4">OUR PPC PROCESS</h2>
                <h1 className=" text-2xl font-bold mb-12">
                    PPC Services We Provide & Our Main Targeted Brands
                </h1>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">GOOGLE ADWORDS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Advertise on Google Search, YouTube, Gmail, & More. Increase your calls, website visits, and shoppers to your store.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">FACEBOOK ADS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Advertise on Facebook & Instagram Feed Stories, Messenger, Partner Networks & More. Get leads and sales with a 5X ROAS or 20X ROAS Retargeting Audience.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">lINKEDIN ADS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        To reach over 630 million professionals around the world, advertise on Linkedln. You can create sponsored posts, InMai Ads, and Text & Dynamics Ads.     
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">TWITTER ADS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Twitter Ads can increase engagement, grow followers and increase website traffic. It can also generate leads & sales, install apps & engage with users.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">REDDIT ADS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        To reach 234M unique monthly Internet users, advertise on the "front page" of the Internet to reach these communities.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold"> SNAPCHAT ADS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Snapchat advertising targeting the mobile-first generation will drive sales to your website, in your store, or downloads of your app.
                    </p>
                </div>
                <div className=" text-left pl-5 pr-5 pb-8">
                    <div className=" flex flex-row items-center text-orange-400 text-xl font-bold">
                        <MdOutlineVerifiedUser/>
                        <h2 className="ml-2 text-lg font-bold">QUORA ADS</h2>
                    </div>
                    <p className="mt-4 text-lg leading-5">
                        Quora is a platform that allows you to advertise and reach millions of people looking for answers to questions related to your industry or business.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PPC;