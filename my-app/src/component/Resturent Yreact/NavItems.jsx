import React from 'react'

const NavItems = ({filtterItem,navItem}) => {
    return (
        <nav className='flex bg-gray-200 items-center p-1 rounded-md'>
            {
                navItem.map( (currElm) =>{
            return(
             <button  className="text-xl mx-3 cursor-pointer text-slate-600 focus:outline-none focus:bg-blue-500 focus:text-white capitalize hover:bg-slate-300 p-auto h-11 w-20 items-center active:focus:ring-1 justify-center flex rounded-sm font-semibold" onClick={()=>filtterItem(currElm)}> {currElm}</button> 
            )

                })
            }
        </nav>
    );
};

export default NavItems;
