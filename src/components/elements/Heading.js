import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h1`
  line-height: 1.2em;
`;

const Img = styled.img`
  height: 1.5rem;
`;

const Heading = ({ children, centered, hideBottomIcon, primary }) => (
  <div className={hideBottomIcon ? 'mb-2' : 'mb-5'}>
    <Text
      primary={primary}
      className={`is-size-2 has-text-weight-normal mb-4 is-size-4-mobile  ${
        centered ? 'has-text-centered' : ''
      }`}
    >
      {children}
    </Text>{' '}
  </div>
);

Heading.defaultProps = {
  centered: false,
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

export default Heading;
