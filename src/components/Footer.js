import logo from "../assets/footer-logo.png";
import './Footer.css';

const Footer = () => {



  return (
    <footer className="footer-container">
      <div className="footer-group">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="primary">
        Schedule 1-on-1 Call Now
          </button>
        </div>
        <div className="footer-copyright">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
    </footer>
  );
};

export default Footer;
