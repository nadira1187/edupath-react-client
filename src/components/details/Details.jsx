import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Details = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                const findDetail = data.find((item) => item.id === parseInt(id));
                if (findDetail) {
                    setDetail(findDetail);
                }
            });
    }, [id]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto py-10">
                <div className="w-full rounded-md bg-cover bg-center " >
                    <img
                        src={detail.image}
                        alt={detail.name}
                        className="rounded-md w-full h-full object-cover"
                    />
                </div>
                <div className="text-neutral-content">
                    <h1 className="pt-10 text-3xl font-bold text-orange-600">
                        {detail.name}
                    </h1>
                    <p className=" pt-4 text-base font-normal text-orange-500 ">
                        {detail.shortDescription}
                    </p>
                    <div className="flex justify-between">
                        <button className="my-6 btn normal-case btn-primary bg-orange-700 text-white border-none">
                            Purchase Ticket: ${detail.price}
                        </button><Link to='/'><button className="btn btn-ghost border-white bg-orange-400 text-white shadow-2xl my-6">
                            Go Back to Home
                        </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;