import Banner from "../banner/Banner";
import Card from "../card/Card";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <Login></Login>
        </div>
    );
};

export default Home;