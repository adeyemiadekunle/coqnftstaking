import { NextPage } from 'next';
import Image from 'next/image';
import { ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';

const Header: NextPage = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="https://coqhero.com/">
            <Image src='/Coq_hero_Logo.png' alt="logo" width={120} height={60} />
          </a>
        </div>
        <div className={styles.connect}>
          <ConnectWallet 
           theme={"dark"}
           />
        </div>
      </div>
    </>
  );
};

export default Header;
