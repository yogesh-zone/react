import React from 'react'

const Post = ({post}) => {
    return (
        <div class="py-[5%] px-[5%] flex justify-around">
            {
               post.map((curr)=>{
                   const {image,id,name,description,link} = curr;
                   console.log(name);
                   return (
                    <div class="py-[1%] px-[5%] flex w-[40%] flex-col justify-around items-center transition ease-in-out delay-50 hover:scale-110" id={id}>
                    <figcaption class="bg-gray-100  rounded-full w-[140px] h-[140px] items-center flex justify-center">
                      <img src={image} alt="house picture" class="rounded-full w-[80%] h-[80%]"/>
                    </figcaption>
                    <h1 class="text-gray-800 font-bold text-xl py-2">
                      {name}
                    </h1>
                    <p class="text-center text-gray-600 my-1 leading-5">
                      {description}
                    </p>
                    <a href={link} class="text-md font-semibold  hover:text-violet-900 text-blue-700  capitalize py-4">learn more </a>
                  </div>
                   );
               })
            }
        </div>
    );
};

export default Post;
