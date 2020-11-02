import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { commonHeadingStyles } from './Heading1';

const Component = styled('h2')`
  ${commonHeadingStyles};
`;

const Heading2 = ({ children }) => (
  <Component>
    {children}
  </Component>
);

Heading2.defaultProps = {
  children: null,
};

Heading2.propTypes = {
  children: PropTypes.node,
};

export default Heading2;
