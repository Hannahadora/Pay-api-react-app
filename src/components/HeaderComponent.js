import CirclePattern from '../assets/shared/desktop/bg-pattern-circle.svg'

function HeaderComponent() {
  return (
    <div className="header">
      <div className="app-header">
        <div className='circle-bg-holder'>
          <img src={CirclePattern} className="circle-bg" alt="circle-bg" />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;