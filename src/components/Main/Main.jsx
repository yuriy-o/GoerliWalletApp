import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Main.css';

const Main = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [numberOfTokens, setNumberOfTokens] = useState('');

  const isValidWalletAddress = address => {
    const regex = /^0x[0-9a-fA-F]{40}$/;
    return regex.test(address);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!isValidWalletAddress(walletAddress)) {
      toast.error('Invalid wallet address format', {
        closeButton: true,
      });
      return;
    }

    const tokensAmount = parseFloat(numberOfTokens.replace(',', '.'));

    if (
      isNaN(tokensAmount) ||
      tokensAmount < 0.000001 ||
      tokensAmount > 100000 ||
      (tokensAmount * 1000000) % 10 !== 0
    ) {
      toast.error('Invalid number of tokens', {
        closeButton: true,
      });
      return;
    }

    // Logic for performing the transfer...
    console.log(
      `Transferred ${tokensAmount} tokens from address ${walletAddress}`
    );
    toast.success(`Transfer of ${tokensAmount} tokens successful`, {
      closeButton: true,
    });
  };

  return (
    <main className="main">
      <h1 className="pageTitle">My Goerli Wallet App</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="label">
          <p className="label-description">Wallet address:</p>
          <input
            className="input"
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
            value={walletAddress}
            onChange={e => setWalletAddress(e.target.value)}
            required
          />
        </label>

        <label className="label">
          <p className="label-description">Number of tokens:</p>
          <input
            className="input"
            type="number"
            placeholder="0.000001"
            step="0.000001"
            value={numberOfTokens}
            onChange={e => setNumberOfTokens(e.target.value)}
            required
          />
        </label>
        <button type="submit">Perform the transfer</button>
      </form>
      <ToastContainer />
    </main>
  );
};

export default Main;
