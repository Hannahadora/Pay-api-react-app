import React from "react";

const About = () => {
  return (
    <div className="app-container">
      <div className="lg:w-[75%] w-[100%] mx-auto">
        <h3 className="font-bold text-[48px] lg:mr-[280px]">
          We empower innovators by delivering access to the financial system
        </h3>
        <div className="flex items-start justify-between my-[60px]">
          <h6 className="w-[30%] font-semibold font-[30px]">Our Vision</h6>
          <p>
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div className="flex items-start justify-between mt-[40px]">
          <h6 className="w-[25%] font-semibold font-[30px]">Our Business</h6>
          <p>
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
