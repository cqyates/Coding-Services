// import HeaderNav from "../Navbar";
import MainMenu from '../MainMenu';
import Subtitle from '../Subtitle';
import './style.css';
const Header = () => {
  return (
    <header className="header">
      <div id="name" style={{border: "1px solid white"}}>
        <h1>Corey Quinn Yates</h1>
        <Subtitle />
      </div>
      <div style={{border: "1px solid pink"}}>
        <MainMenu/>
      </div>
    </header>
  );
};
export default Header;
