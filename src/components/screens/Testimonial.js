import React from 'react'
import styled from 'styled-components'
import tes from "../../assets/images/tes_bg.jpg"
import Icon1 from "../../assets/images/te1.png"
import Slider from "react-slick";


export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                
              }
            }
        ]
    
      };
      let renderItems =() => (
        <Slider {...settings}>
            <Slides>
                <SlideTop>
                    <SlideLeft>
                        Mark jonson
                    </SlideLeft>
                    <SlideRight>
                        <TestIcon>
                            <Icon src={Icon1}  alt="Icon" />
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
                        Abraham Kureshi
                    </SlideLeft>
                    <SlideRight>
                        <TestIcon>
                            <Icon src={Icon1}  alt="Icon" />
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
                       Antony Wilson
                    </SlideLeft>
                    <SlideRight>
                        <TestIcon>
                            <Icon src={Icon1}  alt="Icon" />
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
                        Mohammed Shiyas
                    </SlideLeft>
                    <SlideRight>
                        <TestIcon>
                            <Icon src={Icon1}  alt="Icon" />
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
                        Vaishak .C
                    </SlideLeft>
                    <SlideRight>
                        <TestIcon>
                            <Icon src={Icon1} alt="Icon" />
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
      )
    return (
        <>
            <Testimonials>
                <Wrapper>
                    <TestimonialSection>
                        <TestH2>
                            Testimonial
                        </TestH2>
                        {renderItems()}
                    </TestimonialSection>
                </Wrapper>
            </Testimonials>
        </>
    )
}
const Testimonials = styled.div`
    background:url(${tes});
    padding: 2% 0 16%;
    @media all and (max-width: 768px){
        padding: 2% 0 28%;
    }
`;
const Wrapper = styled.div`
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
`;
const TestimonialSection = styled.div`
    
`;
const TestH2 = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
`;
const Sliders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Slides = styled.div`
    background: #d75430;
    padding: 20px;
    color: #fff;
    width: 90% !important;
    margin-right: 50px;
`;
const SlideBottom = styled.div`
    
`;
const SlideTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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

