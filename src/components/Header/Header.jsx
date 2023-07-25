import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <span className="logo">GoerliApp</span>
      <ConnectWalletButton />
    </header>
  );
};

export default Header;
