/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "reactstrap";
import BackgroundSlider from 'react-background-slider';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { StyleSheet, View, Text, Platform } from 'react-native';

//Import Images
import image1 from "../../assets/images/blackbaby1.jpeg";
import image2 from "../../assets/images/dna.jpg";

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});

const slides = [
    {
        key: 'k1',
        title: 'NEWBORN SCREENING IN NIGERIA FOR THE FIRST TIME',
        text: 'A few drops of blood to know your childs future. \n Find Out Today, Prices Start From ₦30,000',
        image: [image1],

    },
    {
        key: 'k2',
        title: 'PURCHASE KIT FOR PATERNITY DNA TEST',
        text: 'Free Shipping if DNA kit and full test is purchased for ₦100,000',
        image: [image2],

    }
]

class Section extends Component {


    constructor(props) {
        super(props);
        this.state = {

            show_Main_App: false

        };
    }

    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
    }

    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };

    render() {

        if (this.state.show_Main_App) {
            return (
                <View style={styles.MainContainer}>

                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}>

                        This is your main App screen After App Intro.

                    </Text>

                </View>
            );
        } else {
            return (
                <AppIntroSlider
                    slides={slides}
                    onDone={this.on_Done_all_slides}
                    showSkipButton={true}
                    onSkip={this.on_Skip_slides}
                />
            );
        }
    }



    // <React.Fragment>
    //     <section className="back-slide" id="home">
    //         <BackgroundSlider
    //             images={[image1, image2]}
    //             duration={5} transition={2}

    //         />


    //             <div className="bg-overlay"></div>
    //             <div className="home-center">
    //                 <div className="home-desc-center">
    //                     <Container>
    //                         <Row className="justify-content-center">
    //                             <Col lg="10" className="text-center">
    //                                 <h6 className="home-title text-white">NEWBORN SCREENING IN NIGERIA FOR THE FIRST TIME</h6>
    //                                 <p className="pt-4 home-sub-title text-white mx-auto">A few drops of blood to know your child's future.
    //                                     <br />Find Out Today, Prices Start From ₦30,000</p>
    //                                 <button type="submit" className="btn btn-custom">LEARN MORE</button>

    //                             </Col>
    //                         </Row>

    //                     </Container>

    //                 </div>
    //             </div>
    //         </section>
    //     </React.Fragment>
    // );
}



export default Section;