import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ConnectWalletButton.css';

const ConnectWalletButton = () => {
  // Функція для підключення гаманця
  const connectWallet = async () => {
    // Перевірка чи встановлено MetaMask
    if (!window.ethereum) {
      // Виведення повідомлення з посиланням на MetaMask
      toast.error(
        <>
          Встановіть{' '}
          <a
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetaMask
          </a>{' '}
          у вашому браузері
        </>,
        {
          closeButton: true, // Додає кнопку "закрити"
        }
      );
      return;
    }

    try {
      // Підключення гаманця
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log('Підключено гаманець з адресою:', address);
    } catch (error) {
      console.error('Помилка підключення гаманця:', error);
      // Виведення повідомлення про помилку з кнопкою "закрити"
      toast.error('Помилка підключення гаманця', {
        closeButton: true,
      });
    }
  };

  return (
    <div>
      <button className="button" onClick={connectWallet}>
        Connect wallet
      </button>
      <ToastContainer /> {/* Контейнер для виведення повідомлень */}
    </div>
  );
};

export default ConnectWalletButton;
