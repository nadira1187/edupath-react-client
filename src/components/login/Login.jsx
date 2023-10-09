import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useContext } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
    const {signIn}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
                swal("Signed in!", "You Signed in Successfully!", "success");
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form =new FormData(e.currentTarget);
        const email=form.get("email");
        const password=form.get("password")
        console.log(email ,password);
        signIn(email,password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state?location.state:'/');
            swal("Good job!", "You are logged in!", "success");

        })
        .catch(error =>{
            console.error(error);
            swal("Login Failed", "Email or password is incorrect", "error");
        })
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="mt-10 flex justify-center items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary normal-case bg-orange-500 border-orange-500 text-white">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-primary normal-case bg-transparent border-orange-500 text-black"><FcGoogle className="text-xl"></FcGoogle>Continue with Google</button>
        </div>

        <Link to='/Register'>Do not have an account ? <a className="text-orange-500" >Register</a></Link>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Login;