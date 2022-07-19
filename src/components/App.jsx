
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
    <Section>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    </Section>
    <Section>
      <Statistics title= 'upload stats' stats = {data}/>
    </Section>

    <Section>
      <FriendList friends = {friends}/>
    </Section>

    <Section>
      <TransactionHistory items = {transactions}/>
    </Section>
    </>
    
  );
};
