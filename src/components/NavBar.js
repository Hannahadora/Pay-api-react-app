import AppLogo from '../assets/shared/desktop/logo.svg'
import menu_icon from '../assets/shared/mobile/menu.svg'
import ButtonComponent from './ButtonComponent';

function NavBar() {
  return (
    <div className="navbar">
      <div className="app-navbar">
        <ul className="nav-links">
          <li><img src={AppLogo} /></li>
          <li className='nav_list-item'>Pricing</li>
          <li className='nav_list-item'>About</li>
          <li className='nav_list-item'>Contact</li>
        </ul>

        <div className="navbar-btn">
          <ButtonComponent title={'Schedule a demo'} pry={'pry-btn'} />
        </div>
        <img className='menu-icon' src={menu_icon} alt='menu-icon' />
      </div>
    </div>
  );
}

export default NavBar;