import { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else {
            return(
                <div></div>
            );
        }
    }

    options() {
        return {
            year: 'numeric', month: 'short', day: '2-digit'
          };
    }
    /**
     * Method to render comments on a particular selected dish
     * @param {*} dish Selected Dish
     * @returns the view showing all of the comments
     */
    renderComments(dish) {
        if(dish) {
            return (
                dish.comments.map(element => {
                        return(
                            <ul key={element.id} className = "list-unstyled">
                                <li>{element.comment}</li>
                                <li>-- {element.author}, {new Intl.DateTimeFormat('en-US', this.options()).format(new Date(Date.parse(element.date)))}</li>
                            </ul>  
                        )
                    }
                )
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;