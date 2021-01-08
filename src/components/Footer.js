import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { lighten } from 'polished';
import SocialIcon from './SocialIcon';
import { theme } from '../utils/theme';

const Container = styled.footer`
  padding: 7rem 0;
  padding-bottom: 1rem;
  background-color: ${theme.darkAccent};
  li,
  p {
    margin-bottom: 1rem;
    font-size: ${theme.fontSizeSmall}px !important;
    color: #9b9b9b !important;
    :hover {
      color:  ${theme.textColorLite}; !important;
    }
  }
  p {
    color: ${theme.textColorLite}; !important;
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
      color: ${lighten(0.6, theme.textColor)} !important;
    }
  }
  h1 {
    margin-bottom: 32px;
  }
`;

const LogoImg = styled.img`
  height: 100px;
  margin-top: -2rem;
`;

const Bottom = styled.div`
  padding: 2rem !important;
  background-color: ${theme.darkAccent};
  h2 {
    font-size: 14px !important;
  }
`;

const information = [
  { id: 1, name: 'Faq', url: '/page/faq' },
  { id: 2, name: 'Term and condition', url: '/page/terms-and-condition' },
  { id: 3, name: 'Privacy Policy', url: '/page/privacy-policy' },
  { id: 4, name: 'News & Updates', url: '/blog' },
];
const Footer = ({ home }) => {
  return (
    <>
      <Container className="section">
        <div className="container">
          <div className="columns  ">
            <div className="column has-text-centered ">
              <h1 className="has-text-weight-normal has-text-white is-size-3">
                Contact Us
              </h1>
              <ul>
                <li>
                  <a href={`tel:${home.telephone}`}>{home.telephone}</a>
                </li>
                <li>
                  <a href={`mailto:${home.email}`}>{home.email}</a>
                </li>
                <li>
                  <span>{home.address}</span>
                </li>
              </ul>
            </div>
            <div className="column has-text-centered is-5">
              <LogoImg
                src="/images/logo.png"
                alt="footer-logo"
                className="mb-5"
              />
              <p className="has-text-white is-size-3">
                {home.footerDescription}
              </p>
            </div>
            <div className="column has-text-centered">
              <h1 className="has-text-weight-normal has-text-white is-size-4">
                Our Information
              </h1>
              <ul>
                {information.map((item) => (
                  <li key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="has-text-centered is-flex is-justify-content-center">
            <SocialIcon home={home} />
          </div>
        </div>
      </Container>
      <Bottom className="has-text-centered ">
        <h2 className="has-text-white">
          Copyright © 2020 - Midas Brush Decorating | build by{' '}
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
