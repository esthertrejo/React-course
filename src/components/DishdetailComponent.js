import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    function RenderComments({comments}) {
        const commentsList = comments.map((c) => {
            return(
                <div key = {c.id}>
                    <li className="m-2">{ c.comment }</li>
                    <li>{ '-- ' + c.author + ', ' + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date))) }</li>
                </div>
            )
        });

        return commentsList;
    }

    const Dishdetail = (props) => {
        const dish = props.dish;

        if(dish != null){
            return (
                <div className="container">                
                    <div className="row">
                        <RenderDish dish={dish} />
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                <RenderComments comments= { dish.comments } />
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
        
    }

export default Dishdetail;