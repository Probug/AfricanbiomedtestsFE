import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    state = {
        pricings: [
            {
                id: 1, title: "NEWBORN SCREENING",
                features:
                    { description: "For the first time in Nigeria, you can have your newborn screened.", order: "ORDER SCREENING KIT" }

            },
            {
                id: 3, title: "OUR MEDICAL PARTNERS ",
                features:
                    { description: "Find the Partnering Centre nearest to you for collection and drop offs", order: "FIND CENTER" }

            },
            {
                id: 2, title: "PATERNITY DNA TESTING",
                features:
                    { description: "Free shipping in Lagos, If full DNA Test Kit is purchased for ₦100,000", order: "ORDER TEST KIT" }

            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-pricing bg-light" id="pricing">
                    <Container>

                        <Row className="mt-3 pt-4">
                            <PricingBox pricings={this.state.pricings} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;