import React from 'react'
import styled from 'styled-components'
import Logos from "../../assets/images/logo.png"
import banner from "../../assets/images/banner.jpg"

export default function Spotlight() {
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
const SpotlightSection = styled.div`
     background:url(${banner});
     text-align: center;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
`;
const HeaderLeft = styled.div`
    
`;
const Logo = styled.img`
    
`;
const HeaderRight = styled.div`
    
`;
const HeaderUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`;
const HeaderLi = styled.li`
    margin-right: 20px;
`;
const HeaderAtag = styled.a`
    color: #fff;
    
`;
const HeaderAtags = styled.a`
    color: #000;
    
`;
const HeaderButton = styled.button`
    background: #fff;
    border-radius: 20px;
    padding: 8px 18px;
    margin-left: 50px;
    border: none;
`;
const SpotLightHeading = styled.h2`
    color: #fff;
    font-size: 32px;
    width: 43%;
    margin: 0 auto;
    margin-bottom: 30px;
`;
const SpotlightPara = styled.p`
    color: #fff;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 60px;
`;
const SpotlightButton = styled.button`
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    margin-bottom: 80px;
`;

const SpotlightForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SpotlightAtag = styled.a`
    
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
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
    
`;
const InputSubmit = styled.input`
    background: #000;
    color: #fff;
    border: none;
    padding: 8px 26px;
    border-radius: 20px;
`;
const SpotlightDate = styled.div`
    border-radius: 30px 30px 0 0;
    background: #fff;
    padding: 2% 4% 0;
`;


