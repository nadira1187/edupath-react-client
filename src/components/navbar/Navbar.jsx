// Example in index.css or index.js
import 'tailwindcss/tailwind.css';
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div>
          <div className="navbar bg-base-100 rounded-xl p-4 mt-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
      </ul>
    </div>
   
    <a className="btn btn-ghost normal-case  text-orange-500  text-4xl font-bold">
    <img className='w-[40px] h-[40px]' src="https://i.ibb.co/BLg3XM4/icon1.png" alt="icon1" border="0"/>EduPath</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About us</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <div>
        <img className='w-10 rounded-full' src="https://i.ibb.co/hcs6qMW/banner.png" alt="" />
    </div>
    {
        user? 
        <button onClick={handleSignOut} className='btn btn-primary text-white bg-orange-500 border-orange-500 normal-case'>Sign Out</button>
        :
        <button className='btn btn-primary text-white bg-orange-500 border-orange-500 normal-case'> 
        <Link to='/login'>Login</Link>
        </button>
    }
   
  </div>
</div>
        </div>
    );
};

export default Navbar;