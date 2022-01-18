import React from 'react'
const MainComponemt = (({maincomp})=>{

    return <>
    {
    maincomp.map((curr)=>{
        const {heading,before,para,para2,button1,button2,image,reverse} = curr;
        console.log(curr);
        return (
        <header className="my-[10%] flex" className={ (reverse)?"flex flex-row ":"flex flex-row-reverse" }>
        <div className='w-[45%] mr-10'>
        <img src={image} alt="burger" className="object-cover rounded-[50px]" />
        </div>
        <div className="flex flex-col w-[55%] /*p-13*/  text-left">
            <h1 className='text-[55px] font-extrabold leading-2 items-center w-full text-slate-800'>
            {heading} <br/> <span class="before:block before:absolute before:-inset-1 before:-skew-x-[13deg] before:bg-blue-600 relative inline-block">
            <span class="relative text-white">{before}</span>
            </span>
            </h1>
            <p className="text-gray-500 my-10 text-xl">
            {para} 
            <br/>
            <br/>
            {para2}
            </p>
            <button href="" className='w-44 rounded-md px-3 inline-block py-3 capitalize hover:bg-violet-600 text-white text-xl font-semibold bg-indigo-700 active:bg-indigo-800 bg-opacity-100'>{button1}</button>
            <button href="" className='block w-28 h-10 rounded-md px-auto capitalize bg-indigo-600 text-white text-md font-semibold hover:bg-indigo-700 active:bg-indigo-800 bg-opacity-100' className={ (button2!=")")?"visible":"hidden" }>{button2}</button>

        </div>
    </header>)
    })
    
    }
    </>
})
export default MainComponemt;