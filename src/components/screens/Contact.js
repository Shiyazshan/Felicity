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
                                Lorem Ipsum has been the industry's standard dummy text ever been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type
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

`;

const Wrapper = styled.div`
    
`;
const ContactUs = styled.div`
    
`;
const ContactH1 = styled.div`
    
`;
const ContactH2 = styled.div`
    
`;
const Contactpara = styled.div`

`;

const ContactRight = styled.div`
    
`;
const ContactLeft = styled.div`
    
`;
const ContactForm = styled.div`
    
`;
const FormButton = styled.div`
    
`;
const ContactInput = styled.div`
    
`;
const ContactTextarea = styled.div`

`;

const FooterHead = styled.div`
    
`;
const Footer = styled.div`
    
`;
