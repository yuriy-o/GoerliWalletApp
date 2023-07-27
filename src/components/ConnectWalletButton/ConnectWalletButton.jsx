import { useState } from 'react';

import './ConnectWalletButton.css';

const ConnectWalletButton = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(
    typeof window.ethereum !== 'undefined'
  );
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async () => {
    if (!metaMaskInstalled) {
      // Виводимо повідомлення про встановлення MetaMask
      setMetaMaskInstalled(false);
      return;
    }

    try {
      setConnecting(true);
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setWalletAddress(account);
      console.log('Connected wallet with address:', account);
    } catch (error) {
      console.error('Wallet connection error:', error);
    } finally {
      setConnecting(false);
    }
  };

  const installMetaMask = () => {
    window.open('https://metamask.io/', '_blank');
  };

  if (walletAddress) {
    const shortAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(
      -4
    )}`;
    return (
      <div>
        <button className="button" onClick={connectWallet}>
          {shortAddress}
        </button>
      </div>
    );
  }

  if (metaMaskInstalled) {
    return (
      <div>
        <button
          className="button"
          onClick={connectWallet}
          disabled={connecting}
        >
          {connecting ? 'Connecting...' : 'Connect wallet'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button className="button" onClick={installMetaMask}>
        Install MetaMask
      </button>
      <p className="comment">Install MetaMask in your browser</p>
    </div>
  );
};

export default ConnectWalletButton;
