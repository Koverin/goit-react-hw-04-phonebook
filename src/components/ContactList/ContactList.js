import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from 'components/ListItem/ListItem';

export const ContactList = ({ contacts, onDeletedContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeletedContact={onDeletedContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
