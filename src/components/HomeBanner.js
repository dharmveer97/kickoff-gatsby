import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import OverlayButton from './elements/OverlayButton';

const Section = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
  .heading {
    font-size: 48px !important;
    line-height: 4rem;
  }
  .subheading {
    font-size: 18px !important;
    line-height: 27px;
  }
  button {
    padding: 1.2rem 4rem;
    border-radius: 0;
  }
  .columns {
    flex: 1;
  }
  .info {
    margin-top: 7rem;
  }
`;

const HomeBanner = ({ bgImage }) => {
  return (
    <Section bgImage={bgImage}>
      <div className="container">
        <div className="info ">
          <Fade bottom>
            <div className="columns is-centered is-vcentered">
              <div className="column is-5 has-text-centered ">
                <h1 className="heading has-text-weight-normal has-text-white mb-4">
                  Reliable Painters and Decorators
                </h1>
                <h1 className="subheading is-size-5 has-text-weight-normal has-text-white mb-5">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci emit...
                </h1>
                <div className="has-text-center">
                  <OverlayButton />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Section>
  );
};

export default HomeBanner;
