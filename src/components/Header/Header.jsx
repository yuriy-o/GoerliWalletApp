import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logoWrapper">
        <img src="../../logo/ethereum.svg" alt="Logo" className="logoImage" />
        <span className="logo">GoerliApp</span>
      </div>
      <ConnectWalletButton />
    </header>
  );
};

export default Header;
