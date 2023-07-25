import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="span">
        Project by{' '}
        <a
          href="https://github.com/yuriy-o"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yuriy Orekhov
        </a>
      </span>
    </footer>
  );
};

export default Footer;
