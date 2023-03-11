import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
