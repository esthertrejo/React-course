import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    renderDish(dish) {
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    renderComments(comments) {
        const commentsList = comments.map((c) => {
            return(
                <div key = {c.id}>
                    <li className="m-2">{ c.comment }</li>
                    <li>{ '-- ' + c.author }</li>
                </div>
            )
        });

        return commentsList;
    }

    render() {
        const dish = this.props.selectedDish;

        if(dish != null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            { this.renderComments(dish.comments) }
                        </ul>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
        
    }
}

export default Dishdetail;