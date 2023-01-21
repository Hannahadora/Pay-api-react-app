import HeaderComponent from '../../src/components/HeaderComponent'
import AboutIntro from '../components/AboutIntro';
import easyImplementationImg from '../assets/home/desktop/illustration-easy-to-implement.svg'
import simpleUiImg from '../assets/home/desktop/illustration-simple-ui.svg'
import personalFinancesImg from '../assets/home/desktop/icon-personal-finances.svg'
import bankingImg from '../assets/home/desktop/icon-banking-and-coverage.svg'
import ConsumerImg from '../assets/home/desktop/icon-consumer-payments.svg'

const Home = () =>{
  return (
    <div className="">
      <HeaderComponent />
      <AboutIntro />
      <div className='app-container mt-[32px]'>
        <div className='section-flex_row text-3xl mr-[200px]'>
          <img src={easyImplementationImg} alt='easyImplementationImg' />
          <div className=''>
            <h2 className='text-[45px] font-bold mb-[24px]'>Easy to implement</h2>
            <p> Our API comes with just a few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div>
        </div>
        <div className='section-flex_row'>
          <div className=''>
            <h2>Easy to implement</h2>
            <p> Our API comes with just a few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div>
          <img src={simpleUiImg} alt='' />
        </div>
        <div className='section-grid'>
          <div className='section-grid-content'>
            <img src={personalFinancesImg} alt='' />
            <h4>Personal Finances</h4>
            <p> Our API comes with justa few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div>
          <div className='section-grid-content'>
            <img src={bankingImg} alt='' />
            <h4>Banking & Coverage</h4>
            <p> Our API comes with justa few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div>
          <div className='section-grid-content'>
            <img src={ConsumerImg} alt='' />
            <h4>Consumer Payments</h4>
            <p> Our API comes with justa few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
