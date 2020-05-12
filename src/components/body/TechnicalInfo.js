import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Container, Content} from '../../lib/Grid';
import {Col} from 'react-flexbox-grid';
import {getWhiteBackground} from '../../lib/helpers';
import {StepsBlock} from './StepsBlock';
import TechnicalInfoBackground from '../../assets/images/technicalInfoBg.png';
import RightChevron from '../../assets/images/rightChevron.png';
import LeftChevron from '../../assets/images/leftChevron.png';
import CheckIcon from '../../assets/images/check.png';

export const TechnicalInfo = ({chosenOptions}) => {
  const [step, setStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(new Set());

  const handleNextStep = () => {
    setCompletedStep((prevState) => {
      const copy = new Set(prevState);
      copy.add(step);
      return copy;
    });
    setStep((prevState) => prevState < 4 ? prevState + 1 : prevState);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState > 1 ? prevState - 1 : prevState);
  };

  return (
    <MarginContainer>
      <Content>
        <PaddingLess xs={11} right="true">
          <Wrapper>
            <ChosenOptionsField>
              <p>chosen<br/><b>options:</b></p>
              {chosenOptions.map((data) => (
                <Option key={data.ID}>
                  <img src={getWhiteBackground(data.background)} alt="icon"/>
                </Option>
              ))}
            </ChosenOptionsField>
            <StepBulletsField>
              <Bullet active={step === 1} complete={completedStep.has(1)}/>
              <Bullet active={step === 2} complete={completedStep.has(2)}/>
              <Bullet active={step === 3} complete={completedStep.has(3)}/>
              <Bullet active={step === 4} complete={completedStep.has(4)}/>
            </StepBulletsField>
            <StepsBlock step={step}/>
          </Wrapper>
        </PaddingLess>
        <PaddingLess xs={1} left="true">
          <StepButtonsField>
            <div>
              <NextStepButton onClick={handleNextStep}/>
              <PreviousStepButton onClick={handlePreviousStep}/>
            </div>
          </StepButtonsField>
        </PaddingLess>
      </Content>
    </MarginContainer>
  );
};

TechnicalInfo.propTypes = {
  chosenOptions: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.number,
  })),
};

const MarginContainer = styled(Container)`
  margin-top: 40px;
`;

const PaddingLess = styled(Col)`
  ${({right}) => right && 'padding-right: 0;'}
  ${({left}) => left && 'padding-left: 0;'} 
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 500px;
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

const StepBulletsField = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 16.67%;
  top: 33px;
  right: 30px;
`;

const Bullet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${({active}) => active ? '#f14921' : '#c9cacb'};
  border-radius: 50%;
  
  ${({complete}) => complete && `
    :before {
      content: '';
      width: 18px;
      height: 18px;
      background: url(${CheckIcon}) no-repeat;
    }
  `}
`;

const StepButtonsField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StepButton = styled.div`
  width: 100%;
  height: 72px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const NextStepButton = styled(StepButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f86019;
  margin-bottom: 15px;
  
  :before {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background: url(${RightChevron}) no-repeat;
    background-size: contain;
  }
`;

const PreviousStepButton = styled(StepButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cbcbcb;
  
  :before {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background: url(${LeftChevron}) no-repeat;
    background-size: contain;
  }
`;
