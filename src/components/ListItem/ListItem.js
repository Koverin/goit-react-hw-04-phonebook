import PropTypes from 'prop-types';
import { Item } from './ListItem.styled';

export const ListItem = ({ id, name, number, onDeletedContact }) => {
  return (
    <Item>
      {name}: {number}
      <button
        type="button"
        onClick={() => {
          onDeletedContact(id);
        }}
      >
        Delete
      </button>
    </Item>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletedContact: PropTypes.func,
};
