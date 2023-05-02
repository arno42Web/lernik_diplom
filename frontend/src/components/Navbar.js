import React from 'react'
import { Logo, NavbarContainer } from '../styled/Navbar.styled'
import { Container, FlexContainer, PaddingContainer } from '../styled/Global.styled'

function Navbar() {
  return (
    <NavbarContainer bgColor="rgba(38, 115, 133,0.8)">
            <PaddingContainer top="1.2rem" bottom="1.2rem">
                <Container>
                    <FlexContainer justify="space-between">
                        <Logo>
                            armenia foregin status
                        </Logo>
                    </FlexContainer>
                </Container>
            </PaddingContainer>
        </NavbarContainer>
  )
}

export default Navbar