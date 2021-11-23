import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import Button from '@mui/material/Button';

class PricingBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                        <Col lg="4" key={key} className="mt-3">
                            <div className="pricing-box bg-white text-center p-4">
                                <div className="plan-title mt-3 mb-4">
                                    <h5 className="mb-0">{pricing.title}</h5>
                                </div>
                                <div className="service-icon">
                                    <h6>{pricing.icon}</h6>
                                </div>
                                <div className="plan-features mt-4 mb-4">
                                    <p> {pricing.features.description}</p>
                                    <div className="mb-4">
                                    <Button type="submit" variant="contained" color="error">{pricing.features.order}</Button>
                                        {/* <Link to="#" className="btn btn-custom">{pricing.features.order}</Link> */}
                                    </div>
                                </div>

                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox;