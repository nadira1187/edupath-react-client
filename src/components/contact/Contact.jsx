

const Contact = () => {
    return (
        <div className="mt-4 bg-amber-200 bg-opacity-10">
            <h2 className=" pt-3 pb-2 text-center text-3xl font-bold">Contact Us</h2>
            <p className="text-center text-lg">We are here to make your Life Easier</p>
            <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className=" ml-5">
                <img src="https://i.ibb.co/YDC2Yfj/undraw-Contact-us-re-4qqt.png"className="rounded-xl mt-5" alt="" />
                <p className="text-center">You will be hearing from us within 24 Hours</p>
            </div>
            <div className="w-80 lg:w-96 mx-auto">
            <form className="px-4 py-4 max-w-4xl">
                            <input type="email" placeholder="Email" className="input input-bordered w-full" required />
                            <input type="password" placeholder="Password" className="input input-bordered my-2 w-full" required />
                            <input type="textbox" placeholder="Write Message..." className="input input-bordered w-full" />


                            <div className="form-control mt-4">
                                <button className="btn btn-primary bg-fuchsia-700 border-fuchsia-500 text-white">Contact Us</button>
                            </div>
                        </form>
                        </div>
                        </div>
        </div>
    );
};

export default Contact;