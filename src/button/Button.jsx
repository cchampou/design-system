import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled('button')`
  color: white;
`;

const Button = ({ text, type, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <StyledButton type={type} {...props}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
