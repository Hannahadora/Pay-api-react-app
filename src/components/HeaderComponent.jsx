import React, { useRef, useLayoutEffect }  from "react";
import phoneIllustration from "../assets/home/desktop/illustration-phone-mockup.svg";
// import mobilePhoneIllustration from '../assets/shared/desktop/phone_mockup.svg'
import InputComponent from "./InputComponent";
import gsap from "gsap";

function HeaderComponent() {
  const phoneRef = useRef();
  const introRef = useRef()

  useLayoutEffect(() => {
    gsap.to(phoneRef.current, {
      rotation: "360",
    });
  }, []);

  return (
    <div className="header">
      <div className="app-header">
        <div className="app-container">
          <div className="intro-section">
          <div className="intro-text" ref={introRef}>
              <h1 className="lg:text-[80px] lg:text-[50px] text-[40px] font-bold lg:leading-[85px]">
                Start building with our APIs for absolutely free.
              </h1>
              <InputComponent className="intro-input" />
              <p className="mt-4 ml-6">
                Have any questions?{" "}
                <a className="underline font-semibold" href="#">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="z-[20]" ref={phoneRef}>
              <img src={phoneIllustration} alt="phone-mockup" />
              {/* <img src={mobilePhoneIllustration} alt='phone-mockup'/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
