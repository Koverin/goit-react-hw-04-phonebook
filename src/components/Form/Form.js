import React, { Component } from 'react';
import { FormBox, Input } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.inputChange}
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
            onChange={this.inputChange}
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
}
