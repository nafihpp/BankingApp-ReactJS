import React from "react";
import styled from "styled-components";
import First from "../../assets/image1.png";
import Second from "../../assets/frame1.png";
import Third from "../../assets/frame2.png";
import Component1 from "../../assets/Component99.svg";
import Component2 from "../../assets/Component100.svg";
import Component3 from "../../assets/Component101.svg";
import Component4 from "../../assets/Component102.svg";

function Hero() {
    return (
        <>
            <MainContainer>
                <WrapperBox className="wrapper">
                    <Paragraph>Our Product</Paragraph>
                    <HeadLine>Various Kinds of Finance Products</HeadLine>
                    <MainDiv>
                        <LeftContainer>
                            <ImageContainer>
                                <img
                                    src={First}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                        </LeftContainer>
                        <MiddleContainer>
                            <ImageContainer>
                                <img
                                    src={Second}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                            <ImageContainer className="middle">
                                <img
                                    src={Third}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                        </MiddleContainer>
                        <RightContainer>
                            <ImageContainer className="final">
                                <img
                                    src={Component1}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                            <ImageContainer className="final">
                                <img
                                    src={Component2}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                            <ImageContainer className="final">
                                <img
                                    src={Component3}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                            <ImageContainer className="final">
                                <img
                                    src={Component4}
                                    className="image"
                                    alt="first"
                                />
                            </ImageContainer>
                        </RightContainer>
                    </MainDiv>
                </WrapperBox>
            </MainContainer>
        </>
    );
}
const ImageContainer = styled.div`
    width: 60%;
    &.middle {
        margin-top: 10px;
    }
    &.final {
        width: 20%;
    }
`;
const MainContainer = styled.section`
    padding-top: 10px;
`;
const WrapperBox = styled.div``;
const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;
const LeftContainer = styled.div`
    background-color: #eaeff5;
    width: 30%;
    height: 393px;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const MiddleContainer = styled.div`
    background-color: #eaeff5;
    width: 30%;
    height: 393px;
    border-radius: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const RightContainer = styled.div`
    background-color: #eaeff5;
    width: 30%;
    height: 393px;
    border-radius: 21px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const Paragraph = styled.p`
    text-align: center;
    font-size: 42px;
    color: #fd9b54;
    font-weight: 500;
`;
const HeadLine = styled.h1`
    text-align: center;
`;

export default Hero;
