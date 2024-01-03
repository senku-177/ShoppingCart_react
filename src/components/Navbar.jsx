import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}= useSelector((state)=>state);

  return(<div>
    <nav className="flex flex-row justify-between mx-auto items-center h-20 max-w-6xl ">
      <NavLink to ="/">
        
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.volkswagen-newsroom.com%2Fen%2Fimages%2Fdetail%2Fvolkswagen-logo-30145&psig=AOvVaw1fM84ce_qcgydOfE3_U0fz&ust=1703436787703000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCSwdmCpoMDFQAAAAAdAAAAABAY" alt="" />
      
      </NavLink>
      <div className="text-slate-100 font-medium flex items-center mr-5 space-x-6">
      <NavLink to ="/"> 
          <p>Home</p>
      </NavLink>
      <NavLink to="/cart">
        <div className="relative"> 
        <FaShoppingCart className="text-2xl"/>
        <span className="absolute -top-1 -right-2 bg-green-600 text-xs animate-bounce rounded-full text-white justify-center w-5 h-5 flex ">{cart.length}</span>
        </div>
      </NavLink>
      </div>
    </nav>
    

  </div>)
};

export default Navbar;
