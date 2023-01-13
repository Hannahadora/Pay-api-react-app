import CirclePattern from '../assets/shared/desktop/bg-pattern-circle.svg'
import phoneIllustration from '../assets/home/desktop/illustration-phone-mockup.svg'
// import mobilePhoneIllustration from '../assets/shared/desktop/phone_mockup.svg'
import InputComponent from './InputComponent';

function HeaderComponent() {
  return (
    <div className="header top-0 absolute">
      <div className="app-header">
        <div className='circle-bg-holder'>
          <img src={CirclePattern} className="circle-bg" alt="circle-bg" />
        </div> 

        <div className='app-container'>

          <div className='intro-section'>
            <div className='intro-text'>
              <h1>Start building with our APIs for absolutely free.</h1>
              <InputComponent className="intro-input" />
              <p>Have any questions? <a href='#'>Contact Us</a></p>
            </div>
            <div>
              <img src={phoneIllustration} alt='phone-mockup'/>
              {/* <img src={mobilePhoneIllustration} alt='phone-mockup'/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;