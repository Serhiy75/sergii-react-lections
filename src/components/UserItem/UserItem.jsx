import React from 'react';
import css from './UserItem.module.css';
// import clsx from 'clsx';
import { Wrapper, Status, Link, Link2, Image } from './UserItem.styles';
import { BsFill0CircleFill } from 'react-icons/bs';

const UserItem = ({ firstName, lastName, email, image, isOnline, phone }) => {
  return (
    <Wrapper>
      <h3>
        {firstName} {lastName}
      </h3>
      <Link href="/" alt={email} className={css.link}>
        Email: {email}
      </Link>
      <Link2 href="/" alt={phone} className={css.link}>
        Phone: {phone}
      </Link2>
      <Image src={image} alt={firstName} width="300" height="300" />
      <Status
        status={isOnline ? 'online' : 'offline'}
        // className={clsx(css.base, {
        //   [css.online]: isOnline,  ///змінюєм на 'styled-component'
        //   [css.offline]: !isOnline,
        // })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </Status>
      <BsFill0CircleFill size={20} />
    </Wrapper>
  );
};

export default UserItem;
