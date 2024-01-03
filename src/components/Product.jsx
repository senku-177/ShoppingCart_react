import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {add,remove} from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart}= useSelector((state)=>state);
const dispatch = useDispatch();

 const addToCart=()=>{
    dispatch(add(post));
    toast.success("item added to cart");
 }
 const removep=()=>{
  dispatch(remove(post.id));
  toast.success("Item removed from cart")
 }
 
 return (<div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 rounded-xl outline max-h-[400px] ">
    

    <div> 
      <p className="font-semibold text-lg text-left truncate w-40 mt-1 text-gray-700">{post.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} className="h-full w-full items-center w-full "alt="" />
    </div>
    <div className="flex justify-between gap-12">
      <p className="text-green-600 font-semibold  ">${post.price}</p>

      <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase p-1 px-3 hover:bg-gray-700 hover:text-white" >
      {
        cart.some((p)=>p.id==post.id)?<button onClick={removep}>remove Item </button> : <button onClick={addToCart}> Add to Cart </button>
      }
    </button>

    </div>
   
  </div>);
};

export default Product;
