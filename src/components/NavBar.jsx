import AppLogo from '../assets/shared/desktop/logo.svg'
import menu_icon from '../assets/shared/mobile/menu.svg'
import CirclePattern from '../assets/shared/desktop/bg-pattern-circle.svg'
import ButtonComponent from './ButtonComponent';

function NavBar() {
  return (
    <div className="">

      <div className='z-[10] absolute right-0 top-0 overflow-hidden w-[700px] h-[700px]'>
        <div className='absolute right-[-200px] lg:top-[-200px] top-[-375px]'>
          <img src={CirclePattern} className="w-full" alt="circle-bg" />
        </div>
      </div>

      <div className='app-container py-6'>
        <nav className="app-navbar">
          <ul className="nav-links">
            <a href='/contact'><li><img src={AppLogo} /></li></a>
            <a href='/pricing'><li className='nav_list-item'>Pricing</li></a>
            <a href='/about'><li className='nav_list-item'>About</li></a>
            <a href='/contact'><li className='nav_list-item'>Contact</li></a>
          </ul>

          <div className="navbar-btn">
            <ButtonComponent title={'Schedule a demo'} pry={'pry-btn'} />
          </div>
          <img className='menu-icon' src={menu_icon} alt='menu-icon' />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;