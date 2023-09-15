import Link from './Link';
import UsersList from './UsersList';
import usersJson from '../data/users.json';
import Header from './Header';

const title = 'Users list';

export const App = () => {
  return (
    <>
      <Link href="/" alt="home" text="Home" />
      <br />
      <Link href="/about" alt="about" text="About" />
      <Header title={title} />
      <UsersList users={usersJson} />
    </>
  );
};

//  style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
