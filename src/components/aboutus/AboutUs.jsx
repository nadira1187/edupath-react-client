import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-80  bg-amber-500 bg-opacity-10 flex flex-col justify-center items-center">
                <h3 className="text-center font-bold text-5xl text-orange-500"> About Us</h3>
                <p className="text-center text-orange-500 text-xl mt-3">Collaborate with people in one mission for the best future.</p>
            </div>
            <div className="mt-5 ml-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center">
                <div className="p-5 bg-base-100 rounded-xl shadow-xl" data-aos="zoom-in">
                    <img className=" rounded-full" src="https://i.ibb.co/6WFNpsM/about1.png" alt="" />
                    <h3 className="text-2xl font-semibold mb-2">Empowering Through Learning</h3>
                    <p>Discover our engaging workshops and webinars designed to enhance your knowledge and skills. Join us in a collaborative learning journey.</p></div>
                <div className="p-5 bg-base-100 rounded-xl shadow-xl" data-aos="zoom-in-up">
                    <img  className="rounded-full" src="https://i.ibb.co/B3Y647S/about2.png" alt="" />
                    <h3 className="text-2xl font-semibold mb-2"> Navigating Career Opportunities</h3>
                    <p>We connect talented job seekers with top employers at our career fairs. Explore job openings and build your network.</p>
                    </div>
                <div className="p-5 bg-base-100 rounded-xl shadow-xl" data-aos="zoom-in-up">
                    <img  className="rounded-full" src="https://i.ibb.co/v43Jghw/about4.png" alt="" />
                    <h3 className="text-2xl font-semibold mb-2 ">Unlocking Your Potential</h3>
                    <p>Elevate your career with our diverse range of training programs. Gain new skills and advance your professional journey.</p>
                    </div>
                <div className="p-5 bg-base-100 rounded-xl shadow-xl" data-aos="zoom-in">
                    <img  className="rounded-full" src="https://i.ibb.co/hL7g05s/about3.png" alt="" />
                    <h3 className="text-2xl font-semibold mb-2">Shaping the Future of Education</h3>
                    <p>Our educational conferences bring together thought leaders and educators to explore innovations in teaching and learning.</p>
                    </div>
                
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;