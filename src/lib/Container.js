import styled from 'styled-components';

export const Container = styled.div`
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
        width: 1140px;
    }
`;
