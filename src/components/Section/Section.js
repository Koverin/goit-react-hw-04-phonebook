import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Section.styled';

export const Section = ({ children }) => {
  return <Box>{children}</Box>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
