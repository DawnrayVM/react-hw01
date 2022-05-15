import { useState } from 'react';
import PhonebookForm from './PhonebookForm';
import Contacts from './Contacts';

const Phonebook = () => {
  const [state, setState] = useState({ contacts: [], filter: '' });
  const handleSubmit = data => {
    setState(prevState => ({
      contacts: [...prevState.contacts, data],
      filter: '',
    }));
  };
  const handleDeleteContact = contactToDelete => {
    const [{ name }] = state.contacts.filter(
      contact => contact.name === contactToDelete
    );
    setState(prevState => ({
      contacts: [
        ...prevState.contacts.filter(contact => contact.name !== name),
      ],
      filter: prevState.filter,
    }));
  };
  return (
    <section className="phonebook">
      <h2>Phonebook</h2>
      <PhonebookForm addContact={handleSubmit} />
      <Contacts
        contacts={state.contacts}
        contactToRemove={handleDeleteContact}
      />
    </section>
  );
};

export default Phonebook;
