import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";
import logo from "../../assets/images/Africanlogo.png";
class Footer extends Component {
    state = {
        footerItems: [
            {
                title: "More Info",
                links: [
                    { linkTitle: "Newborn Screening", link: "#" },
                    { linkTitle: "Paternity Testing", link: "#" },
                    { linkTitle: "Forensic DNA Testing", link: "#" },
                    { linkTitle: "Wellness DNA Testing", link: "#" },
                    { linkTitle: "Maternal Health Screening", link: "#" },
                    { linkTitle: "Molecular Cytogenetics", link: "#" },
                    { linkTitle: "Clinical DNA Testing", link: "#" }
                ]
            },
            {
                title: "resources",
                links: [
                    { linkTitle: "Blog", link: "#" },
                    { linkTitle: "Pricing", link: "#" },
                    { linkTitle: "Vacancy", link: "#" },
                    { linkTitle: "Help Center", link: "#" },
                    { linkTitle: "For Partners", link: "/hcpLogin" },
                    { linkTitle: "For Staff", link: "/login" },
                    { linkTitle: "Privacy Policy", link: "#" }
                ]
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row>
                            <Col lg="3">
                                <p className="text-uppercase footer-title"> <img src={logo} alt="logo" /></p>
                                <ul className="list-unstyled company-sub-menu" />
                                <div>AfricanBioMedTests™ is a registered trademark of African Medical Tests Ltd,
                                    provider of specialized medical testing services
                                    of newborn screening, maternal health testing,
                                    molecular diagnostics, and DNA testing in Nigeria.</div>
                            </Col>
                            {
                                this.state.footerItems.map((item, key) =>
                                    <Col lg="3" key={key}>
                                        <p className="text-uppercase footer-title">{item.title}</p>
                                        <ul className="list-unstyled company-sub-menu">
                                            {
                                                item.links.map((fLink, key) =>
                                                    <li key={key}><Link to={fLink.link}>{fLink.linkTitle}</Link></li>
                                                )
                                            }
                                        </ul>
                                    </Col>
                                )
                            }

                            <Col lg="3">
                                <p className="text-uppercase footer-title">Contact Us</p>
                                <div className="contact-us">
                                    <p><i className="mdi mdi-google-maps"></i> Liason Office:1A Akin Osiyemi Street Off Allen Avenue Ikeja, Lagos. <br />
                                        Head Office & Operations: JaaGee House 88, Km 6 Ibadan-Ife Expressway Ibadan</p>
                                    <p><i className="mdi mdi-cellphone-iphone"></i> +234 802 460 0677</p>
                                    <p><i className="mdi mdi-email-open-outline"></i> info@africanbiomedtests.com</p>
                                </div>
                                <ul className="footer-icons list-inline mt-4">
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-facebook"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-twitter"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-youtube-play"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-linkedin"></i></Link></li>
                                </ul>

                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Render footer links */}
                <FooterLinks />
            </React.Fragment>
        );
    }
}

export default Footer;