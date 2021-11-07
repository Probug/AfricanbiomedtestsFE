import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Slider
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Images
import img1 from "../../assets/images/clients/1.png";
import img2 from "../../assets/images/clients/2.png";
import img3 from "../../assets/images/clients/3.png";
import img4 from "../../assets/images/clients/4.png";
import img5 from "../../assets/images/clients/5.png";
import img6 from "../../assets/images/clients/6.png";
import img7 from "../../assets/images/clients/7.png";
import user from "../../assets/images/clients/user-1.png";
// new adds
import cl1 from "../../assets/images/clients/client1.png";
import cl2 from "../../assets/images/clients/client2.png";
import cl3 from "../../assets/images/clients/client3.png";
import cl4 from "../../assets/images/clients/client4.png";

class Clients extends Component {
  state = {
    clients: [
      { id: 1, img: cl1 },
      { id: 2, img: cl2 },
      { id: 3, img: cl3 },
      { id: 4, img: cl4 },
      { id: 1, img: cl1 },
      { id: 2, img: cl2 },
      { id: 3, img: cl3 },
      { id: 4, img: cl4 },
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };
  render() {

    const styleObject = {
      whiteSpace: 'nowrap',
      display: 'inline',
      backgroundColor: 'green',
      backgroundPosition: 'center',

    };
    return (
      <React.Fragment>
        <section className="section bg-light" id="client">
          <Container>
            <SectionTitle title1="Our" title2="Partners" />
            <Row >
              <Col lg="8">
                <div >

                  {/* //className="testimonial-box text-center" 
className="mt-4 pt-4 justify-content-center"*/
                  }
                  <div style={styleObject}>
                    <img
                      src={cl1}
                      alt="logo"
                      style={styleObject}
                    />
                    <img
                      src={cl2}

                      alt="logo"
                      style={styleObject}
                    />
                    <img
                      src={cl3}

                      alt="logo"
                      style={styleObject}
                    />
                    <img
                      src={cl4}

                      alt="logo"
                      style={styleObject}
                    />

                  </div>



                </div>
              </Col>
            </Row>

            <Row className="pt-4 mt-4">
              <Col sm="12">
                <OwlCarousel
                  className="owl-theme client-images text-center"
                  items={5}
                  loop={false}
                  margin={10}
                  nav={false}
                  dots={false}
                  responsive={this.state.responsive}
                >
                  {this.state.clients.map((client, key) => (
                    <div className="item" key={key} style={{ width: 222 }}>
                      <div className="">
                        <img src={client.img} alt="logo-img" />
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
