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
                                <SectionRight>
                                    <SectionH2>
                                        Our Best Breakfast
                                    </SectionH2>
                                    <SectionPara>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        , when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries,
                                    </SectionPara>
                                    <SectionButton>
                                        <SectionAtag>
                                            Read More
                                        </SectionAtag>
                                    </SectionButton>
                                </SectionRight>
                            </SectionItem>
                        </SectionItems>
                    </Wrapper>
                </Feature>
                <About>
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
                                    <RightImage src="" alt="Image" />
                                </AboutImage>
                            </AboutRight>
                        </Container>
                    </Wrapper>
                </About>
                <Testimonial>
                    <Wrapper>
                        <TestimonialSection>
                            <TestH2>
                                Testimonial
                            </TestH2>
                            <Slider>
                                <Slides>
                                    <SlideTop>
                                        <SlideLeft>
                                            Mark jonson
                                        </SlideLeft>
                                        <SlideRight>
                                            <TestIcon>
                                                <Icon src="" alt="Icon" />
                                            </TestIcon>
                                        </SlideRight>
                                    </SlideTop>
                                    <SlideBottom>
                                        <SlidePara>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            , when an unknown printer took a galley of type
                                        </SlidePara>
                                    </SlideBottom>
                                </Slides>

                                <Slides>
                                    <SlideTop>
                                        <SlideLeft>
                                            Mark jonson
                                        </SlideLeft>
                                        <SlideRight>
                                            <TestIcon>
                                                <Icon src="" alt="Icon" />
                                            </TestIcon>
                                        </SlideRight>
                                    </SlideTop>
                                    <SlideBottom>
                                        <SlidePara>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            , when an unknown printer took a galley of type
                                        </SlidePara>
                                    </SlideBottom>
                                </Slides>
                            </Slider>
                        </TestimonialSection>
                    </Wrapper>
                </Testimonial>
            </>
    )
}

const Feature = styled.div`
    padding: 4% 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const SectionItems = styled.div`
    
`;
const SectionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;
const SectionH2 = styled.div`
    font-size: 40px;
    width: 50%;
    margin-bottom: 50px;
    text-align: right;
`;
const B =styled.b`
    font-weight: 700;

`;
const SectionPara = styled.div`
    color: #818181;
    width: 80%;
    margin-bottom: 30px;
    text-align: right;
`;
const SectionButton = styled.div`
    background: #000;
    padding: 12px 30px;
    display: inline-block;
    color: #fff;
    border-radius: 8px;
`;
const SectionAtag = styled.div`
    
`;
const SectionLeft = styled.div`
    width: 100%;
    text-align: left;
`;
const SectionRight = styled.div`
    text-align: right;
`;
const Image1 = styled.div`
    
`;
const Img1 = styled.img`
    margin-bottom: 22px;
`;
const Img2 = styled.img`
    margin-right: 22px;
`;
const Img3 = styled.img`
    
`;
const Image2 = styled.div`
    width: 80%;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const About = styled.div`
    
`;
const Container = styled.div`

`;
const Abouth2 = styled.div`

`;
const AboutLeft = styled.div`
    
`;
const AboutRight = styled.div`
    
`;
const AboutPara = styled.div`
    
`;
const AboutImage = styled.div`
    
`;
const RightImage = styled.div`
    
`;
const Testimonial = styled.div`

`;
const TestimonialSection = styled.div`
    
`;
const TestH2 = styled.div`
    
`;
const Slider = styled.div`
    
`;
const Slides = styled.div`
    
`;
const SlideBottom = styled.div`
    
`;
const SlideTop = styled.div`
    
`;
const SlideLeft = styled.div`
    
`;
const SlideRight = styled.div`
    
`;
const TestIcon = styled.div`
    
`;
const Icon = styled.img`
    
`;
const SlidePara = styled.div`
    
`;

