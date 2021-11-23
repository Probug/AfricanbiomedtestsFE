import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from '@mui/material/Button';

class GetStarted extends Component {
  render() {

    const styleObject = {

      display: 'inline',
      backgroundColor: 'green',


    };
    return (
      <React.Fragment>

        <section className="pt-4 pb-4 bg-custom">
          <Container >
            <Row>
              <Col md="9" className="text-black critarea-desc mt-3 mb-3" >
                12-Month Payment Plan is Available.
              </Col>
              <Col md="3" className="mt-3 mb-3 text-md-right" >
              <Button type="submit" id="submit" name="send" variant="contained" style={styleObject} color="success">APPLY HERE</Button>
                {/* <a href="#home" className="btn btn-outline-custom" style={styleObject}>
                  Apply Here
                </a> */}
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetStarted;
