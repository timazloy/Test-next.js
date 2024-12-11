import React from 'react';
import Link from "next/link";
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
          <Link className={styles.logo} href='./.'>LOGO</Link>
      </h1>
      <nav>
        <Link className='link' href='./about'>О нас</Link>
      </nav>
    </header>
  );
};

export default Header;
