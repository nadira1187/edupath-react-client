import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Career = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" hero min-h-screen relative bg-[url('https://i.ibb.co/L6sqFb8/slide2.jpg')] rounded-2xl mt-4">
                {/* White overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50"></div>

                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        <img src="https://i.ibb.co/zSRQZ0q/career.png" className="w-11/12 rounded-2xl" />
                    </div> 
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-bold ">Discover Your Future <br /> at EduPath & Unlock Your Potential with Us</h1>
                        <p className="py-6 ">At EduPath, we believe in building careers, not just jobs. Join a collaborative and innovative team that is shaping the future with competitive benefits.</p>
                        <button className="btn btn-primary text-white normal-case bg-orange-500 border-orange-500">Apply Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center my-5 text-orange-600">How We Work</h2>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <p className="w-80 h-80  text-base-900">Empowering Education: We believe that education is the foundation for personal and professional growth. We provide access to cutting-edge educational resources and programs that empower our team members to continuously learn and develop their skills.</p>
                    <img data-aos="zoom-in-up" className="w-96 h-80 mb-5" src="https://i.ibb.co/ckpznG3/career2.png" alt="" />
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                <img data-aos="zoom-in-up" className="w-96 h-80" src="https://i.ibb.co/pQ2MN1Z/career3.png" alt="" />
                    <p className="w-80 h-80 text-base-900">Team Collaboration: Collaboration is at the heart of our success. We foster a culture of teamwork, where diverse perspectives come together to solve complex challenges. Our team members work together to achieve common goals and drive innovation.</p>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Career;
