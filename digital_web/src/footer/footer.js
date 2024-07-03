import React from "react";
import first from "./images/first.png";
import {HashLink} from 'react-router-hash-link'
function FOOTER(){
        let top=()=>{
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            document.documentElement.style.scrollBehavior = "smooth";
        }
           
    return(
        <div className=" bg-black text-white flex flex-col sm:flex-row pt-10 pr-2 pl-2">
            <div className="flex-1 flex justify-center pb-3">
                <img className=" w-2/4 sm:w-3/4 h-3/4" src={first}></img>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-5">Services</h1>
                <div  onClick={top} className="text-lg leading-8 text-left flex flex-col ml-3 mb-10">
                    <HashLink  to={"/SEO"}>
                        <p  className=' cursor-pointer pl-2 pr-2'>SEO Service</p>
                    </HashLink>
                    <HashLink to={"/SMM"}>
                        <p  className=' cursor-pointer pl-2 pr-2'>SMM Service</p>
                    </HashLink>
                    <HashLink to={"/PPC"}>
                        <p  className=' cursor-pointer pl-2 pr-2'>PPC Service</p>
                    </HashLink>
                    <HashLink  to={"/WEBSITE"}>
                        <p  className=" cursor-pointer pl-2 pr-2">Website Service</p>
                    </HashLink>
                </div>
            </div>
           
            <div className="flex-1 flex flex-col items-center justify-center mb-10">
            <HashLink to={"/#package"}>
                <h1 className="text-3xl font-bold mb-5">Packages</h1>
                <div className="text-lg leading-8 text-left flex justify-center flex-col ">
                    <p className=" cursor-pointer">SEO Service</p>
                    <p className=" cursor-pointer">SMM Service</p>
                    <p className=" cursor-pointer">PPC Service</p>
                    <p className=" cursor-pointer">WEB Service</p>
                </div>
            </HashLink>
            </div>
            
            
            <div className="flex-1 flex flex-col items-center justify-center mb-10">
                <div className="flex justify-start">
                    <h1 className="text-3xl font-bold mb-5">Pages</h1>
                </div>
                
                <div className="text-lg leading-8 text-center flex flex-col ">
                    <p className=" cursor-pointer">Blog</p>
                    <p className=" cursor-pointer">Contact</p>
                    <p className=" cursor-pointer pl-3">Privacy & Policy</p>
                    <p className=" cursor-pointer pl-3">Terms & Conditions</p>
                </div>
            </div>
            
        </div>
        
    )
}
export default FOOTER;
