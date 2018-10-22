import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comments }) {
    return comments.comments.map((item) => {
        let date = new Date(item.date).toISOString().slice(0, 10);;
        return (
            <React.Fragment key={item.id}>
                <li>{item.comment}</li>
                <li>{item.author} {date}  </li>
                <hr></hr>
            </React.Fragment>
        );
    });
}

const DishDetail = (props) => {
    console.log('DishDetail Component render is invoked')
    let dish = props.dish;
    if (dish != null) {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled" >
                            <h4>Comments</h4>
                            <RenderComments comments={dish}></RenderComments>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default DishDetail;