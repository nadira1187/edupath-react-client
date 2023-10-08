const Ticket = () => {
    return (
      <div>
        <div className="mt-3 mx-5 rounded-md h-full relative">
          <div
            className="h-[300px] rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/r66dYvK/slide1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-20 rounded-xl"></div>
            <div className="flex flex-col justify-center items-center relative z-10">
              <h2 className="text-5xl font-bold pt-11 text-white text-center">
              Need  Ticket for Your Event?
              </h2>
              <p className="text-white text-lg text-center pt-5">
                Elevate your corporations success with innovative solutions. Join the corporate
                <br />
                leaders gathering for insights and growth.
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded">
                Call Our Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Ticket;
  