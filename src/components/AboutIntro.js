import CirclePattern from '../assets/shared/desktop/bg-pattern-circle.svg'

function AboutIntro({ title }) {
    return (
      <div className="about-intro-section">
        <div className="app-container">
        <div className='circle-pattern-holder'>
          <img src={CirclePattern} className="circle-bg" alt="circle-bg" />
        </div>
        </div>
      </div>
    );
  }
  
  export default AboutIntro;