import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';
import {Modal} from '../../lib/Modal';
import {ConnectionItem} from './ConnectionItem';
import Item from '../../assets/images/item.png';
import LogoMBus from '../../assets/images/logo-MBus.png';
import LogoWifi from '../../assets/images/logo-Wifi.png';
import LogoXBee from '../../assets/images/logo-XBee.png';
import LogoZWave from '../../assets/images/logo-ZWave.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export const StepsBlock = ({step, onSubmit}) => {
  const [distance, setDistance] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleOrderClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDistanceChange = (event) => {
    setDistance(+event.target.value);
  };

  const handleConnectionClick = (index) => {
    setSelectedItem(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Wrapper>
      {step === 3 && (
        <StepBlock>
          <DescriptionBlock>
            <OrderBlock>
              <Title>White label W-394900 XP</Title>
              <OrderButton onClick={handleOrderClick}>order now</OrderButton>
            </OrderBlock>
            <p>
              <b>
                  Nam nec tellus a odio tincidunt auctor a ornare odio.
                  Sed non  mauris vitae erat consequat auctor eu in elit.
                  Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per i
              </b>
            </p>
            <p>
                nceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit.
                Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
                Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
                quam, ut aliquam massa nisl quis neque. Suspendisse in
            </p>
            <img src={Item} alt="item"/>
            <LiveViewText><span>live</span><br/>view</LiveViewText>
          </DescriptionBlock>
          <Form onSubmit={handleSubmit}>
            <DistanceLabel htmlfor="input-distance">
              Transmission<br/>
              <span>Distance</span>
            </DistanceLabel>
            <DistanceBlock>
              <DistancePlaceholderBlock>
                <Placeholder>
                  choose <span>distance</span>
                </Placeholder>
                <DistanceInfoBlock>
                  <CurrentDistanceText>
                    current<br/>
                    distance
                  </CurrentDistanceText>
                  <Separator/>
                  <DistanceInfo>
                    <span>{distance}</span>
                    m
                  </DistanceInfo>
                </DistanceInfoBlock>
              </DistancePlaceholderBlock>
              <DistanceInput
                id="input-distance"
                type="range"
                min="0"
                max="50"
                value={distance}
                onChange={handleDistanceChange}
              />
            </DistanceBlock>
            <ConnectionBlock>
              <Placeholder>
                choose <span>type of connection</span>
              </Placeholder>
              <ConnectionsField>
                <ConnectionItem
                  logo={LogoXBee}
                  index={1}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoZWave}
                  index={2}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoXBee}
                  index={3}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoZWave}
                  index={4}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoWifi}
                  index={5}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoMBus}
                  index={6}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoWifi}
                  index={7}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
                <ConnectionItem
                  logo={LogoMBus}
                  index={8}
                  selectedIndex={selectedItem}
                  onSelected={handleConnectionClick}
                />
              </ConnectionsField>
            </ConnectionBlock>
            <ButtonField>
              <NextStepButton>next step</NextStepButton>
            </ButtonField>
          </Form>
          <Modal visible={showModal}>
            <OrderForm>
              <Cross icon={faTimes} onClick={handleCloseModal}/>
              <h1>order form</h1>
            </OrderForm>
          </Modal>
        </StepBlock>
      )}
    </Wrapper>
  );
};

StepsBlock.propTypes = {
  step: PropsTypes.number.isRequired,
  onSubmit: PropsTypes.func.isRequired,
};

const Wrapper = styled.div`
  margin-left: 40px;
  width: 100%;
`;

const StepBlock = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

const DescriptionBlock = styled.div`
  position: relative;
  width: 53%;
  
  p {
    color: #fff;
    max-width: 60%;
    font-size: 14px;
  }
  
  img {
    margin-top: 25px;
  }
`;

const OrderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  flex-basis: 35%;
`;

const OrderButton = styled.div`
  border: 1px solid #fff;
  padding: 15px 45px;
  text-transform: uppercase;
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const LiveViewText = styled.div`
  position: absolute;
  bottom: 0;
  line-height: 27px;
  font-weight: bold;
  font-size: 29px;
  color: #fff;
  text-transform: uppercase;
  
  span {
    font-size: 36px;
  }
`;

const Form = styled.form`
  margin-top: 130px;
  margin-left: 50px;
  padding-right: 47px;
`;

const DistanceLabel = styled.label`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: #2a2a2b;
  
  span {
    color: #f75f19;
  }
`;

const DistanceBlock = styled.div`
  margin-top: 60px;
`;

const DistancePlaceholderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Placeholder = styled.p`
  font-size: 16px;
  color: #2a2a2b;
  text-transform: uppercase;
  
  span {
    color: #f75f19;
  }
`;

const DistanceInfoBlock = styled.div`
  display: flex;
  align-items: center;
  
  p {
    margin: 0;
  }
`;

const CurrentDistanceText = styled.p`
  font-size: 10px;
  color: #202020;
  text-transform: uppercase;
  color: #202020;
`;

const Separator = styled.span`
  border: 0.5px solid #f6f6f6;
  height: 23px;
  margin: 0 10px;
`;

const DistanceInfo = styled.p`
  font-size: 23px;
  color: #f4511e;
  font-weight: 700;
  
  span {
    font-size: 36px;
    font-weight: 900;
    color: #2a2a2b;
  }
`;

const DistanceInput = styled.input`
  position: relative;
  width: 100%;
  margin-top: 15px;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  
  :before {
    content: '0m';
    position: absolute;
    left: 0;
    bottom: -25px;
    font-size: 13px;
    color: #c9cacb;
  }
  
  :after {
    content: '50m';
    position: absolute;
    right: 0;
    bottom: -25px;
    font-size: 13px;
    color: #c9cacb;
  }
  
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  
  :focus {
    outline: none;
  }
  
  ::ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }
  
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    margin-top: -3px;
    border-radius: 50%;
    box-shadow: 0 0 4px 0 rgba(24, 24, 24, 0.2);
    background: linear-gradient(
      to top,
      #020303,
      3%,
      #fff 97%
    );
    cursor: pointer;
  }
  
  ::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0, 0, 4px 50 rgba(24, 24, 24, 0.2);
    background: linear-gradient(
      to top,
      #020303,
      3%,
      #fff 97%
    );
    cursor: pointer;
  }
  
  ::-ms-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0, 0, 4px 50 rgba(24, 24, 24, 0.2);
    background: linear-gradient(
      to top,
      #020303,
      3%,
      #fff 97%
    );
    cursor: pointer;
  }
  
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    border-radius: 30px;
    background: linear-gradient(
      to right,
      #f14921 ${({value}) => value * 2}%,
      #c8c8c8 ${({value}) => value * 2}%
    );
  }
  
  ::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    border-radius: 30px;
    background: linear-gradient(
      to right,
      #f14921 ${({value}) => value * 2}%,
      #c8c8c8 ${({value}) => value * 2}%
    );
  }
  
  ::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    border-radius: 30px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  
  ::-ms-fill-lower {
    background: #f14921;
  }
  
  ::-ms-fill-upper {
    background: #c8c8c8;
  }
`;

const ConnectionBlock = styled.div`
  border-top: 1px solid #e8e8e8;
  margin-top: 60px;
  padding-top: 11px;
`;

const ConnectionsField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 45px;
`;

const NextStepButton = styled.button`
  border: none;
  outline: none;
  border-radius: 30px;
  background: #f14921;
  font-size: 14px;
  color: #fff;
  padding: 15px 50px;
  text-transform: uppercase;
  cursor: pointer;
`;

const OrderForm = styled.form`
  position: relative;
  background: #fff;
  border-radius: 15px;
  min-width: 40vw;
  min-height: 60vh;
`;

const Cross = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

