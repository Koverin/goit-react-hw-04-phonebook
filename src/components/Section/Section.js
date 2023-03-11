import PropTypes from 'prop-types';
import { Box } from './Section.styled';

export function Section({ children }) {
  return <Box>{children}</Box>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
