import InputComponent from "./InputComponent";
import FooterLogo from "../assets/shared/desktop/logo-footer.svg";
import CirclePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import facebookIcon from '../assets/shared/desktop/facebook.svg'
import twitterIcon from '../assets/shared/desktop/twitter.svg'
import linkedinIcon from '../assets/shared/desktop/linkedin.svg'

const FooterComponent = () => {
  return (
    <div className="">
      <div className="app-container mt-[60px]">
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center pb-[40px]">
          <h3 className="font-bold lg:text-[50px] text-[35px] lg:mb-[0px] mb-[8px] lg:text-left text-center">Ready to start?</h3>

          <InputComponent />
        </div>
      </div>

      <div className="bg-[#1b262f]">
        <div className="app-container">
          <nav className="app-navbar py-[30px] flex lg:flex-row flex-col items-center lg:justify-between justify-center">
            <ul className="nav-links flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:mb-0 mb-[40px]">
              <a href="/">
                <li className=" lg:mb-0 mb-[40px]">
                  <img src={FooterLogo} alt='footer-logo'/>
                </li>
              </a>
              <a href="/pricing">
                <li className="lg:mb-0 mb-[24px] lg:text-left text-center text-[#ffffff]">Pricing</li>
              </a>
              <a href="/about">
                <li className="lg:mb-0 mb-[24px] lg:text-left text-center text-[#ffffff]">About</li>
              </a>
              <a href="/contact">
                <li className="lg:mb-0 mb-[24px] lg:text-left text-center text-[#ffffff]">Contact</li>
              </a>
            </ul>

            <div className="">
                <div className="flex items-center justify-between">
                    <img className="mr-[60px] cursor-pointer" src={facebookIcon} alt="facebook-Icon" />
                    <img className="mr-[60px] cursor-pointer" src={twitterIcon} alt="twitter-Icon" />
                    <img className="cursor-pointer" src={linkedinIcon} alt="linkedin-Icon" />
                </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
