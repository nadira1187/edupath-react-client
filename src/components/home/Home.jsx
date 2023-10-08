import Banner from "../banner/Banner";
import Card from "../card/Card";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Ticket from "../ticket/Ticket";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <Ticket></Ticket>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;