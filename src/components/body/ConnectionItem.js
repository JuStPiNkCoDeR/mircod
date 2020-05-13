import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckIcon from '../../assets/images/check.png';

export const ConnectionItem = ({logo, index, selectedIndex, onSelected}) => {
  const handleClick = () => {
    onSelected(index);
  };

  return (
    <Wrapper selected={selectedIndex === index} onClick={handleClick}>
      <img src={logo} alt="logo" />
    </Wrapper>
  );
};

ConnectionItem.propTypes = {
  logo: PropTypes.string,
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
};

ConnectionItem.defaultProps = {
  logo: '',
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({selected}) => selected ? '#f4511e' : '#fafafa'};
  flex-basis: 21%;
  height: 77px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  
  :hover {
    background: #f4511e;
  }
  
  ${({selected}) => selected && `
    :before {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 5px;
      right: 5px;
      background: url(${CheckIcon}) no-repeat;
      background-size: contain;
    }
  `}
`;
