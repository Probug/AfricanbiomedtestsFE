import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/team-1.png";
import team2 from "../../assets/images/team/team-2.png";
import team3 from "../../assets/images/team/team-3.png";
import team4 from "../../assets/images/team/team-4.png";

// new image
import cl1 from "../../assets/images/clients/client1.png";
import cl2 from "../../assets/images/clients/client2.png";
import cl3 from "../../assets/images/clients/client3.png";
import cl4 from "../../assets/images/clients/client4.png";

class OurTeam extends Component {
    // state = {
    //     members: [
    //         {
    //             id: 1, name: "SAMMIE R. PROVENCAL", image: cl1, post: "CEO/Founder"
    //         },
    //         {
    //             id: 2, name: "EDITH E. WHEELER", image: cl2, post: "CTO/Co-Founder"
    //         },
    //         {
    //             id: 3, name: "PAULINE T. ROACH", image: cl3, post: "Web Designer"
    //         },
    //         {
    //             id: 4, name: "DONALD M. LAUGHLIN", image: cl4, post: "Web Developer"
    //         },
    //     ]
    // }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                        <SectionTitle title1="" title2="" />
                        <Row className="mt-4 pt-4">
                            {/* <TeamBox members={this.state.members} /> */}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;