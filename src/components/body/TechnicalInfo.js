import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Container, Content} from '../../lib/Grid';
import {Col} from 'react-flexbox-grid';
import TechnicalInfoBackground from '../../assets/images/technicalInfoBg.png';
import {getWhiteBackground} from '../../lib/helpers';

export const TechnicalInfo = ({chosenOptions}) => {
  return (
    <Container>
      <Content>
        <Col xs={12}>
          <Wrapper>
            <ChosenOptionsField>
              <p>chosen<br/><b>options:</b></p>
              {chosenOptions.map((data) => (
                <Option key={data.ID}>
                  <img src={getWhiteBackground(data.background)} alt="icon"/>
                </Option>
              ))}
            </ChosenOptionsField>
          </Wrapper>
        </Col>
      </Content>
    </Container>
  );
};

TechnicalInfo.propTypes = {
  chosenOptions: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.number,
  })),
};

const Wrapper = styled.div`
  display: flex;
  background: url(${TechnicalInfoBackground}) no-repeat;
  background-size: cover;
`;

const ChosenOptionsField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 40px 40px;
  box-shadow: 7px 0 25px 0 rgba(0, 0, 0, 0.07);
  
  p {
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    margin-bottom: 40px;
  }
  
  > div:last-child {
    margin-bottom: 0;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f54f23;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.09);
  margin-bottom: 20px;
`;
