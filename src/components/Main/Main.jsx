import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <h1 className="pageTitle">My Goerli Wallet App</h1>
      <form className="form">
        <label className="label">
          <p className="label-description">Input for wallet address:</p>
          <input
            className="input"
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
            // placeholder="Enter Your Wallet Address (0x...) or ETH Mainnet ENS Domain"
            // placeholder="0x7ff7D4b2f9538613E68ddeAAb823DF55CEB88c42"
            required
          />
        </label>

        <label className="label">
          <p className="label-description">Number of tokens:</p>
          <input className="input" type="number" placeholder="0.00" required />
        </label>
        <button type="submit">Perform the transfer</button>
      </form>
    </main>
  );
};

export default Main;
