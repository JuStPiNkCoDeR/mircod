import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SliderItem = ({data, isChosen, onSelected}) => {
  const handleItemClick = () => {
    onSelected(data.ID);
  };

  return (
    <ItemBlock onClick={handleItemClick}>
      <ItemIcon chosen={isChosen}>
        <img src={data.background} alt="icon"/>
      </ItemIcon>
      <ItemName dark={isChosen}>{data.name}</ItemName>
    </ItemBlock>
  );
};

SliderItem.propTypes = {
  data: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.string,
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
