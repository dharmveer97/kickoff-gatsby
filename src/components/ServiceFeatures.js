import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.secondary ? 'row-reverse' : '')};
  .content {
    padding: 5rem 6rem;
  }
`;

const ServiceFeatures = ({ title, subtitle, secondary }) => {
  return (
    <section className="section">
      <div className="container">
        <Wrapper secondary={secondary} className="columns">
          <div className="column content">
            {' '}
            <h3 className="title has-text-left is-family-primary  has-text-weight-bold is-size-4 mb-4 is-spaced">
              {title}
            </h3>
            <p className="subtitle has-text-left is-size-6 line-height mb-4">
              {subtitle}
            </p>
            <Link
              to="/details"
              type="button"
              className="button is-secondary is-normal"
            >
              View Details
            </Link>
          </div>
          <div className="column">
            <figure className="image is-5by3">
              <img
                src="https://bulma.io/images/placeholders/800x480.png"
                alt="placeholder-img"
              />
            </figure>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default ServiceFeatures;
