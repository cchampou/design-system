import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const commonHeadingStyles = css`
  font-family: 'Avenir', sans-serif;
  font-weight: 400;
`;

const Component = styled('h1')`
  ${commonHeadingStyles};
`;

const Heading1 = ({ children }) => (
  <Component>
    {children}
  </Component>
);

Heading1.defaultProps = {
  children: null,
};

Heading1.propTypes = {
  children: PropTypes.node,
};

export default Heading1;
