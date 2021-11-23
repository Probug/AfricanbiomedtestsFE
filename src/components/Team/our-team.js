import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import img1 from "../../assets/images/icons/corona.png";
import img2 from "../../assets/images/icons/babe.png";
import img3 from "../../assets/images/icons/dna2.png";
import img4 from "../../assets/images/icons/health.png";
import img5 from "../../assets/images/icons/family.png";
import img6 from "../../assets/images/icons/medical.png";


class OurTeam extends Component {
    state = {
        members: [
            {
                id: 1, name: "COVID-19 & ANTIBODY TESTING", image: img1, post: "Real-time reverse transcription polymerase chain reaction (RT-PCR) test can be done on respiratory samples to detect the presence of the virus."
            },
            {
                id: 2, name: "NEWBORN SCREENING", image: img2, post: "We provide newborn screening for your little one within the first few days of birth. Through our website, partner Hospitals, Pharmacies and Medical Labs."
            },
            {
                id: 3, name: "FORENSIC DNA TESTING", image: img3, post: "We provide DNA testing services for non-legal and legal paternity and forensic DNA testing for the private individual, law enforcement and judicial users."
            },
            {
                id: 4, name: "WELLNESS DNA TESTING", image: img4, post: "With our wellness, you can go for inexpensive, time-efficient genetic profiling to determine your predisposition to certain diseases and conditions."
            },
            {
                id: 5, name: "PATERNITY TESTING", image: img5, post: "Our DNA analysis can be used to trace the authenticity of foods, feed and fiber origins and classification and may guard against counterfeit products."
            },
            {
                id: 6, name: "CLINICAL TESTING", image: img6, post: "We provide clinical DNA testing services, through partnership with Hospitals, Clinics and Labs for tests in cardiology, endocrinology, microbiology etc."
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                        <SectionTitle title1="Our" title2="Partners" />
                        <Row className="mt-3 pt-3">
                            <TeamBox members={this.state.members} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;