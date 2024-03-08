import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect,  phantomWallet, } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "avalanche-fuji";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        phantomWallet()
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
