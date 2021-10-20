import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";
import img1 from "../../assets/images/corona.png";
import img2 from "../../assets/images/babe.png";
import img3 from "../../assets/images/dna2.png";
import img4 from "../../assets/images/health.png";
import img5 from "../../assets/images/family.png";
import img6 from "../../assets/images/medical.png";

class Services extends Component {
    state = {
        services: [
            { title: "COVID-19 & ANTIBODY TESTING", pho: img1, description: "Real-time reverse transcription polymerase chain reaction (RT-PCR) test can be done on respiratory samples to detect the presence of the virus." },
            { title: "NEWBORN SCREENING", pho: img2, description: "We provide newborn screening for your little one within the first few days of birth. Through our website, partner Hospitals, Pharmacies and Medical Labs." },
            { title: "FORENSIC DNA TESTING", pho: img3, description: "We provide DNA testing services for non-legal and legal paternity and forensic DNA testing for the private individual, law enforcement and judicial users." },
        ],
        services1: [
            { title: "WELLNESS DNA TESTING", pho: img4, description: "With our wellness, you can go for inexpensive, time-efficient genetic profiling to determine your predisposition to certain diseases and conditions." },
            { title: "PATERNITY TESTING", pho: img5, description: "Our DNA analysis can be used to trace the authenticity of foods, feed and fiber origins and classification and may guard against counterfeit products." },
            { title: "CLINICAL TESTING", pho: img6, description: "We provide clinical DNA testing services, through partnership with Hospitals, Clinics and Labs for tests in cardiology, endocrinology, microbiology etc." },
        ],

    }
    render() {
        return (
            <React.Fragment>
                <section id="service" className="section">
                    <Container>
                        <SectionTitle title1="OUR TESTING" title2="SERVICES" />
                        <Row className="pt-4 mt-4">
                            <ServiceBox services={this.state.services} />
                        </Row>
                        <Row>
                            <ServiceBox services={this.state.services1} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;