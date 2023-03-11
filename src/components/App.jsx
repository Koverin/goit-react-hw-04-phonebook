import React, { Component } from 'react';
import shortid from 'shortid';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      // { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      // { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      // { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deletedContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
    console.log(contacts);
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contact;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <Section>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>

        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={this.visibleContacts()}
            onDeletedContact={this.deletedContact}
          />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Section>
    );
  }
}
