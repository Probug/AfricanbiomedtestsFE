import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "reactstrap";
import BackgroundSlider from 'react-background-slider';
import AppIntroSlider from 'react-native-app-intro-slider';

//Import Images
import image1 from "../../assets/images/blackbaby1.jpeg";
import image2 from "../../assets/images/dna.jpg";


class Section extends Component {


    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
    }

    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };

    render() {
        return (
            <React.Fragment>
                <section className="back-slide" id="home">
                    {/* <BackgroundSlider
                    
                        images={[image1, image2]}
                        duration={5} transition={2}

                    /> */}


                    <AppIntroSlider
                        slides={slides}
                        onDone={this.on_Done_all_slides}
                        showSkipButton={true}
                        onSkip={this.on_Skip_slides}
                    />



                    const slides = [
                    {
                        key = 'k1',
                        title = 'Event Organizer',
                        text = 'Best Event Organizers',
                        image1 = [image1]
                    },
                    {
                        key = 'k2',
                        title = 'Event Organizer',
                        text = 'Best Event Organizers',
                        image2 = [image2]
                    } ]



                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg="10" className="text-center">
                                        <h6 className="home-title text-white">NEWBORN SCREENING IN NIGERIA FOR THE FIRST TIME</h6>
                                        <p className="pt-4 home-sub-title text-white mx-auto">A few drops of blood to know your child's future.
                                            <br />Find Out Today, Prices Start From ₦30,000</p>
                                        <button type="submit" className="btn btn-custom">LEARN MORE</button>

                                    </Col>
                                </Row>

                            </Container>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;