import styled from 'styled-components';
import {Col, Row} from 'react-flexbox-grid';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled(Row)`
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 540px;
  }
    
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 720px;
  }
    
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 960px;
  }
    
  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export const PaddingLess = styled(Col)`
  ${({right}) => right && 'padding-right: 0;'}
  ${({left}) => left && 'padding-left: 0;'} 
`;
