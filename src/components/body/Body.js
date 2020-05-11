import React, {useState} from 'react';
import styled from 'styled-components';
import {Col} from 'react-flexbox-grid';
import {Container, Content} from '../../lib/Grid';
import {Slider} from './Slider';
import ChipBackground from '../../assets/images/chipBg.jpg';

export const Body = () => {
  // Only name and ID and background image path of the items
  const [sliderItems, setSliderItems] = useState([]);
  // Indexes of the slider items
  const [chosenItems, setChosenItems] = useState(new Set());

  const handleItemToggle = (ID) => {
    setChosenItems((prevState) => {
      const newState = new Set(prevState);

      if (newState.has(ID)) {
        newState.delete(ID);
      } else {
        newState.add(ID);
      }

      return newState;
    });
  };

  const handleSliderItemAdd = (data) => {
    setSliderItems((prevState) => [...prevState, data]);
  };

  return (
    <Wrapper>
      <MainThemeBlock>
        <Content middle="xs">
          <Col xs={4} xsOffset={4}>
            <Title>chip<span>constructor</span></Title>
          </Col>
        </Content>
      </MainThemeBlock>
      <Slider
        items={sliderItems}
        chosenItems={chosenItems}
        onCreated={handleSliderItemAdd}
        onSelected={handleItemToggle}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f6f6f6;
`;

const MainThemeBlock = styled(Container)`
  height: 130px;
  background: url(${ChipBackground}) no-repeat;
  background-size: cover;
  margin-bottom: 60px;
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
