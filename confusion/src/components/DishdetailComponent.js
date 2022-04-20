import { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else {
      return <div></div>;
    }
  }

  options() {
    return {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
  }
  /**
   * Method to render comments on a particular selected dish
   * @param {*} dish Selected Dish
   * @returns the view showing all of the comments
   */
  renderComments(comments) {
    if (comments.length) {
      const dishId = comments[0].dishId;
      const commentsInfo = comments.map((element) => {
        return (
          <ul key={element.id} className="list-unstyled">
            <li>{element.comment}</li>
            <li>
              -- {element.author},{" "}
              {new Intl.DateTimeFormat("en-US", this.options()).format(
                new Date(Date.parse(element.date))
              )}
            </li>
          </ul>
        );
      });
      return (
        <Fragment>
          <Fragment>{commentsInfo}</Fragment>
          <Fragment>
            <CommentForm addComment={this.props.addComment} dishId={dishId}/>
          </Fragment>
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(this.props.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
