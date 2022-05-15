import Container from './Container';
import Profile from './Profile';
import Statistics from './Statistics';
import Friendlist from './Friendlist';
import TransactionHistory from './TransactionHistory';
import Feedback from './Feedback';
import Phonebook from './Phonebook';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { useState } from 'react';

const App = () => (
  <>
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Feedback />
      <Statistics title="Upload stats" data={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
    <Phonebook />
  </>
);

export default App;
