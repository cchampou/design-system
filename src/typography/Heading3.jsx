import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { commonHeadingStyles } from './Heading1';

const Component = styled('h3')`
  ${commonHeadingStyles};
`;

const Heading3 = ({ children }) => (
  <Component>
    {children}
  </Component>
);

Heading3.defaultProps = {
  children: null,
};

Heading3.propTypes = {
  children: PropTypes.node,
};

export default Heading3;
