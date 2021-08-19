import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Container = styled.footer`
  padding: 7rem 0;
  padding-bottom: 1rem;
  background-color: ${theme.darkAccent};
  li,
  p {
    margin-bottom: 1rem;
    font-size: ${theme.fontSizeMedium}px !important;
    color: #9b9b9b !important;
    :hover {
      color: ${theme.textColorLite} !important;
    }
  }
  p {
    color: ${theme.textColorLite} !important;
  }
  .container {
    position: inherit !important;
  }
  span {
    line-height: 25px;
  }
  a {
    :hover {
      transition: 0.4s !important;
      color: ${theme.textColor} !important;
    }
  }
  h1 {
    margin-bottom: 32px;
  }
`;

const LogoImg = styled.img`
  max-height: 5rem;
  margin-top: -0.7rem;
`;

const Bottom = styled.div`
  padding: 2rem !important;
  background-color: ${theme.darkAccent};
`;

const information = [
  { id: 1, name: 'FAQ', url: '/page/faq' },
  {
    id: 2,
    name: 'Find us',
    url: 'cksbcj',
  },
  { id: 3, name: 'Past Projects', url: '/blog' },
];
const Footer = () => {
  return (
    <>
      <Container className="section">
        <div className="container">
          <div className="columns  ">
            <div className="column has-text-centered ">
              <h1 className="has-text-weight-normal has-text-white is-size-4">
                Contact Us
              </h1>
              <ul>
                {information.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column has-text-centered is-5">
              <LogoImg
                src="/images/logo.png"
                alt="footer-logo"
                className="mb-5"
              />
              <p className="has-text-white is-size-3">
                lorempisem do ammet lorempisem do ammet lorem pisem do amme
                lorem pisem do amme
              </p>
            </div>
            <div className="column has-text-centered">
              <h1 className="has-text-weight-normal has-text-white is-size-4">
                Our Information
              </h1>
              <ul>
                {information.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Bottom className="has-text-centered ">
        <h2 className="has-text-white">
          Copyright © 2020 - Sports | build by{' '}
          <a
            href="https://www.zeiq.co/"
            target="_blank"
            className="has-text-white"
            rel="noopener noreferrer"
          >
            Zeiq.co
          </a>
        </h2>
      </Bottom>
    </>
  );
};
export default Footer;
