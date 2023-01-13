import AppLogo from '../assets/shared/desktop/logo.svg'
import menu_icon from '../assets/shared/mobile/menu.svg'
import ButtonComponent from './ButtonComponent';

function NavBar() {
  return (
    <div className="navbar">
      <div className="app-navbar">
        <ul className="nav-links">
        <a href='/'><li><img src={AppLogo} /></li></a>
          <a href='/pricing'><li className='nav_list-item'>Pricing</li></a>
          <a href='/about'><li className='nav_list-item'>About</li></a>
          <a href='/'><li className='nav_list-item'>Contact</li></a>
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