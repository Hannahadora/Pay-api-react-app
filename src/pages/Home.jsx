import HeaderComponent from "../components/HeaderComponent";
import AboutIntro from "../components/AboutIntro";
import easyImplementationImg from "../assets/home/desktop/illustration-easy-to-implement.svg";
import simpleUiImg from "../assets/home/desktop/illustration-simple-ui.svg";
import personalFinancesImg from "../assets/home/desktop/icon-personal-finances.svg";
import bankingImg from "../assets/home/desktop/icon-banking-and-coverage.svg";
import ConsumerImg from "../assets/home/desktop/icon-consumer-payments.svg";
import CirclePattern from "../assets/shared/desktop/bg-pattern-circle.svg";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeaderComponent />
      <AboutIntro />
      <div className="app-container mt-[50px]">
        <div className="section-flex_row xl:mr-[200px] mr-[0px]">
          <img src={easyImplementationImg} alt="easyImplementationImg" />
          <div className="xl:text-left text-center">
            <h2 className="text-[45px] font-bold mb-[24px]">
              Easy to implement
            </h2>
            <p>
              Our API comes with just a few lines of code. You'll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="section-flex_row relative">
          <div className="absolute right-[-500px] top-[-100px] z-[1]">
            <img src={CirclePattern} className="w-full" alt="circle-bg" />
          </div>
          <div className="xl:mr-[20px] mr-[0px] xl:text-left text-center xl:order-[1] order-[2]">
            <h2 className="text-[45px] font-bold mb-[24px]">Simple UI & UX</h2>
            <p>
              Our pre-built form is easy to integrate in your app or website's
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <img src={simpleUiImg} className="z-[2]" alt="simpleUiImg" />
        </div>
        <div className="section-grid xl:mt-[40px] mt-[80px]">
          <div className="section-grid-content">
            <img src={personalFinancesImg} alt="personalFinancesImg" />
            <h4 className="my-[16px] font-bold text-2xl">Personal Finances</h4>
            <p>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyse reports to
              reconcile activities in your account
            </p>
          </div>
          <div className="section-grid-content">
            <img src={bankingImg} alt="" />
            <h4 className="my-[16px] font-bold text-2xl">Banking & Coverage</h4>
            <p>
              With our platform, you can speed up account onboarding and
              suppport ongoing payments for checking, saving, credit card and
              brokerage accounts.
            </p>
          </div>
          <div className="section-grid-content">
            <img src={ConsumerImg} alt="ConsumerImg" />
            <h4 className="my-[16px] font-bold text-2xl">Consumer Payments</h4>
            <p>
              It's easier to set up secure bank payment with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
