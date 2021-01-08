import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Explore.css";

import data from "../../../data.json";
import Card from "../../layout/card/Index";
import Filter from '../../layout/filter/Index';

class Explore extends React.Component {
    constructor(){
        super();
        this.state = {
            stories: data.stories,
            status: "",
            hospital: "",
            location: "",
        };
    }

    storiesStatus = (event) => {
        console.log(event.target.value)
        
    }

    storiesHospital = (event) => {
        console.log(event.target.value)
        
    }

    storiesLocation = (event) => {
        console.log(event.target.value)
        
    }

    render() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="exploreTitle d-flex flex-column">
                        <h6 className="exploreMain">Explore</h6>
                        <h1 className="exploreSub">The blood you donate gives someone another chance at life.</h1>
                    </Col>
                </Row>

                <Row>
                    <Filter status={this.state.status}
                    hospital={this.state.hospital}
                    location={this.state.location}
                    storiesStatus={this.storiesStatus}
                    storiesHospital={this.storiesHospital}
                    storiesLocation={this.storiesLocation}
                />
                </Row>

                <Row>
                    <div className="content explorePage">
                        <div className="main storiesContainer">
                            <Card className="storiesCard" stories={this.state.stories}></Card>  
                        </div>
                    </div>    
                </Row>

            </Container>
        </>
    )
    }
}

export default Explore;
