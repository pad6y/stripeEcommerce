import './footer.styles.scss';

function Footer() {
  const year = new Date().getFullYear();

  return <div className="footer">Pad6Y &copy; {year}</div>;
}

export default Footer;
