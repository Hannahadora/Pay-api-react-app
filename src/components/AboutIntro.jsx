import CirclePattern from '../assets/shared/desktop/bg-pattern-circle.svg'
import ButtonComponent from './ButtonComponent';
import tesla_Icon from '../assets/shared/desktop/tesla.svg'
import microsoft_icon from '../assets/shared/desktop/microsoft.svg'
import hp_icon from '../assets/shared/desktop/hewlett-packard.svg'
import oracle_icon from '../assets/shared/desktop/oracle.svg'
import google_icon from '../assets/shared/desktop/google.svg'
import nvidia_icon from '../assets/shared/desktop/nvidia.svg'

function AboutIntro() {
  return (
    <div className="about-intro-section">
      <div className="app-container">
        <img src={CirclePattern} className="about-circle" alt="circle-bg" />
        <div className='about-intro_flex'>
          <div className='about-intro_text'>
            <h2 className='lg:text-[55px] md:text-[40px] text-[30px] font-bold'>Who we work with</h2>
            <p className='mb-[24px]'> Today, millions of people around the world have successfully connected
              their accounts to apps they love using our API. We provide developers
              with the tools they need to create easy and accessible experiences
              for their users.</p>
            <ButtonComponent title={'About'} sec={'sec-btn'} />
          </div>

          <div className='about_partners'>
            <img className='about_partners_icon' src={tesla_Icon} alt='tesla_icon' />
            <img className='about_partners_icon' src={microsoft_icon} alt='microsoft icon' />
            <img className='about_partners_icon' src={hp_icon} alt='hp icon' />
            <img className='about_partners_icon' src={oracle_icon} alt='oracle icon' />
            <img className='about_partners_icon' src={google_icon} alt='google icon' />
            <img className='about_partners_icon' src={nvidia_icon} alt='nvidia icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;