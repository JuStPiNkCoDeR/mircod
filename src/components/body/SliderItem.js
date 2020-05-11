import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import itemBg1B from '../../assets/images/itemBg-1B.png';
import itemBg2B from '../../assets/images/itemBg-2B.png';
import itemBg3B from '../../assets/images/itemBg-3B.png';
import itemBg4B from '../../assets/images/itemBg-4B.png';
import itemBg1W from '../../assets/images/itemBg-1W.png';
import itemBg2W from '../../assets/images/itemBg-2W.png';
import itemBg3W from '../../assets/images/itemBg-3W.png';
import itemBg4W from '../../assets/images/itemBg-4W.png';

export const SliderItem = ({data, isChosen, onSelected}) => {
  const handleItemClick = () => {
    onSelected(data.ID);
  };

  const getBlackBackground = (number) => {
    switch (number) {
      case 0:
        return itemBg1B;
      case 1:
        return itemBg2B;
      case 2:
        return itemBg3B;
      case 3:
        return itemBg4B;
      default:
        return undefined;
    }
  };

  const getWhiteBackground = (number) => {
    switch (number) {
      case 0:
        return itemBg1W;
      case 1:
        return itemBg2W;
      case 2:
        return itemBg3W;
      case 3:
        return itemBg4W;
      default:
        return undefined;
    }
  };

  const background =
      isChosen ?
          getWhiteBackground(data.background) :
          getBlackBackground(data.background);

  return (
    <ItemBlock onClick={handleItemClick}>
      <ItemIcon chosen={isChosen}>
        <img src={background} alt="icon"/>
      </ItemIcon>
      <ItemName dark={isChosen}>{data.name}</ItemName>
    </ItemBlock>
  );
};

SliderItem.propTypes = {
  data: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.number,
  }).isRequired,
  isChosen: PropTypes.bool.isRequired,
  onSelected: PropTypes.func.isRequired,
};

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 77px;
  border-radius: 50%;
  box-shadow: 0 0 24px 0 rgba(92, 104, 99, 0.05);
  background: ${({chosen}) => chosen ? '#f14921' : '#fff'};
  cursor: pointer;
`;

const ItemName = styled.p`
  font-size: 12px;
  color: ${({dark}) => dark ? '#1a1b1c' : '#c8c8c9'};
`;
