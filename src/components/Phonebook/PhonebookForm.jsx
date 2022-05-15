import { useState } from 'react';

const PhonebookForm = ({ addContact }) => {
  const [state, setState] = useState({ name: '', number: '' });
  const handleInputChange = e => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    addContact(state);
    setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={state.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleInputChange}
          value={state.number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default PhonebookForm;
