/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "reactstrap";
import BackgroundSlider from 'react-background-slider';
<<<<<<< HEAD
import AppIntroSlider from 'react-native-app-intro-slider';
// import { StyleSheet, View, Text, Platform } from 'react-native';
=======
// import AppIntroSlider from 'react-native-app-intro-slider';
>>>>>>> 9880db8cdd6452e652cba53991fdc2d387e4ac1c

//Import Images
import image1 from "../../assets/images/blackbaby1.jpeg"
import image2 from "../../assets/images/dna.jpg"
// imprort style
//import Styles from "./src/pages/Index/section.css"

class Section extends Component {


    render() {
        return (
            <React.Fragment>
                <section className="back-slide" id="home">
                    <BackgroundSlider
                        images={[image1, image2]}
                        duration={5} transition={2}

                    />

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
                        <div className="home-desc-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg="10" className="text-center">
                                        <h6 className="home-title text-white">PURCHASE KIT FOR PATERNITY DNA TEST</h6>
                                        <p className="pt-4 home-sub-title text-white mx-auto">Free Shipping if DNA kit and full test is purchased for ₦100,000  </p>
                                        <button type="submit" className="btn btn-custom">CREATE AN ACCOUNT</button>
                                        <p> </p>
                                        <button type="submit" className="btn btn-custom">BUY DNA KIT</button>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
            //-----------------------------------------------------------------------
            // <React.Fragment>
            //     <div class="slideshow-Container">

            //         <div class="home-desc-center">
            //             <Container>
            //                 <h6 className="home-title text-white">PURCHASE KIT FOR PATERNITY DNA TEST</h6>

            //                 <img src={image1} style="width:100%" />
            //                 <p className="pt-4 home-sub-title text-white mx-auto">Free Shipping if DNA kit and full test is purchased for ₦100,000  </p>
            //                 <button type="submit" className="btn btn-custom">CREATE AN ACCOUNT</button>
            //                 <p> </p>
            //                 <button type="submit" className="btn btn-custom">BUY DNA KIT</button>
            //             </Container>
            //         </div>

            //         <div class="home-desc-center">
            //             <Container>
            //                 <h6 className="home-title text-white">NEWBORN SCREENING IN NIGERIA FOR THE FIRST TIME</h6>
            //                 <img src={image2} style="width:100%" />
            //                 <p className="pt-4 home-sub-title text-white mx-auto">A few drops of blood to know your child's future.
            //                     <br /> Find Out Today, Prices Start From ₦30,000</p>
            //                 <button type="submit" className="btn btn-custom">LEARN MORE</button>
            //             </Container>
            //         </div>


            //         <a class="prev" onClick={plusSlides(-1)}>&#10094;</a>
            //         <a class="next" onClick={plusSlides(1)}>&#10095;</a>
            //         <div style="text-align:center">
            //             <span class="dot" onClick={currentSlide(1)}></span>
            //             <span class="dot" onClick={currentSlide(2)}></span>
            //             <span class="dot" onClick={currentSlide(3)}></span>
            //         </div>
            //     </div>
            // </React.Fragment>
        );
    }
}

// const slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


// function showSlides(n) {
//     const i = 0;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         return slides[i] = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         return dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1] = "block";
//     dots[slideIndex - 1].className += " active";
// }


export default Section;