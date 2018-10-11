import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderComments(dish) {
        if (dish != null) {
            return dish.comments.map((item) => {
                let date = new Date(item.date).toISOString().slice(0, 10);;
                console.log(date)
                return (
                    <React.Fragment key={item.id}>
                        <li>{item.comment}</li>
                        <li>{item.author} {date}  </li>
                        <hr></hr>
                    </React.Fragment>
                );
            });

        } else return (<div></div>)
    }

    render() {
        let dish = this.props.dish;

        return (
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
                        {this.renderComments(dish)}
                    </ul>
                </div>
            </div>
        );
    }

}

export default DishDetail;