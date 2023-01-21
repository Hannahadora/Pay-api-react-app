
import phoneIllustration from '../assets/home/desktop/illustration-phone-mockup.svg'
// import mobilePhoneIllustration from '../assets/shared/desktop/phone_mockup.svg'
import InputComponent from './InputComponent';

function HeaderComponent() {
  return (
    <div className="header">
      <div className="app-header">

        <div className='app-container'>

          <div className='intro-section'>
            <div className='intro-text'>
              <h1 className='text-[80px] font-bold leading-[85px]'>Start building with our APIs for absolutely free.</h1>
              <InputComponent className="intro-input" />
              <p className='mt-4 ml-6'>Have any questions? <a className='underline font-semibold' href='#'>Contact Us</a></p>
            </div>
            <div className='z-[20]'>
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