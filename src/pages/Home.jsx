import { useState,useEffect } from "react";
import Spinner from "../components/Spinner.jsx";
import Product from "../components/Product";
const Home = () => {

  
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading ]= useState(false);
  const [posts,setPosts]= useState([]);
  async function fetchData(){
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data= await res.json();
      console.log(data);
      setPosts(data);

    } 
    catch(error){
      console.log("error here");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{fetchData()},[]);

  return( <div className="flex px-20 py-20">
    
    {
      loading? <Spinner/>:posts.length>0?(<div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80v]"> {posts.map((post) => (
        
        <Product key={posts.id} post= {post}/>
      ))}
        </div>):<div className="flex justify-center items-center">No Post here</div>

    }
  </div>);
};

export default Home;
