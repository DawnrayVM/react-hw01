import { useState } from 'react';

const Contacts = ({ contacts, contactToRemove }) => {
  const [filter, setFilter] = useState('');
  const inputHandler = e => {
    const { value } = e.target;
    setFilter(value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    contacts.length > 0 && (
      <section>
        <label>
          Enter contact name
          <input type="text" onChange={inputHandler} value={filter} />
        </label>
        <ul>
          {filteredContacts.length > 0 &&
            filteredContacts.map(contact => (
              <li key={contact.name}>
                {contact.name}, {contact.number}
                <button onClick={() => contactToRemove(contact.name)}>x</button>
              </li>
            ))}
        </ul>
      </section>
    )
  );
};

export default Contacts;
