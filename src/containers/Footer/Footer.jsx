import './footer.scss';
import gpt3Logo from '../../assets/logo.svg';

const Footer = ({ animation }) => {
  return (
    <div className="gpt3__footer section__padding" data-aos={animation}>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <button type="button">Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <a href="#/">Overons</a>
          <a href="#/">Social Media</a>
          <a href="#/">Counters</a>
          <a href="#/">Contact</a>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <a href="#/">Terms & Conditions</a>
          <a href="#/">Privacy Policy</a>
          <a href="#/">Contact</a>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <a href="#/">Crechterwoord K12 182 DK Alknjkcb</a>
          <a href="#/">085-132567</a>
          <a href="#/">info@payme.net</a>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
