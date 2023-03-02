import React from "react";
import teamMembersPhoto from "../assets/about/desktop/image-team-members.jpg";

const About = () => {
  return (
    <div className="">
      <div className="app-container">
        <div className="xl:w-[75%] lg:w-[80%] w-[100%] mx-auto">
          <h3 className="font-bold lg:text-[48px] text-[30px] lg:mr-[280px] lg:text-left text-center">
            We empower innovators by delivering access to the financial system
          </h3>
          <div className="flex lg:flex-row flex-col lg:items-start itesm-center justify-between my-[60px]">
            <h6 className="lg:text-[18px] text-base lg:w-[30%] w-[100%] lg:text-left text-center font-semibold font-[30px]">
              Our Vision
            </h6>
            <p className="lg:text-left text-center">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-start itesm-center justify-between mt-[40px]">
            <h6 className="lg:text-[18px] text-base lg:w-[25%] w-[100%] lg:text-left text-center font-semibold font-[30px]">
              Our Business
            </h6>
            <p className="lg:text-left text-center">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:my-[60px] my-[5px]">
        <img src={teamMembersPhoto} alt="teamMembersPhoto" />
      </div>
      <div className="app-container">
        <div className="xl:w-[75%] lg:w-[80%] w-[100%] mx-auto">
          <div className="flex lg:flex-row flex-col lg:items-start itesm-center justify-between my-[60px]">
            <h6 className="lg:text-[18px] text-base lg:w-[28%] w-[100%] lg:text-left text-center font-semibold font-[30px]">
              The Culture
            </h6>
            <p className="lg:text-left text-center">
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-start itesm-center justify-between mt-[40px]">
            <h6 className="lg:text-[18px] text-base lg:w-[15%] w-[100%] lg:text-left text-center font-semibold font-[30px]">
              The People
            </h6>
            <p className="lg:text-left text-center">
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
