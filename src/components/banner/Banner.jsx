

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-amber-500 bg-opacity-10 rounded-2xl mt-4">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/hcs6qMW/banner.png" className="bg-[url('https://i.ibb.co/qrd5T3v/header-bg.png')] bg-no-repeat bg-right-bottom" />
    <div>
      <h1 className="text-5xl font-bold">Empowering Education & Training Excellence</h1>
      <p className="py-6">Welcome to a one-stop hub for seamless management of workshops, webinars, career fairs, educational conferences, training programs, and more.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;