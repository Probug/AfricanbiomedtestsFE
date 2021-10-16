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

class OurTeam extends Component {
    state = {
        members : [
            { id : 1, name : "SAMMIE R. PROVENCAL", image : team1, post : "CEO/Founder",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 2, name : "EDITH E. WHEELER", image : team2, post : "CTO/Co-Founder",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 3, name : "PAULINE T. ROACH", image : team3, post : "Web Designer",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 4, name : "DONALD M. LAUGHLIN", image : team4, post : "Web Developer",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
        <section className="section" id="team">
            <Container>
                <SectionTitle title1="Our" title2="Team" />
                <Row className="mt-4 pt-4">
                    <TeamBox members={this.state.members} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;