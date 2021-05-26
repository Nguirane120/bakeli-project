import React from "react"
import Calendars from "../../../Apprenant/HomePageApp/Aside/Calendars";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'

const Aside = () => {
    return(
    
        <Card style={{ width: '20rem', paddingRight: "3px" }}>
                <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title className="text-primary border-bottom">Explore Events</Card.Title>
                <Card.Text>
                    <Calendars />
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    Webnaires <Badge variant="danger" className="mr-3">3</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Meetup <Badge variant="warning" className="mr-3">1</Badge>
                </ListGroup.Item>
                <ListGroup.Item>Journée d'integration</ListGroup.Item>
                <ListGroup.Item>Jéema codé</ListGroup.Item>
            </ListGroup>
        </Card>
        
    )
}
export default Aside;