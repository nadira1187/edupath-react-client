import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../navbar/Navbar";
import { useContext } from "react";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form =new FormData(e.currentTarget);
        const name=form.get("name");
        const email=form.get("email");
        const password=form.get("password");
        console.log(email);
        console.log(password);
        console.log(name);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="mt-10 flex justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary normal-case bg-orange-500 border-orange-500 text-white">Register</button>
        </div>
        <p>Already have an account ?<a href=""> <Link to="/login">Login</Link></a></p>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;