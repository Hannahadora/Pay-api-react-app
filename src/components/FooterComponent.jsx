import InputComponent from "./InputComponent";
import AppLogo from "../assets/shared/desktop/logo-footer.svg";
import CirclePattern from "../assets/shared/desktop/bg-pattern-circle.svg";

const FooterComponent = () => {
  return (
    <div className="">
      <div className="app-container mt-[60px]">
        <div className="flex items-center justify-between pb-[40px]">
          <h3 className="font-bold text-[50px]">Ready to start?</h3>

          <InputComponent />
        </div>
      </div>

      <div className="bg-[#1b262f]">
        <div className="app-container">
          <nav className="app-navbar py-[20px]">
            <ul className="nav-links">
              <a href="/">
                <li>
                  <img src={AppLogo} />
                </li>
              </a>
              <a href="/pricing">
                <li className="text-[#ffffff]">Pricing</li>
              </a>
              <a href="/about">
                <li className="text-[#ffffff]">About</li>
              </a>
              <a href="/">
                <li className="text-[#ffffff]">Contact</li>
              </a>
            </ul>

            <div className="">
                <div className="flex items-center justify-between">

                </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
