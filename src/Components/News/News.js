import React from 'react';
import { Card, Button } from "react-bootstrap";
import  "./News.css";

const News = (props) => {
    console.log(props.article);
    const {title, description, url} = props.article;
    return (
        <div className="col-md-5 card-design">
            <Card className="">
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;