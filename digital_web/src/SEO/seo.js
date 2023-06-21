import React from "react";
import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
import fourth from './images/fourth.png';
import fifth from './images/fifth.png';
import sixth from './images/sixth.png';
import seventh from './images/seventh.png';
import {useForm} from "react-hook-form";
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup';
function SEO(){
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
                <h1 className="text-2xl mb-3">Get SEO Services & Optimize Your Website</h1>
                <p className="text-xl ">Seach Engine Optimization</p>
            </div>
            <div className="flex flex-col md:flex-row font-sans text-left pt-10 bg-gray-100 pl-4 pr-2 font-bold text-2xl">
              <div className="flex-1">
                    <h1>
                            Drive More Traffic To Your Website Now
                    </h1>
                    
                    
                    <p className=" pt-4 text-lg font-light ">
                            Looking For SEO (Search Engine Optimization) Service, so you are at the right place.
                    </p>
                    
                    <img className="pl-1 pr-1 pt-4" src={first}></img>
               </div>
               
               <form className="flex-1 md:ml-5 pb-10" onSubmit={handleSubmit(info)}>
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
            <div className=" pb-10 bg-white font-medium text-center pl-4 pr-4 flex flex-col">
                <h2 className=" text-gray-600 text-xl pt-10">
                    WHY SEARCH ENGINE OPTIMIZATION (SEO)?
                </h2>
                <h1 className="text-3xl pt-4">
                    Because A Greate Website Deserves To Be In The Limelight!
                </h1>
                <p className=" text-xl text-gray-700 pt-6">
                    Let the SEO Experts get your website ranking on top search sites like Google, Yahoo and Bing!   
                </p>
                <div className="md:grid md:grid-cols-3 md:gap-y-2 md:gap-x-6">
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={second}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Dedicated SEO Manger</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            Every SEO campaign has a dedicated project coordinator who keeps in touch with the Managed SEO customer on the campaign's progress and results.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={third}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Keyword Targeting</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            We focus on keywords that are appropriate for your company, product, or service and those that align with the intent of your clients.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={fourth}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Content Relevancy</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            Help from a professional SEO assistance to improve ranks with material that is optimised for the most profitable keywords.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={fifth}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Link Building</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            To increase authority and subsequently rankings, our SEO specialists will post original content to blogs, directories, submission platforms, and social bookmarking sites.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={sixth}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Keyword Tracking</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            We offer quarterly and monthly ranking reports so you can track improvements in your SEO keyword rankings.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Website Analytics</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            Find out precisely how many individuals are visiting your website and whether they are brand-new or recurring visitors.                    </p>
                    </div>
                </div>
            </div>

            <div className="text-white text-2xl font-bold pb-3 pt-3">
                <h1>"Don't optoimize for conversions, optimize for revenue."</h1>
            </div>
            <div className=" bg-white pt-14 font-sans text-2xl pl-1 pr-1 pb-20">
                <h1 className=" pb-8">What Our SEO Sevice Do To Your Website?</h1>
                <div className="md:grid md:grid-cols-3 md:gap-4 md:mr-4">
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Increased Brand Awareness</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            With the right SEO services, your visibility will increase.                    </p>
                    </div>
                    
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Conversion</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            You will see an increase in conversions if your website ranks highly in search engines.
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Quality Traffic</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            A search on the search engine is the starting point of 90% of all online experiences. Capture The Traffic!              
                        </p>       
                    </div>
                    
                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">FREE Traffic & Higher Conversion</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            When you rank higher for the relevant terms and get higher conversion, you receive FREE organic traffic.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Better Online Visibility</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            When your brand appears at the top of the first page of search results, you gain increased brand exposure.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center drop-shadow-sm border-2 border-gray-100 rounded-sm mt-4 p-2">
                        <div className="flex justify-center">
                            <img src={seventh}></img>
                        </div>
                        <h1 className=" text-xl font-semibold">Higher Domain Authority</h1>
                        <p className=" text-lg text-gray-500 mt-2">
                            Your website's domain authority and reputation can be improved with the use of an effective SEO plan.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default SEO;