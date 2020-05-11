import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {SliderItem} from './SliderItem';
import {Container, Content} from '../../lib/Grid';
import {guid} from '../../lib/helpers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faChevronRight,
  faChevronLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import itemBg1 from '../../assets/images/itemBg-1B.png';
import itemBg2 from '../../assets/images/itemBg-2B.png';
import itemBg3 from '../../assets/images/itemBg-3B.png';
import itemBg4 from '../../assets/images/itemBg-4B.png';

export const Slider = ({items, chosenItems, onSelected, onCreated}) => {
  const MAX_SHOWN_ITEMS = 10;
  const backgrounds = [itemBg1, itemBg2, itemBg3, itemBg4];

  const [leftBorderIndex, setLeftBorderIndex] = useState(0);
  const [rightBorder, setRightBorder] = useState(
      items.length < MAX_SHOWN_ITEMS ?
          items.length :
          MAX_SHOWN_ITEMS);
  useEffect(() => {
    const expectedRightBorder = leftBorderIndex + MAX_SHOWN_ITEMS;
    setRightBorder(
        expectedRightBorder > items.length ?
            items.length :
            expectedRightBorder);
  }, [leftBorderIndex, items]);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customFunctions, setCustomFunctions] = useState('');

  const isLeftChevronDisabled = leftBorderIndex === 0;
  const isRightChevronDisabled = rightBorder === items.length;

  const handleLeftChevronClick = () => {
    if (!isLeftChevronDisabled) {
      setLeftBorderIndex((prevState) => prevState - 1);
    }
  };

  const handleRightChevronClick = () => {
    if (!isRightChevronDisabled) {
      setLeftBorderIndex((prevState) => prevState + 1);
    }
  };

  const handleAddCustom = () => {
    setIsAddModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsAddModalVisible(false);
    setCustomName('');
    setCustomFunctions('');
  };

  const handleCustomNameChange = (event) => {
    setCustomName(event.target.value);
  };

  const handleCustomFunctionsChange = (event) => {
    setCustomFunctions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const backgroundIndex = Math.floor(Math.random() * backgrounds.length);
    onCreated({
      ID: guid(),
      name: customName,
      background: backgrounds[backgroundIndex],
    });
    handleCloseModal();
  };

  const visibleItems = [];

  for (let i = leftBorderIndex; i < rightBorder; i++) {
    const data = items[i];
    const isChosen = chosenItems.has(data.ID);

    visibleItems.push((
      <SliderItem
        key={data.ID}
        data={data}
        isChosen={isChosen}
        onSelected={onSelected}
      />
    ));
  }

  return (
    <Container>
      <Content middle="xs" around="xs">
        <Chevron
          onClick={handleLeftChevronClick}
          disabled={isLeftChevronDisabled}
        >
          <FontAwesomeIcon icon={faChevronLeft}/>
        </Chevron>
        {visibleItems}
        <AddBlock>
          <AddButton onClick={handleAddCustom}>
            <PlusBlock>
              <PlusIcon icon={faPlus}/>
            </PlusBlock>
          </AddButton>
          <ItemName dark>Add custom</ItemName>
        </AddBlock>
        <Chevron
          onClick={handleRightChevronClick}
          disabled={isRightChevronDisabled}
        >
          <FontAwesomeIcon icon={faChevronRight}/>
        </Chevron>
      </Content>
      <Modal visible={isAddModalVisible}>
        <Form onSubmit={handleSubmit}>
          <Cross icon={faTimes} onClick={handleCloseModal}/>
          <label htmlFor="input-name">
            Name
            <input
              id="input-name"
              type="text"
              placeholder="Enter name..."
              value={customName}
              onChange={handleCustomNameChange}
              required
            />
          </label>
          <label htmlFor="input-functions">
            Functions
            <textarea
              id="input-functions"
              cols="30"
              rows="10"
              placeholder="Enter functions..."
              value={customFunctions}
              onChange={handleCustomFunctionsChange}
            />
          </label>
          <button>Add</button>
        </Form>
      </Modal>
    </Container>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.string,
  })).isRequired,
  chosenItems: PropTypes.instanceOf(Set).isRequired,
  onSelected: PropTypes.func.isRequired,
  onCreated: PropTypes.func.isRequired,
};

const Chevron = styled.div`
  width: 10px;
  height: 18px;
  cursor: pointer;
  
  path {
    fill: ${({disabled}) => disabled ? '#afb0b0' : '#1d1e1f'};
  }
`;

const ItemName = styled.p`
  font-size: 12px;
  color: ${({dark}) => dark ? '#1a1b1c' : '#c8c8c9'};
`;

const AddBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 77px;
  border-radius: 50%;
  border: 2px solid #f14921;
  cursor: pointer;
`;

const PlusBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 2px solid #f14921;
`;

const PlusIcon = styled(FontAwesomeIcon)`
  path {
    fill: #f14921;
  }
`;

const Modal = styled.div`
  display: ${({visible}) => visible ? 'flex' : 'none'};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background: #fff;
  padding: 15px 20px;
`;

const Cross = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
