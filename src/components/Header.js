import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {Container} from '../lib/Container';
import Logo from '../assets/images/logo.png';

export const Header = () => {
  return (
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
  );
};

const HeaderRow = styled(Row)`
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
    font-size: 14px;
    color: #2a2a2b;
    cursor: pointer;
`;
