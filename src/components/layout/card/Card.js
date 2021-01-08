import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

import "./Card.css";

export default class Stories extends Component {
    render() {
        return (
            <div>
                <ul className="stories">
                    {this.props.stories.map(story => (
                        <li key={story.referenceNumber}>
                            <Card className="storyCard d-flex flex-row align-content-center m-2">
                                <Card.Img className="featureImage" src={story.photo} />
                                <Card.Body>
                                    <div className="d-flex flex-row justify-content-between mb-3">
                                        <small className="featureDate">{story.postDate}</small>
                                        <small className="featureCity">{story.location}</small>
                                    </div>
                                    <a href={"#" + story.referenceNumber}>
                                        <Card.Title className="featureTitle mb-1">{story.title}</Card.Title>
                                    </a>

                                    <Card.Text className="featureContent">{story.story}</Card.Text>
                                </Card.Body>
                            </Card>
                        </li>
                    ))}
                </ul>    
            </div>
        )
    }
}

// export default StoryCard
