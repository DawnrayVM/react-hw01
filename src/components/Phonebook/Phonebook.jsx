import { useState } from 'react';
import PhonebookForm from './PhonebookForm';
import Contacts from './Contacts';
import styles from './Phonebook.module.css';

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
    <section className={styles.phonebook}>
      <h2 className={styles.phonebookTitle}>Phonebook</h2>
      <PhonebookForm addContact={handleSubmit} />
      <Contacts
        contacts={state.contacts}
        contactToRemove={handleDeleteContact}
      />
    </section>
  );
};

export default Phonebook;
