import React from "react";
import first from './images/first.png';
import {useForm} from "react-hook-form";
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup';
function CONTACT(){
    const dataTypeas=yup.object().shape({
        fullName:yup.string().required(),
        email:yup.string().email().required(),
        number:yup.number().required(),
        message:yup.string().max(300),
        option:yup.string().oneOf(['option1', 'option2','option3','option4']).required(),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(dataTypeas),
    });
    const info = (data) =>{
        console.log(data);
    }
    return(
        <div className=" bg-orange-400 pt-32 mb-10">
           <div className="text-white font-bold pb-8 pl-1 pr-1">
            
                <h1 className="text-2xl mb-3">Hai Web Tech | Contact Us</h1>
                    <p className="text-lg ">Let's Connect Now!</p>
                </div>
                <div className="flex flex-col md:flex-row  font-sans text-left pt-10 bg-white pl-4 pr-2 font-bold text-2xl">   
                        <div className="flex-1">
                            <img className="pl-1 pr-1 pt-4" src={first}></img> 
                        </div>     

                        <form className="flex-1 pb-10 md:pb-0 pt-7" onSubmit={handleSubmit(info)}>
                            <input className="   outline-none  text-lg font-sans font-medium pl-2" type="text" placeholder="Full Name" {...register("fullName")}/>
                            <div className=" border-2 border-gray-400 m-2 "></div>
                            
                            <input className="   outline-none  text-lg font-sans font-medium pl-2" type="text" placeholder="Email"{...register("email")} />
                            <div className=" border-2 border-gray-400 m-2 "></div>
                            <input className="  outline-none  text-lg font-sans font-medium pl-2" type="number" placeholder="Phone"{...register("number")}/>
                            <div className=" border-2 border-gray-400 m-2 "></div>
                            <select className="text-lg font-sans font-medium text-gray-400 w-3/4 bg-white ml-2"{...register("option")}>
                                <option disabled selected>Choose a Service</option>
                                <option value='option1'>Website Design & Development</option>
                                <option value='option2'>Search Engine Optimization (SEO)</option>
                                <option value='option3'>Social Media Marketing (SMM)</option>
                                <option value='option4'>Pay Per Click (PPC)</option>
                            </select>
                            <div className=" border-2 border-gray-400 m-2 "></div>
                            <input className=" w-full mr-1  outline-none text-lg font-sans font-medium pl-2 " type="text" placeholder="Any Message...." {...register("message")}></input>
                            <div className=" border-2 border-gray-400 m-2 "></div>
                            <div className="flex justify-center">
                                    <button className="p-2 mt-4 rounded-lg text-white bg-orange-400" type="submit">Let's Connect</button>
                            </div>                  
                        </form>
                </div>
            </div>
            )
    }
    export default CONTACT;
            