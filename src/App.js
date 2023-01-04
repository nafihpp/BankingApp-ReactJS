import { useEffect, useState } from "react";
import "./App.css";
import Mainpage from "./components/Mainpage";
import animationData from "./loader/credit-card.json";
import Lottie from "react-lottie"; // Loader Lottie
import styled from "styled-components";

function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(function () {
        setLoading(false); //setting timeout for being loader as false
    }, 1000);

    const defaultOptions = {
        //Main Loader Settings
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            {loading ? (
                <LoaderContainer>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </LoaderContainer>
            ) : (
                <Mainpage />
            )}
        </>
    );
}
const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export default App;
