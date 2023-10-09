import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-amber-500 bg-opacity-10 rounded-2xl mt-4">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
  <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" ><img src="https://i.ibb.co/x5GCyNB/banner.png" className=" w-11/12 rounded-2xl" /></div> 
    <div data-aos="fade-right">
      <h1 className="text-5xl font-bold">Empowering Education & Training Excellence</h1>
      <p className="py-6">Welcome to a one-stop hub for seamless management of workshops, webinars, career fairs, educational conferences, training programs, and more.</p>
      <button className="btn btn-primary text-white normal-case bg-orange-500 border-orange-500"> <Link to='/login'>Get Started</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;