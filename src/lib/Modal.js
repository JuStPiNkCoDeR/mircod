import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Modal = styled.div`
  display: ${({visible}) => visible ? 'flex' : 'none'};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 99999;
`;

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};
