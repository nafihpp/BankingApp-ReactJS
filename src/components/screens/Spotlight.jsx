import React, { useEffect, useRef } from "react";
import Phone from "../../assets/spotlight.png";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import LOGO from "../../assets/LOGO.png";

function Spotlight() {
    useEffect(() => {
        //username.current.focus();
    }, []);
    const username = useRef(null);
    return (
        <>
            <Helmet>
                <Helmet>
                    <title>LBank App</title>
                    <link
                        rel="icon"
                        type="image/png"
                        href={LOGO}
                        sizes="16x16"
                    />
                </Helmet>
            </Helmet>
            <MainContainer>
                <WrapperBox className="wrapper">
                    <MainDiv>
                        <DivLeft>
                            <Fade left duration={1800}>
                                <OnePara>Financial Platform No.1</OnePara>
                                <Headline>
                                    Best & Trusted <br /> Digital Bank
                                </Headline>
                                <TwoPara>
                                    By using this Langkut can make it easier for
                                    you to control or in money transaction
                                </TwoPara>
                                <UserDiv>
                                    <Spanned>Type Your username</Spanned>
                                    <User
                                        type="text"
                                        name="username"
                                        maxLength={23}
                                        ref={username}
                                    />
                                    <Start>Get Started</Start>
                                </UserDiv>
                            </Fade>
                            <DivBottom>
                                <BottomImg>
                                    <img
                                        className="image"
                                        src={
                                            require("../../assets/stripe.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </BottomImg>
                                <BottomImg>
                                    <img
                                        className="image"
                                        src={
                                            require("../../assets/bitpay.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </BottomImg>
                                <BottomImg>
                                    <img
                                        className="image"
                                        src={
                                            require("../../assets/affrim.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </BottomImg>

                                <BottomImg>
                                    <img
                                        className="image"
                                        src={
                                            require("../../assets/visa.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </BottomImg>
                                <BottomImg>
                                    <img
                                        className="image"
                                        src={
                                            require("../../assets/paypal.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </BottomImg>
                            </DivBottom>
                        </DivLeft>
                        <DivRight>
                            <ImageContainer>
                                <Fade bottom duration={1800}>
                                    <img
                                        className="image"
                                        src={Phone}
                                        alt="logo"
                                    />
                                </Fade>
                            </ImageContainer>
                        </DivRight>
                    </MainDiv>
                </WrapperBox>
            </MainContainer>
        </>
    );
}
const DivBottom = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const BottomImg = styled.span`
    display: inline-block;
    width: 81px;
`;
const ImageContainer = styled.div`
    width: 70%;
`;
const MainContainer = styled.section`
    padding-top: 82px;
    width: 100%;
    overflow-y: hidden;
`;
const WrapperBox = styled.div``;
const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DivLeft = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const DivRight = styled.div`
    display: flex;
    justify-content: end;
`;
const UserDiv = styled.div`
    margin-top: 21px;
    position: relative;
`;
const Spanned = styled.div`
    position: absolute;
    z-index: 10000;
    left: 7px;
`;
const User = styled.input`
    width: 50%;
    padding: 30px 10px 10px 10px;
    background-color: #f5f5f5;
    color: #000;
    border: none;
    outline: none;
`;
const Start = styled.button`
    position: absolute;
    left: 193px;
    top: 8px;
    padding: 11px;
    background-color: #1f6bff;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
`;
const OnePara = styled.p`
    color: #fd9b54;
    margin-bottom: 10px;
    font-size: 25px;
`;
const Headline = styled.h1`
    margin-bottom: 24px;
    font-size: 81px;
`;
const TwoPara = styled.p``;

export default Spotlight;
