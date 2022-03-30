import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
function RenderDish({ dish }) {
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

function options() {
  return {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
}

function RenderComments({ comments }) {
  if (comments) {
    return comments.map((element) => {
      return (
        <ul key={element.id} className="list-unstyled">
          <li>{element.comment}</li>
          <li>
            -- {element.author},{" "}
            {new Intl.DateTimeFormat("en-US", options()).format(
              new Date(Date.parse(element.date))
            )}
          </li>
        </ul>
      );
    });
  } else {
    return <div></div>;
  }
}
function DishDetail(props) {
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
  );
}

export default DishDetail;
