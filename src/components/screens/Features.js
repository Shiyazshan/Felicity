import React, { Component } from 'react'
import styled from 'styled-components'
import Imge1 from "../../assets/images/img1.jpg"
import Imge2 from "../../assets/images/img2.jpg"
import Imge3 from "../../assets/images/img3.jpg"
import Imge4 from "../../assets/images/img4.jpg"
export default function Features() {
    return (
            <>
                <Feature>
                    <Wrapper>
                        <SectionItems>
                            <SectionItem>
                                <SectionLeft>
                                    <SectionH2>
                                        Choose The Perfect <B>Accomodation</B>
                                    </SectionH2>
                                    <SectionPara>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        , when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                    </SectionPara>
                                    <SectionButton>
                                        <SectionAtag>
                                            See More
                                        </SectionAtag>
                                    </SectionButton>
                                </SectionLeft>
                                <SectionRight>
                                    <Image1>
                                        <Img1 src={Imge1} alt="Image" />
                                        <Img2 src={Imge2} alt="Image" />
                                        <Img3 src={Imge3} alt="Image" />
                                    </Image1>
                                </SectionRight>
                            </SectionItem>

                            <SectionItem>
                                <SectionLeft>
                                    <Image2>
                                        <Img src={Imge4} alt="Image" />
                                    </Image2>
                                </SectionLeft>
                                <SectionRights>
                                    <Section2H2>
                                        Our Best <Bo>Breakfast</Bo>
                                    </Section2H2>
                                    <SectionPara1>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        , when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                    </SectionPara1>
                                    <SectionButton>
                                        <SectionAtag>
                                            Read More
                                        </SectionAtag>
                                    </SectionButton>
                                </SectionRights>
                            </SectionItem>
                        </SectionItems>
                    </Wrapper>
                </Feature>
               
                
            </>
    )
}

const Feature = styled.div`
    padding: 4% 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1180px;
`;
const SectionItems = styled.div`
    
`;
const SectionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;
const SectionH2 = styled.div`
    font-size: 40px;
    width: 56%;
    margin-bottom: 50px;
    text-align: left;
    @media all and (max-width: 980px){
        width: 63%;
    }
    @media all and (max-width: 480px){
        width: 100%;
        font-size: 30px;
        text-align: center;
    }
`;
const Section2H2 = styled.div`
    font-size: 40px;
    width: 50%;
    margin-bottom: 50px;
    text-align: right;
    margin-left: auto;
    @media all and (max-width: 640px){
        text-align: center;
        width: 100%;
    }
   
`;
const B =styled.b`
    font-weight: 700;

`;
const SectionPara = styled.div`
    color: #818181;
    width: 80%;
    margin-bottom: 30px;
    text-align: left;
    @media all and (max-width: 640px){
        width: 100%;
    }
    @media all and (max-width: 480px){
        width: 100%;
        text-align: center;
    }
`;
const SectionPara1 = styled.div`
    color: #818181;
    width: 80%;
    margin-bottom: 30px;
    margin-left: auto;
    @media all and (max-width: 640px){
        text-align: center;
        width: 100%;
    }
`;
const SectionButton = styled.div`
    background: #000;
    padding: 12px 30px;
    display: inline-block;
    color: #fff;
    border-radius: 8px;
    transition: ease-in-out 0.5s;
    &:hover{
        background: #E9C649;
        border-radius: 20px;
        transition: 0.4s ease-in-out;
        color: #fff;
        cursor: pointer;
    }
`;
const SectionAtag = styled.div`
    
`;
const SectionLeft = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 5%;
    width: 50%;
    @media all and (max-width:768px){
        width: 100%;
    }
    @media all and (max-width:480px){
        text-align: center;
    }
`;
const SectionRight = styled.div`
    width: 50%;
    @media all and (max-width:768px){
        width: 100%;
        margin-top: 20px;
    }
    
`;
const SectionRights = styled.div`
    text-align: right;
    padding-top: 8%;
    width: 50%;
    @media all and (max-width:768px){
        width: 100%;
        margin-top: 20px;
    }
    @media all and (max-width: 640px){
        text-align: center;
    }
    @media all and (max-width: 480px){
        display:none;
    }
    
`;
const Image1 = styled.div`
    display: grid;
    grid-gap: 20px;
`;
const Bo = styled.b`
    font-weight: 700;
`;
const Img1 = styled.img`
    grid-column: 1/span 2;
`;
const Img2 = styled.img`
    grid-column:  1;
    grid-row: 2;
`;
const Img3 = styled.img`
    grid-column: 2;
    grid-row: 2;
`;
const Image2 = styled.div`
    width: 80%;
    @media all and (max-width:768px){
        width: 100%;
    }
    @media all and (max-width:640px){
        display: none;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;

