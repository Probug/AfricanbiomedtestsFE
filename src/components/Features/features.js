import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from 'react-player'

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Images
import img1 from "../../assets/images/features/cross_section.jpg";
import FeatureBox from "../common/feature-box";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle title1="ABOUT" title2="US" />
            <Row className="mt-4 pt-4 vertical-content">
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class=""
                  title="AfricanBioMedTests™"
                  desc="AfricanBioMedTests™ is a registered trademark of African Medical Tests Ltd.
                   Provider of specialized Medical Testing Services of Newborn Screening, Maternal Health Testing, 
                   Molecular Diagnostics, and DNA Testing in Nigeria."
                  link="#"
                />
              </Col>
            </Row>
            <Row className="mt-5 vertical-content">
              <Col lg="6" className="mt-2">
                <FeatureBox
                  class="text-center"
                  title="NEWBORN SCREENING"
                  desc="For the first time in Nigeria, you can have your newborn screened at the hospital or you may purchase the kit from our website or from our partner pharmacy or supermarket, and go to a designated medical lab to have the blood sample taken for testing."
                  link="#"
                />
              </Col>
              <Col lg="6" className="mt-2">
                <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=4x7pA1MoYgI' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
