import React from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';

export const StepsBlock = ({step}) => {
  return (
    <div>
      {step === 3 && (
        <>
          <Title>White label  W-394900 XP</Title>
        </>
      )}
    </div>
  );
};

StepsBlock.propTypes = {
  step: PropsTypes.number.isRequired,
};

const Title = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;
