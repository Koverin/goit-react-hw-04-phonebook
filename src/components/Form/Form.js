import { useState } from 'react';
import { FormBox, Input } from './Form.styled';

export function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormBox onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter you name"
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
      </label>
      <button type="submit">Add contact</button>
    </FormBox>
  );
}
