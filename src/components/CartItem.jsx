import React from "react";



const CartItem = ({item,itemIndex}) => {
  return (<div >
  <div className="flex flex-row justify-left items-top gap-x-3 w-full mb-2 mt-2">
    <div className="h-[250px]">
      <img src={item.image} className="h-full w-full items-center w-full"/>

    </div>
    <div className="px-2 py-2 "> 
      <h1 className="font-semibold text-lg text-left mt-1 text-gray-700">{item.title}</h1>
      <h1 className=" text-gray-400 font-normal text-[10px] text-left w-3/4">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
      <div>
        <p className="text-green-600 font-semibold mt-24  ">${item.price}</p>
        
      </div>

      


    </div>

    

  </div>
  <div className="border-2 border-gray-500 w-5/6 mt-4 justify-center items-center"></div>
  </div>  )

};

export default CartItem;
