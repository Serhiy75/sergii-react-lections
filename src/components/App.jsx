import Link from './Link';

export const App = () => {
  return (
    <>
      <Link href="/" alt="home" text="Home" />
      <br />
      <Link href="/about" alt="about" text="About" />
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
