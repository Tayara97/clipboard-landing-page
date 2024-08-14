export default function Footer() {
  return (
    <footer>
      <img className="logo" src="images/logo.svg" alt="Logo" />
      <div className="links">
        <div className="col">
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          {" "}
          <a href="#">Privacy Policy</a>
          <a href="#"> Press Kit</a>
        </div>
        <div className="col">
          {" "}
          <a href="#">Install Guide</a>
        </div>
      </div>
      <div className="social-accounts">
        <a href="#">
          <img src="images/icon-facebook.svg" alt="Social" />
        </a>
        <a href="#">
          {" "}
          <img src="images/icon-twitter.svg" alt="Social" />
        </a>
        <a href="#">
          {" "}
          <img src="images/icon-instagram.svg" alt="Social" />
        </a>
      </div>
    </footer>
  );
}
