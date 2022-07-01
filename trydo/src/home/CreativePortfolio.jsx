import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import Header from "../component/header/HeaderFour";

const PortfolioList = [
  {
    images: "9",
    category: "Html",
    title: "Textio & JDs - TA 4.0 Onboarding",
    link: "https://docs.google.com/presentation/d/1_2Ytdt4f96Sg8r_ku9A5qE5kYR2LRg62a7EW70KPcPQ/edit#slide=id.ga0f3892661_1_736",
  },
  {
    images: "8",
    category: "General",
    title: "Quick Reference Guide: Prod + Tech Recruiter Resources",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "7",
    category: "Recruiter Traingin",
    title: "Linkedin Recruiter Demo",
    link: "https://www.youtube.com/watch?v=S6mVwmCHShk",
  },
  {
    images: "1",
    category: "Developer",
    title: "The design is Thinking",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "The portfolio For Frelancer",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "You can see your Portfolio",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "The Language of Developer",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "The new Thinking for Design",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "The new Thinking for Design",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "Getting tickets to the big show",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "You can see your Portfolio",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
  {
    images: "1",
    category: "Freelancer",
    title: "Getting tickets to the big show",
    link: "https://docs.google.com/document/d/1X0-AMlr1TrQ1iOb_yYLl2QJ3iBP03_Td_RmoZgse7O8/edit",
  },
];

const CreativePortfolio = () => {
  return (
    <div className="creative-portfolio">
      <Helmet pageTitle="Recruiting Dashboard" />

      {/* Start Header Area  */}
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />
      {/* End Header Area  */}

      {/* Start Portfolio Area  */}
      <div className="creative-portfolio-wrapper bg_color--1">
        <div className="creative-portfolio-wrapper plr--10">
          <div className="row row--5">
            {PortfolioList.map((value, i) => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="portfolio-style--3">
                  <div className="thumbnail">
                    <a href="/portfolio-details">
                      <img
                        className="w-100"
                        src={`/assets/images/portfolio/portfolio-${value.images}.jpg`}
                        alt="Portfolio Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <p className="portfoliotype">{value.category}</p>
                    <h4 className="title">
                      {/* eslint-disable-next-line */}
                      <a href={value.link} target="_blank">
                        {value.title}
                      </a>
                    </h4>

                    <div className="portfolio-btn">
                      <a
                        className="rn-btn text-white"
                        href={value.link}
                        /* eslint-disable-next-line */
                        target="_blank"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default CreativePortfolio;
