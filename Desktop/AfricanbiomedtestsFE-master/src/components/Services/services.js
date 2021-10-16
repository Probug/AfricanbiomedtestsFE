import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services : [
            { title : "Digital Design", icon : "mbri-code", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore mag na aliqua." },
            { title : "Unlimited Colors", icon : "mbri-features", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore mag na aliqua." },
            { title : "Strategy Solutions", icon : "mbri-growing-chart", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore mag na aliqua." },
        ],
        services1 : [
            { title : "Awesome Support", icon : "mbri-photos", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore mag na aliqua." },
            { title : "Truly Multipurpose", icon : "mbri-responsive", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore mag na aliqua." },
            { title : "Easy to customize", icon : "mbri-download", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore mag na aliqua." },
        ],
        
    }
    render() {
        return (
            <React.Fragment>
        <section id="service" className="section">
            <Container>
            <SectionTitle title1="Best" title2="Services" />
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