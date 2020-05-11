import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-flexbox-grid';
import {Container, Content} from '../lib/Grid';
import ChipBackground from '../assets/images/chipBg.jpg';

export const Body = () => (
  <>
    <MainThemeBlock>
      <Content middle="xs">
        <Col xs={4} xsOffset={4}>
          <Title>chip<span>constructor</span></Title>
        </Col>
      </Content>
    </MainThemeBlock>
  </>
);

const MainThemeBlock = styled(Container)`
  height: 130px;
  background: url(${ChipBackground}) no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  color: #fff;
  
  span {
    color: #f14921;
    margin-left: 10px;
  }
  
  :before {
    content: '';
    display: block;
    width: 22px;
    height: 61px;
    margin-right: 8px;
    border: 1px solid #fff;
    border-right: none;
  }
  
  :after {
    position: absolute;
    right: -30px;
    content: '';
    display: block;
    width: 22px;
    height: 61px;
    border: 1px solid #fff;
    border-left: none;
  }
`;
