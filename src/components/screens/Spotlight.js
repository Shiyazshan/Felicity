import React, { useState } from 'react';
import styled from 'styled-components'
import Logos from "../../assets/images/logo.png"
import banner from "../../assets/images/banner.jpg"
import MenuIcon from "../../assets/images/menu_icon.png"
import CloseIcon from '../../assets/images/close.png';


export default function Spotlight() {
    const [isActive, setActive] = useState(false);
    const toggle = () =>{
        setActive(!isActive);
    }
    return (
            <>
                <SpotlightSection>
                    <Wrapper>
                        <Header>
                            <HeaderLeft>
                                <Logo src={Logos} alt="" />
                            </HeaderLeft>
                            <HeaderRight>
                                <HeaderUl>
                                    <HeaderLi>
                                        <HeaderAtag>
                                            ABOUT
                                        </HeaderAtag>
                                    </HeaderLi>
                                    <HeaderLi>
                                        <HeaderAtag>
                                            CONTACT US
                                        </HeaderAtag>
                                    </HeaderLi>
                                    <HeaderLi>
                                        <HeaderButton>
                                            <HeaderAtags>
                                                SIGN IN
                                            </HeaderAtags>
                                        </HeaderButton>
                                    </HeaderLi>
                                </HeaderUl>
                                <MenuButton isActive={isActive}>
                                    <Container src={MenuIcon} alt="Hamburger Button" onClick={toggle} />
                                </MenuButton>
                                <BurgerDiv isActive={isActive}>
                                    <CloseButton  onClick={toggle}>
                                        <Container src={CloseIcon} alt="Close Button" />
                                    </CloseButton>
                                    <MenuUl>
                                        <MenuLi>About</MenuLi>
                                        <MenuLi>Contact Us</MenuLi>
                                        <MenuButtonLi>Sign In</MenuButtonLi>
                                    </MenuUl>
                                </BurgerDiv>
                                <Overlay onClick={toggle} isActive={isActive}>
                                    </Overlay>
                            </HeaderRight>
                        </Header>
                        <SpotLightHeading>
                            WELCOME TO HOTEL FELICITY LANDING PAGE 2019
                        </SpotLightHeading>
                        <SpotlightPara>
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long.
                        </SpotlightPara>
                        <SpotlightButton>
                            <SpotlightAtag>
                                Read More
                            </SpotlightAtag>
                        </SpotlightButton>
                        <SpotlightDate>
                            <SpotlightForm>
                                <Wrap>
                                    <Label>
                                        ARRIVAL DATE
                                    </Label>
                                    <Input type="date" />
                                </Wrap>
                                <Wrap>
                                    <Label>
                                        DEPARTURE DATE
                                    </Label>
                                    <Input type="date" />
                                </Wrap>
                                <Wrap>
                                    <Label>
                                        PERSON
                                    </Label>
                                    <Input type="number" placeholder="2" />
                                </Wrap>
                                <Wrap>
                                    <InputSubmit type="submit" value="Book Now" />
                                </Wrap>
                            </SpotlightForm>
                        </SpotlightDate>
                    </Wrapper>
                </SpotlightSection>

            </>
    )
}
const MenuButton = styled.div`
    display: none;
    @media all and (max-width: 768px){
        display: block;
        opacity: ${({isActive}) => (isActive ? '0' : '1')};
        transition: .3s ease-in-out;
    }
`;
const Container = styled.img``;
const BurgerDiv = styled.div`
    position: fixed;
    top:0;
    transition: 0.3s ease-in-out;
    right: ${({isActive}) => (isActive ? '0' : '-1000px')};
    z-index: 2;
`;
const CloseButton = styled.div`
    width: 30px;
    @media all and (max-width: 768px){
        z-index: 3;
        position: absolute;
        top: 38px;
        right: 19px;
    }
`;
const MenuUl = styled.ul`
    background: #0000008f;
    color: #fff;
    height: 100vh;
    width: 200px;
    padding: 100px 0;
    text-align: center;
    border-radius: 20px 0;
    list-style: none;
`;
const MenuLi = styled.li`
    margin-bottom: 20px;
`;
const MenuButtonLi = styled.li`
    background: #f1ca4d;
    padding: 12px;
    width: 44%;
    margin: 0 auto;
    border-radius: 30px;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #d96112;
        color: #fff;
        transition: 0.3s ease;
    }
`;
const Overlay = styled.div`
 @media all and (max-width: 768px){
     background: rgba(0,0,0,0.6);
     position: absolute;
     top:0;
     left: 0;
     opacity: ${({isActive}) => (isActive ? '1' : '0')};
     width: 100vw;
     height: 100vh;
     transition: 0.3s ease-in-out;
     z-index: ${({isActive}) => (isActive ? '1' : '-5')};
    }
`;
const SpotlightSection = styled.div`
     background:url(${banner});
     text-align: center;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1180px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
`;
const HeaderLeft = styled.div`
    @media all and (max-width: 768px){
        width:16%
    }
    @media all and (max-width: 480px){
        width:20%
    }

`;
const Logo = styled.img`
    
`;
const HeaderRight = styled.div`
    
`;
const HeaderUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    @media all and (max-width:768px){
        display: none;
    }
    @media all and (max-width:480px){
        display: none;
    }
`;
const HeaderLi = styled.li`
    margin-right: 20px;
`;
const HeaderAtag = styled.a`
    color: #fff;
    transition: 0.5s ease-in-out;
    &:hover{
        color: #000;
        transition: 0.5s ease-in-out;
        cursor: pointer;
    }
    
`;
const HeaderAtags = styled.a`
   
`;
const HeaderButton = styled.button`
    background: #fff;
    border-radius: 20px;
    padding: 8px 18px;
    margin-left: 50px;
    border: none;
    transition: 0.5s ease-in-out;
    color: #000;
    &:hover {
        background: #E9C649;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        color: #fff;
    }
`;
const SpotLightHeading = styled.h2`
    color: #fff;
    font-size: 32px;
    width: 43%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding-top: 8%;
    @media all and (max-width: 1080px) {
        width: 60%;
    }
    @media all and (max-width: 768px){
        width: 75%;        
    }
    @media all and (max-width: 640px){
        font-size: 26px;
    }  
    @media all and (max-width: 360px){
        font-size: 17px;
    }  
`;
const SpotlightPara = styled.p`
    color: #fff;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 60px;
    @media all and (max-width:360px){
        font-size: 14px;
        width: 100%;
        margin-bottom: 30px;
    }
`;
const SpotlightButton = styled.button`
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    margin-bottom: 120px;
    color: #000;
    transition: 0.5s ease-in-out;
    &:hover{
        background: #E9C649;
        border-radius: 20px;
        transition: 0.4s ease-in-out;
        color: #fff;
    }
    @media all and (max-width:640px){
        margin-bottom: 50px;
    }
`;

const SpotlightForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px){
        flex-wrap: wrap;
        justify-content: center;
    }
    
`;

const SpotlightAtag = styled.a`
    
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    @media all and (max-width: 480px){
        width: 62%;
        margin-bottom: 20px;
    }
`;

const Label = styled.label`
    margin-bottom: 10px;
    font-weight: 700;
    color: #808080;
`;

const Input = styled.input`
    background: #eeeeee;
    border: none;
    padding: 8px 22px;
    border-radius: 20px;
    @media all and (max-width: 768px){
        margin: 0 10px 15px;
    }
    @media all and (max-width: 640px){
        width: 86%;
        margin: 0;
    }
    
    
`;
const InputSubmit = styled.input`
    background: #000;
    color: #fff;
    border: none;
    padding: 8px 26px;
    border-radius: 8px;
    transition: ease-in-out 0.5s;
    &:hover{
        background: #E9C649;
        border-radius: 20px;
        transition: 0.4s ease-in-out;
        color: #fff;
    }
    @media all and (max-width:768px){
        margin: 0 auto;
    }
`;
const SpotlightDate = styled.div`
    border-radius: 30px 30px 0 0;
    background: #fff;
    padding: 2% 4% 0;
    @media all and (max-width:480px){
        padding: 7% 4%;
    }
    @media all and (max-width:480px){
        width: 80%;
        margin: 0 auto;
    }
`;


