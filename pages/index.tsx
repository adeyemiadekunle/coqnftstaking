import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Stake from '../components/stake';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Head from 'next/head';

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <div>
      {/* Top Section */}
      <Head>
        <title>CoqHero staking</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {!address ? (
        <div className={styles.home}>
          <div className={styles.image}>
            <Image
              src="/T_Wrench_NFT.png"
              alt="NFT"
              width={500}
              height={500}
            />
            <style>
              {`
                    @media (max-width: 630px) {
                        img {
                            width: 300px;
                            height: 300px;
                        }
                    }
                `}
            </style>
          </div>

          <div className={styles.walletContainer}>
            <h1 className={styles.h1}>
              Welcome to Coq Hero NFTs Staking
            </h1>

            <ConnectWallet
              modalSize={'wide'}
              modalTitle={'Connect'}
              modalTitleIconUrl={'/favicon.png'}
              showThirdwebBranding={false}
              welcomeScreen={{
                img: {
                  src: '/T_Doc_Med.png',
                  width: 160,
                  height: 160,
                },
                title: 'Welcome to Coq Hero Staking',
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
