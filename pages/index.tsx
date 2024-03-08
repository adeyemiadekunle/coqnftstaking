import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Stake from '../components/stake';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Header from '../components/Header';

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <div >
      {/* Top Section */}
      {!address ? (
        <div className={styles.home}>
          <div>
            <h1 className={styles.h1}> Welcome to Coq Hero NFTs Staking</h1>
          </div>
          
          <div className={styles.image}>
            <Image src="/T_Wrench_NFT.png" alt="NFT" width={400} height={400} />
          </div>

          <div className={styles.walletContainer} >
          <ConnectWallet
          modalSize={"wide"}
          modalTitle={"Connect"}
          modalTitleIconUrl={"/Coq_hero_Logo.png"}
          
          welcomeScreen={{
            img: {
              src: "/T_Doc_Med.png",
              width: 150,
              height: 150,
            },
            title: "Welcome to Coq Hero Staking",
          }}
           />
          </div>
        </div>
      ) : (
      
       <Stake /> 
       
      )}
    </div>
  );
};

export default Home;
