import React from 'react'


const MenuCard = ({menuData}) => {
    return ( 
        <div className='flex flex-wrap my-[5%] justify-around'>
            {
        menuData.map( (currElm) => {
            const {id,image,name,rating,orders,prize,description} = currElm;
            return (
            <div className='flex flex-col group lg:w-[20%] lg:h-[450px] md:w-[28%] md:h-[450px] sm:w-[45%] sm:h-[450px] bg-gray-200 rounded-lg overflow-hidden mx-6 my-5 scrollbar-hide'>
                    <figcaption className=' h-[70%] overflow-hidden' id={id}>
                            <img src={image} alt="veg mixer" className='object-cover h-[100%] w-[100%]'/>
                    </figcaption>
                    <div className="float flex w-[100px] relative -top-10  ml-3 justify-between  h-[30px] bg-white rounded-3xl px-2">
                               <i class="fas fa-star flex my-1 text-yellow-500"></i>
                               <h4 className='font-bold text-md text-slate-600'>{rating}</h4>
                               <span className='text-slate-400'>({orders})</span>
                    </div>
                    <div className="flex flex-col p-4">
                        <h2 className='text-2xl font-semibold capitalize'>
                                {name}
                        </h2>
                        <h3 className='my-1 text-slate-600 text-lg'>
                            {description}
                        </h3>
                        <h1 className='font-bold mt-2 text-xl 'className={""}>
                            ₹ {prize}
                        </h1>
                    </div>
        </div>)
        
        })
               }
             </div>
        );
};

export default MenuCard
