import React from 'react';
import {Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {Container, Content} from '../lib/Container';
import Logo from '../assets/images/logo.png';

export const Header = () => (
  <>
    <Container>
      <HeaderRow middle="xs">
        <Col xs={3}>
          <LogoField>
            <img src={Logo} alt="Logo" />
            <span>framework</span>
          </LogoField>
        </Col>
        <Col xs={1} xsOffset={8}>
          <SignInButton>Sign in</SignInButton>
        </Col>
      </HeaderRow>
    </Container>
    <NavContainer>
      <Content middle="xs">
        <Col xs={8} xsOffset={2}>
          <NavLinksBlock>
            <p>constructor</p>
            <p>help</p>
            <p>users panels</p>
            <p>faq</p>
            <p>about</p>
            <p>blog</p>
          </NavLinksBlock>
        </Col>
        <Col xs={1} xsOffset={1}>
          Icons
        </Col>
      </Content>
    </NavContainer>
  </>
);

const HeaderRow = styled(Content)`
  height: 100px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;

const LogoField = styled.div`
  display: flex;
  align-items: center;
  
  span {
    font-size: 12px;
    color: #6d6d6d;
    text-transform: uppercase;
    margin-left: 8px;
  }
`;

const SignInButton = styled.p`
  text-align: center;
  font-size: 14px;
  color: #2a2a2b;
  cursor: pointer;
`;

const NavContainer = styled(Container)`
  background: #2a2a2b;
  height: 75px;
`;

const NavLinksBlock = styled.div`
  display: flex;
  justify-content: space-around;
  
  p {
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
  }
`;
