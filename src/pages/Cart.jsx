import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { UseSelector, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const Cart = () => {
  const {cart}= useSelector((state)=>state);
  const [totalAmount, SetTotalAmount]=useState(0);
  console.log(cart);
  useEffect(()=>{
    SetTotalAmount( cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return <div className="flex justify-center h-full py-10 ">
    {
      cart.length>0?
      (<div className="flex  ">
      <div>
        
        {
        cart.map((item,index)=>{
          return <CartItem key={item.id} item ={item} itemIndex= {index}/>

        })
        }
        
      </div>
      <div className=" flex flex-col justify-between h-[500px] w-[350px]">
        <div className="flex flex-col">
        <h3 className="text-xl text-green-500 font-semibold  ">Your Cart</h3>
        <h2 className="text-5xl text-green-500 font-bold uppercase">Summary </h2>
        <p className="font-bold text-xl"><span>Total Items: {cart.length}</span></p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl">Total Amount : ${totalAmount}</p>
          <button className="w-full bg-green-700 text-white font-bold text-2xl rounded mt-2">Checkout</button>

        </div>
      </div>
      </div>):
      (<div className=" flex flex-col gap-y-4 justify-center items-center py-5"> 
        <h1 className="font-bold justify-center items-center text-6xl mt-10">Cart is Empty</h1>
        <Link to ={"/"}>
          <button className="rounded-full bg-green-500 justify-center items-center p-2 ">Shop Now</button>
        </Link>
      </div>)
     
    }

  
  </div>;
};

export default Cart;
