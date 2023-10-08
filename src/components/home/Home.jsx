import Banner from "../banner/Banner";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Home;