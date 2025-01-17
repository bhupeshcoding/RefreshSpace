import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>OpenAI Flashcards</h1>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="https://portfoliouk.vercel.app/">Home</a>
            </li>
            <li>
              <a href="https://codesportfolio.netlify.app/">About</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=918860058336&text&type=phone_number&app_absent=0">
                Whatsapp call
              </a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
