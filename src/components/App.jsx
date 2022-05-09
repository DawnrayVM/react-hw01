import Container from './Container';
import Profile from './Profile';
import Statistics from './Statistics';
import Friendlist from './Friendlist/Friendlist';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" data={data} />
        <Friendlist friends={friends} />
      </Container>
    </>
  );
};

export default App;
