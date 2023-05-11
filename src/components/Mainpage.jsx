import Navbar from "./includes/Navbar";
import Spotlight from "./screens/Spotlight";
import Hero from "./screens/Hero";
import CreditCard from "./includes/CreditCard";

function Mainpage() {
    return (
        <>
            <Navbar />
            <Spotlight />
            <Hero />
            <CreditCard />
        </>
    );
}

export default Mainpage;
