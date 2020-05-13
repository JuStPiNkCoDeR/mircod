import React, {useState} from 'react';
import styled from 'styled-components';
import {Col} from 'react-flexbox-grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {Container, Content, PaddingLess} from '../lib/Grid';
import MasterCardIcon from '../assets/images/masterCard.png';
import PayPalIcon from '../assets/images/payPal.png';
import VisaIcon from '../assets/images/visa.png';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Background>
      <Wrapper>
        <InfoBlocks>
          <PaddingLess xs={3} left="true">
            <Title>about us</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad
            </p>
          </PaddingLess>
          <Col xs={2}>
            <MiddlePosition>
              <Title>categories</Title>
              <LinksBlock>
                <a href="#">-Electronics</a>
                <a href="#">-Home & Tools</a>
                <a href="#">-Beauty & Health</a>
                <a href="#">-Toys & Kids</a>
              </LinksBlock>
            </MiddlePosition>
          </Col>
          <Col xs={2} xsOffset={4}>
            <Title>accept payments</Title>
            <PaymentsBlock>
              <a href="#">
                <img src={MasterCardIcon} alt="master card"/>
              </a>
              <a href="#">
                <img src={PayPalIcon} alt="pay pal"/>
              </a>
              <a href="#">
                <img src={VisaIcon} alt="visa"/>
              </a>
            </PaymentsBlock>
          </Col>
          <NewsLetterContent>
            <PaddingLess xs={5} xsOffset={7} right="true">
              <NewsLetterBlock>
                <p>newsletter</p>
                <InputBlock>
                  <EmailInput
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <ConfirmButton icon={faPaperPlane} />
                </InputBlock>
                <span>Remember we will not do spam promise.</span>
              </NewsLetterBlock>
            </PaddingLess>
          </NewsLetterContent>
        </InfoBlocks>
      </Wrapper>
      <ContactsContainer>
        <Content>
          <PaddingLess xs={2} left="true" right="true">
            <p> 2016 - Mircod. All Rights Reserved.</p>
          </PaddingLess>
          <Col xs={2} xsOffset={3}>
            <SocialLinksBlock>
              <a href="https://web.facebook.com/" target="_blank" rel="noreferrer noopener">
                <SocialLink icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                <SocialLink icon={faTwitter} />
              </a>
              <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener">
                <SocialLink icon={faGoogle} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
                <SocialLink icon={faYoutube} />
              </a>
            </SocialLinksBlock>
          </Col>
          <PaddingLess xs={1} xsOffset={4} left="true" right="true">
            <ContactLinks>
              <a href="#">Blog</a>
              <a href="#">About us</a>
            </ContactLinks>
          </PaddingLess>
        </Content>
        <ToTopButton href="#top">
          <FontAwesomeIcon icon={faChevronUp} />
        </ToTopButton>
      </ContactsContainer>
    </Background>
  );
};

const Background = styled.div`
  padding-top: 205px;
  background: #f6f6f6;
`;

const Wrapper = styled(Container)`
  background: #2a2a2b;
  padding-bottom: 75px;
`;

const InfoBlocks = styled(Content)`
  position: relative;
  margin-top: 150px;
  
  p {
    color: #90a4ae;
    font-size: 14px;
  }
  
  a {
    color: #90a4ae;
    outline: none;
    text-decoration: none;
    font-size: 14px;
  }
`;

const Title = styled.h3`
  color: #eee;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

const MiddlePosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  a {
    margin-bottom: 10px;
  }
  
  a:last-child {
    margin-bottom: 0;
  }
`;

const PaymentsBlock = styled.div`
  margin-top: 40px;
  
  a {
    margin-right: 10px;
  }
`;

const NewsLetterContent = styled(Content)`
  position: absolute;
  right: 0;
  top: -260px;
  
  p {
    font-size: 18px;
    text-transform: uppercase;
    margin: 0 0 20px;
    color: #eee;
  }
  
  span {
    font-size: 14px;
    margin-top: 20px;
    color: #eee;
  }
`;

const NewsLetterBlock = styled.div`
  padding: 45px 50px;
  background: #f14921;
`;

const InputBlock = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  width: calc(100% - 20px);
  border: none;
  outline: none;
  padding: 18px 0 20px 20px;
`;

const ConfirmButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 18px;
  right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  
  path {
    fill: #90a4ae;
  }
`;

const ContactsContainer = styled(Wrapper)`
  position: relative;
  border-top: 1px solid #546e7a;
  padding-top: 30px;
  padding-bottom: 100px;
  color: #90a4ae;
  font-size: 12px;
  
  p {
    margin: 0;
  }
  
  a {
    color: #90a4ae;
    outline: none;
    text-decoration: none;
  }
`;

const SocialLinksBlock = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SocialLink = styled(FontAwesomeIcon)`
  path {
    fill: #90a4ae;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToTopButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 35px;
  top: -15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: #f14921;
  
  path {
    fill: #fff;
  }
`;
