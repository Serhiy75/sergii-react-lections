import Link from './Link/Link';
import UsersList from './UsersList/UsersList';
import usersJson from '../data/users.json';
// import Header from './Heaaders/Header';
import Button from './Button/Button';
import { AiFillCloseCircle } from 'react-icons/ai';

const title = 'Users list';

export const App = () => {
  return (
    <>
      <Button alert>
        Close
        <AiFillCloseCircle />
      </Button>
      <Button primary>Open</Button>
      <Link href="/" alt="home" text="Home" />
      <br />
      <Link href="/about" alt="about" text="About" />
      {/* <Header title={title} /> */}
      {/* <UsersList users={usersJson} /> */}
      {!!usersJson.length && <UsersList title={title} users={usersJson} />}
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
