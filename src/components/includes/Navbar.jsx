import React, { useState } from "react";
import styled from "styled-components";
import LOGO from "../../assets/LOGO.png";
import Login from "../includes/Login";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Navbar() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <MainContainer>
                <WrapperBox className="wrapper">
                    <MainDiv>
                        <TopContainer>
                            <img className="image" src={LOGO} alt="logo" />
                        </TopContainer>
                        <MiddleContainer>
                            <Button href="#">Home</Button>
                            <Button href="#">Service</Button>
                            <Button href="#" className="last">
                                Feature
                            </Button>
                        </MiddleContainer>
                        <BottomContainer>
                            <Button href="#" className="register">
                                Register
                            </Button>
                            <BtnLinDiv>
                                <Button
                                    href="#"
                                    className="final"
                                    onClick={() => {
                                        setModal(!modal);
                                    }}
                                >
                                    Login now
                                    <RightArrow className="right">
                                        <IoArrowForwardCircleOutline />
                                    </RightArrow>
                                </Button>
                            </BtnLinDiv>
                        </BottomContainer>
                    </MainDiv>
                </WrapperBox>
            </MainContainer>
            {modal && <Login modal={modal} setModal={setModal} />}
        </>
    );
}
const RightArrow = styled.span`
    margin-left: 2px;
    font-size: 20px;
    display: flex;
    /* display: none; */
    width: 0px;
    transition: all 0.3s ease;
`;
const MainContainer = styled.section`
    padding: 10px 0;
    background-color: #fff;
    width: 100%;
    position: fixed;
    z-index: 10000;
`;
const WrapperBox = styled.div``;
const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const BtnLinDiv = styled.div`
    width: 140px;
    transition: all 0.9s ease-in;
`;
const Button = styled.button`
    padding: 9px;
    border: none;
    margin-right: 6px;
    background: none;
    cursor: pointer;
    font-size: 18px;
    &.last {
        margin-right: 0;
    }
    &.final {
        margin-right: 0;
        background-color: #1f6bff;
        color: #fff;
        font-weight: 500;
        font-size: 12px;
        padding: 9px 16px;
        border-radius: 9px;
        font-size: 17px;
        display: flex;
        align-items: center;
        :hover {
            border-bottom: none;
        }
        &:hover .right {
            display: flex;
            width: 20px;
        }
    }
    &.register {
        color: #1f6bff;
    }
    :hover {
        border-bottom: 3px solid #000;
    }
`;
const TopContainer = styled.div`
    width: 120px;
`;
const MiddleContainer = styled.div``;
const BottomContainer = styled.div`
    display: flex;
`;
export default Navbar;
