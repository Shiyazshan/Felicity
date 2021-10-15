import React from 'react'
import styled from 'styled-components'
import AboutIm from "../../assets/images/about_img.jpg"

export default function About() {
    return (
        <>
            <Abouts>
                <Wrapper>
                    <Container>
                        <AboutLeft>
                            <Abouth2>
                                About Our Hotel
                            </Abouth2>
                            <AboutPara>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    , when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries,
                            </AboutPara>
                        </AboutLeft>
                        <AboutRight>
                            <AboutImage>
                                <RightImage src={AboutIm} alt="Image" />
                            </AboutImage>
                        </AboutRight>
                    </Container>
                </Wrapper>
            </Abouts>
        </>
    )
}
const Abouts = styled.div`
    background: #353e4e;
    color: #fff;
    padding: 2% 0;
    @media all and (max-width: 640px){
        padding: 4%;
    }
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1180px;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Abouth2 = styled.div`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    @media all and (max-width: 640px){
        text-align: center;
    }
`;
const AboutLeft = styled.div`
    
`;
const AboutRight = styled.div`
    width: 100%;
    @media all and (max-width: 768px){
        display: none;
    }
`;
const AboutPara = styled.div`
    width: 90%;
    @media all and (max-width:640px){
        width: 100%;
        text-align: center;
    }
`;
const AboutImage = styled.div`
    
`;
const RightImage = styled.img`
    display: block;
    width: 100%;
`;