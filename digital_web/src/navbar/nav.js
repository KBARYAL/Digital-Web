import first from './images/first.png';
import second from './images/second.png';
import {AiFillHome,AiOutlineClose,AiFillPhone} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {HashLink} from 'react-router-hash-link'

function Nav(){
    
    const slide=()=>{
       let x = window.matchMedia("(min-width: 768px)");
       const slidee=document.querySelector('.slidee')
       slidee.classList.toggle('w-0')
       if(x.matches){
         slidee.classList.toggle('w-1/4')
       }
       else{
         slidee.classList.toggle('w-2/4')
       }   
    }
    const drop=()=>{
      const drop_services=document.getElementById("drop-services");
      drop_services.classList.toggle("hidden");

   }
    const down=()=>{
      const drop_packages=document.getElementById("drop-packages");
      drop_packages.classList.toggle("hidden");
   }
   function top() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 
    return (
        <div className=" z-30 relative">
             <div  className=" bg-black text-white box-border fixed w-full">
                <div  className=" flex flex-row justify-between  ml-10 mr-10">
                  <HashLink to={'/#home'}>
                  <img className=" max-h-24 " src={first}></img>
                  </HashLink>
                        <div id="second" className="lg:hidden flex items-center" onClick={slide}>
                           <img className=" cursor-pointer max-h-6 " src={second}></img>
                        </div>
                        <div className='lg:block  hidden '>
                          <div className=' font-bold text-xl flex flex-row gap-5 h-full items-center'>
                            <HashLink to={"/#home"} className='h-2/4 pl-1 pr-1 flex items-center hover:bg-orange-400'><p>Home</p></HashLink>
                            <div  onMouseOver={drop} onMouseOut={drop} >
                              <p id="services">Services</p>
                                <div  id="drop-services" className='absolute hidden bg-black text-left pt-10 mb-4 leading-10'>
                                  <HashLink to={"/SEO"} onClick={()=>top()}>
                                  <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>SEO Service</p>
                                  </HashLink>
                                  <HashLink to={"/SMM"} onClick={()=>top()}>
                                  <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>SMM Service</p>
                                  </HashLink>
                                  <HashLink to={"/PPC"} onClick={()=>top()}>
                                  <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>PPC Service</p>
                                  </HashLink>
                                  <HashLink  to={"/WEBSITE"} onClick={()=>top()}>
                                  <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>Website Service</p>
                                  </HashLink>
                                </div>
                            </div>    
                            <HashLink to={"/#package"}>
                              <div  onMouseOver={down} onMouseOut={down} >
                                <p id="packages">Packages</p>
                                  <div id="drop-packages" className='absolute hidden bg-black text-left mb-4 pt-10  leading-10'>
                                    <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>SEO Packages</p>
                                    <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>SMM Packages</p>
                                    <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>PPC Packages</p>
                                    <p className='hover:bg-orange-400 cursor-pointer pl-2 pr-2'>Website Packages</p>
                                  </div>
                              </div>
                            </HashLink>
                                
                            
                            <HashLink className='h-2/4 pl-1 pr-1 flex items-center hover:bg-orange-400'  to={"/CONTACT"}><p>Contact</p></HashLink>
                          </div>
                        </div>
                        
                </div>
            </div>
            <div className="lg:hidden  duration-500 slidee pt-8 z-1 overflow-x-hidden fixed bg-black h-full text-lg flex flex-col  w-0">
                <div className=' text-white  mr-24 text-3xl flex justify-center cursor-pointer' onClick={slide}>
                  <AiOutlineClose/>
                </div>


                <HashLink className='hover:bg-orange-400 flex justify-center mt-2 pt-5 pb-4 pr-6'onClick={slide} to={"/#home"}>
                  <div className=' text-white flex justify-center  cursor-pointer'>
                      <div className=' mt-1 mr-1'><AiFillHome/></div>
                      <h1 className='ml-1 mr-12 font-sans a'>Home</h1>  
                  </div>
                </HashLink>

                <HashLink className='hover:bg-orange-400 flex justify-center mt-2 pt-5 pb-4 pr-2 'onClick={slide} to={"/SEO"}>
                  <div className='text-white flex justify-center  cursor-pointer whitespace-nowrap'>
                    <div className='mt-1 ml-4'><FiSettings/></div>
                    <h1 className='ml-1 mr-12 font-sans'>SEO Service</h1>
                  </div>
                </HashLink >

                <HashLink className='hover:bg-orange-400 flex justify-center mt-2 pt-5 pb-4 pr-2' onClick={slide} to={"/SMM"}>
                  <div className='text-white flex justify-center  cursor-pointer whitespace-nowrap'>
                    <div className='mt-1 ml-6'><FiSettings/></div>
                    <h1 className=' ml-1 mr-12 font-sans'>SMM Service</h1>
                  </div>
                </HashLink>
                
                <HashLink className='hover:bg-orange-400 flex justify-center mt-2 pt-5 pb-4 pr-2' onClick={slide} to={"/PPC"}>
                  <div className='text-white flex justify-center  cursor-pointer whitespace-nowrap'>
                    <div className='mt-1 ml-4'><FiSettings/></div>
                    <h1 className='ml-1 mr-12 font-sans'>PPC Service</h1>
                  </div>
                </HashLink>
                
                <HashLink className='hover:bg-orange-400 flex justify-center mt-2 pt-5 pb-4 pr-2' onClick={slide} to={"/WEBSITE"}>
                  <div className='text-white flex justify-center  cursor-pointer whitespace-nowrap'>
                    <div className='mt-1 ml-12'><FiSettings/></div>
                    <h1 className='ml-1 mr-12 font-sans'>Website Service</h1>
                  </div>
                </HashLink>  

                <HashLink className='hover:bg-orange-400 flex justify-center mt-2 pt-3 pb-4 pr-5' onClick={slide} to={"/CONTACT"}>
                <div className='text-white flex justify-center  cursor-pointer whitespace-nowrap'>
                    <div className='mt-1'><AiFillPhone/></div>
                    <h1 className='ml-2 mr-12 font-sans'>Contact</h1>
                  </div>
                </HashLink>
                 
               
            </div>
        </div>  
    )
}
export default Nav;