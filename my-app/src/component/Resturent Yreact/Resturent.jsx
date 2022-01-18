import React ,{useState} from 'react';
import './style.css'
import '../../index.css'
import {Menu,posts,service,maincomp1,maincomp2,maincomp3} from "./MenuApi"
import MenuCard from './MenuCard'
import NavItems from "./NavItems"
import Post from './Post'
import MainComponemt from './MainComponemt';
function Resturent() {

   const uniqueList  =[ ...new Set(Menu.map((curElm) => curElm.categoary)),"All"];
   const [menuData,setMenuData] = useState(Menu);
   const [navItem ,setNavItem] = useState(uniqueList);

   const filtterItem = (category) =>{
    if(category==="All")
    {
        setMenuData(Menu);
        return;
    }
       const updatedList = Menu.filter((currElm) =>{
           return category === currElm.categoary
       })
       setMenuData(updatedList);
       setNavItem(uniqueList);
   }
    return (
        <div className='scrollbar-hide'>
             <navbar className="navbar">
            <div className="company">
                {/* <i className="companylogo fab fa-y-combinator text-blue-800"> </i> */}
                <img src="https://treact.owaiskhan.me/static/media/logo.2c489fc4.svg" alt="no"className='w-12 h-12 mr-3' />
                <span className="text-5xl font-extrabold text-red-600">
                    Y <span className="text-4xl -ml-4 font-extrabold text-black">
                    react
                </span>
                </span> 
            </div>
            <div className="navbaritem font-semibold ">
                <ul className='transition delay-300'>
                <li className="navitem "> <a  className="transition-all ease-in-out delay-80 hover:text-blue-500 hover:border-b-4 hover:border-b-blue-800"href="https://treact.owaiskhan.me/components/landingPages/RestaurantLandingPage"   target="_blank" rel="noreferrer" >  Home </a> </li>
                <li className="navitem"> <a  className="transition-all ease-in-out delay-80 hover:text-blue-500 hover:border-b-4 hover:border-b-blue-800 "href="bbn.com"> Blog  </a> </li>
                <li className="navitem"> <a  className="transition-all ease-in-out delay-80 hover:text-blue-500 hover:border-b-4 hover:border-b-blue-800"href="bbn.com">  Pricing </a> </li>
                <li className="navitem"> <a  className="transition-all ease-in-out delay-80 hover:text-blue-500 hover:border-b-4 hover:border-b-blue-800"href="bbn.com">   Contact us! </a></li>
                <li className="navitem"> <a  className="transition-all ease-in-out delay-80 hover:text-blue-500 hover:border-b-4 hover:border-b-blue-800"href="bbn.com">   Log in </a></li>
                </ul>
                <button className='navbutton'>
                    Sign up
                </button>
            </div>
        </navbar>
        <div className='my-[12%]'>
        <MainComponemt maincomp={maincomp1}/>
        </div>

        <div className='my-[10%]'>
        <MainComponemt maincomp={maincomp2}/>
        </div>
        <section>
            <nav className='flex justify-between'>
                <h1 className='text-[50px] font-bold tracking-target'>Checkout our   
                      <span class="ml-3 before:block before:absolute before:-inset-1 before:-skew-x-[13deg] before:bg-blue-600 relative inline-block">
                        <span class="relative text-white ml-3">
                         menu.
                        </span>
                    </span>
                </h1>
                 <NavItems filtterItem={filtterItem} navItem={navItem}/>
                 {/* {console.log(navItem)} */}
            </nav>
                 <MenuCard menuData ={menuData} />
        </section>
        <div class="flex justify-center mt-[10%] my-[2%]">
             <h1 class="text-[50px] font-extrabold text-slate-800">
               Amazing
              <span class="before:block ml-3 before:absolute before:-inset-1 before:-skew-x-[13deg] before:bg-blue-600 relative inline-block">
              <span class="relative text-white">
                Services.
              </span>
              </span>
             </h1>
        </div>
        <Post post = {service}/>

        <div className='my-[3%]'>
        <MainComponemt maincomp={maincomp3}/>
        </div>

        <div class="flex justify-center mt-[10%] my-[2%]">
             <h1 class="text-[50px] font-extrabold text-slate-800">
             Customers
              <span className="before:block ml-3 before:absolute before:-inset-1 before:-skew-x-[13deg] before:bg-blue-600 relative inline-block">
              <span className="relative text-white">
              Love Us.
              </span>
              </span>
             </h1>
        </div>
        <Post post = {posts}/>

        <div className="w-[104%] relative -left-[30px] h-[650px] bg-slate-900 -12 flex justify-center items-center p-10">
            <div className='flex flex-wrap w-[54%]'>
                <h3 className='text-yellow-500 font-bold text-md capitalize'>                
                    download app
                </h3>

                <h1 className='text-white text-3xl font-extrabold tracking-wide leading-[2.9rem]'>
                People around you are ordering delicious meals using the
                    <span className="before:block ml-3 before:absolute before:-inset-1 before:-skew-x-[13deg] before:bg-white relative inline px-2">
                        <span className='relative text-blue-600 capitalize text-4xl'>
                        Yreact App.
                        </span>
                    </span>
                </h1>
                <div className='flex justify-start py-10'>
                    <a href="#" className='px-12 py-5 my-3 capitalize text-slate-900 bg-white font-bold text-xl rounded-3xl hover:bg-slate-200 transition ease-in-out delay-150'>app store</a>
                    <a href="#" className='px-12 py-5 ml-12 my-3 capitalize text-slate-900 bg-white font-bold text-xl rounded-3xl hover:bg-slate-200 transition ease-in-out delay-150'>play store</a>
                </div>
            </div>
            <figcaption className=' w-[25%] flex justify-end '>
                <img src="https://treact.owaiskhan.me/static/media/app-mockup.3cdce84c.png" alt="" className='object-cover w-64 h-full' />
            </figcaption>
        </div>
        <div className="flex justify-between h-24 items-center text-lg">
            <div className="flex items-center">
                <i className="fab fa-y-combinator text-blue-600"></i>
                <h3 className="text-slate-900 text-2xl font-extrabold tracking-wide pl-3">yogesh Inc.</h3>
            </div>
            <span>© 2022 yogesh Inc. All Rights Reserved.</span>
            <div className="flex">
                <i class="fab fa-facebook mx-2 px-5"></i>
                <i class="fab fa-twitter-square mx-2"></i>
                <i class="fab fa-linkedin mx-2"></i>
            </div>
        </div>

    </div>
    )
}

export default Resturent
