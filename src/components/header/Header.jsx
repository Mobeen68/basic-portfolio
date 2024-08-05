import "./style.css";
const Header = ({ setFocusComponent }) => {
  return (
    <header className="header">
      <div className="header__logo">Portfolio</div>
      <div className="header__links">
        <ul>
          <li onClick={() => setFocusComponent("about")}>
            <a href="#">About</a>
          </li>
          <li onClick={() => setFocusComponent("projects")}>
            <a href="#">Projects</a>
          </li>
          <li onClick={() => setFocusComponent("contact")}>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
