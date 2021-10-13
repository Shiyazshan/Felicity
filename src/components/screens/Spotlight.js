import React from 'react'

export default function Spotlight() {
    return (
            <>
                <Spotlight>
                    <Header>
                        <HeaderLeft>
                            <Logo src="" alt="" />
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
                                        <HeaderAtag>
                                            SIGN IN
                                        </HeaderAtag>
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
                        like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a
                        reader will be distracted by the readable content of a page when looking at its layout.
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
                        </SpotlightForm>
                        <FormButton>
                            <FormAtag>
                                Book Now
                            </FormAtag>
                        </FormButton>
                    </SpotlightDate>
                </Spotlight>

            </>
    )
}

