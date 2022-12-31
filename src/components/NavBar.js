import AppLogo from '../assets/shared/desktop/logo.svg'
import ButtonComponent from './Button';

function NavBar() {
  return (
    <div className="navbar">
        <div className="app-navbar">
            <ul className="nav-links">
                <li><img src={AppLogo} /></li>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <ButtonComponent title={'Schedule a demo'} className="pry-btn" />
        </div>
    </div>
  );
}

export default NavBar;