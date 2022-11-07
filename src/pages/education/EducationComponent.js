import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import Experience from "../experience/Experience";
import {
  competitiveSites,
  experience,
  projectsHeader,
  publicationsHeader,
} from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import PublicationData from "../../shared/opensource/publications.json";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Resume from "../experience/Resume";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              {/*<div className="heading-img-div">*/}
              {/*  <EducationImg theme={theme} />*/}
              {/*</div>*/}
              {/*<div className="projects-heading-text-div">*/}
              {/*  <h1*/}
              {/*      className="projects-heading-text"*/}
              {/*      style={{ color: theme.text }}*/}
              {/*  >*/}
              {/*    {publicationsHeader.title}*/}
              {/*  </h1>*/}
              {/*  <p*/}
              {/*      className="projects-header-detail-text subTitle"*/}
              {/*      style={{ color: theme.secondaryText }}*/}
              {/*  >*/}
              {/*    {publicationsHeader["description"]}*/}
              {/*  </p>*/}
              {/*</div>*/}
            </div>
          </Fade>
          {/*<Educations theme={this.props.theme} />*/}
          {/*<Certifications theme={this.props.theme} />*/}

          {/* Publications  */}

          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="repo-cards-div-main">
            {PublicationData.data.map((repo) => {
              return <PublicationCard repo={repo} theme={theme} />;
            })}
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
