import React from 'react'
import styled from 'styled-components'


export default function Contact() {
   
    return (
        <>
            <Contacts>
                <Wrapper>
                    <ContactUs>
                        <ContactLeft>
                            <ContactH1>
                                Contact Us
                            </ContactH1>
                            <ContactH2>
                                Free  download Landing page Felicity Hotel
                            </ContactH2>
                            <Contactpara>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's  when an unknown printer took a galley of type
                            </Contactpara>
                        </ContactLeft>
                        <ContactRight>
                            <ContactForm>
                                <ContactInput type="text" placeholder="Full Name" />
                                <ContactInput type="email" placeholder="Email" />
                                <ContactInput type="number" placeholder="Phone Number" />
                                <ContactTextarea rows="4" cols="50" placeholder="Message" />
                                <FormButton type="submit" >Send</FormButton>
                            </ContactForm>
                        </ContactRight>
                    </ContactUs>
                </Wrapper>
            </Contacts>
            <Footer>
                <FooterHead>
                    Copyright 2019 All Right Reserved By Free Html Template
                </FooterHead>
            </Footer>
        </>
    )
}
const Contacts = styled.div`
    background: #242423;
    padding: 8% 0 6%;
    color: #fff;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1180px;
`;
const ContactUs = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 640px){
        flex-wrap: wrap;
    }

`;
const ContactH1 = styled.div`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    @media all and (max-width: 980px){
        font-size: 40px;
    }
    @media all and (max-width: 640px){
        text-align: center;
    }
    @media all and (max-width: 360px){
        font-size: 32px;
    }

`;
const ContactH2 = styled.div`
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
    width: 46%;
    @media all and (max-width: 980px){
        width: 49%;
        font-size: 22px;
    }
    @media all and (max-width:768px){
        width: 56%;
    }
    @media all and (max-width:640px){
        width: 100%;
        text-align: center;
    }
    @media all and (max-width:480px){
        font-size: 18px;
    }
    @media all and (max-width:360px){
        font-size: 14px;
    }
  `;
const Contactpara = styled.div`
    width: 100%;
    @media all and (max-width:640px){
        text-align: center;
    }
    @media all and (max-width:480px){
        font-size: 14px;
    }
`;

const ContactRight = styled.div`
    position: relative;
    width: 60%;
    @media all and (max-width:768px){
        width: 100%;
    }
    @media all and (max-width:640px){
        width: 60%;
        margin: 0 auto;
    }
    @media all and (max-width: 360px){
        width: 80%;
    }
`;
const ContactLeft = styled.div`
    margin-right: 20px;
    @media all and (max-width:640px){
        margin-bottom: 30px;
    }
`;
const ContactForm = styled.form`
    background: #d75430;
    padding: 45px 22px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 80%;
    position: absolute;
    top: -362px;
    @media all and (max-width: 980px){
        width: 90%;
        top: -329px;
        padding: 17px 22px;
    }
    @media all and (max-width:640px){
        position: unset;
    }
    @media all and (max-width:360px){
        width: 86%;
    }
    
`;
const FormButton = styled.button`
    background: #000;
    color: #fff;
    padding: 8px 26px;
    border-radius: 8px;
    border: none;
    margin: 0 auto;
    width: 30%;
    transition: ease-in-out 0.5s;
    &:hover{
        background: #E9C649;
        border-radius: 20px;
        transition: 0.4s ease-in-out;
        color: #fff;
    }
    @media all and (max-width: 980px){
        width: 36%;
    }
    @media all and(max-width:360px){
        width: 58px;
    }
`;
const ContactInput = styled.input`
    
    border: none;
    padding: 14px 10px;
    border-radius: 8px;
    margin-bottom: 10px;
`;
const ContactTextarea = styled.textarea`
    resize: none;
    border-radius: 8px;
    margin-bottom: 30px;
    padding: 15px;
`;

const FooterHead = styled.h3`
    text-align: center ;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
`;
const Footer = styled.div`
    padding: 10px;
    
`;
