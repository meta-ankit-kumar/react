import Menu from "./MenuComponent";
import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import {
  Routes,
  Route,
  Navigate as Redirect,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/actionCreators";
import Loading from "./LoadingComponent";
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback'))
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                dish={this.props.dishes.dishes.find((e) => e.featured)}
                isLoading={this.props.dishes.isLoading}
                errorMessage={this.props.dishes.errorMessage}
                promotion={this.props.promotions[0]}
                leader={this.props.leaders[0]}
              />
            }
          />
          <Route path="/contactus" element={<Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
          <Route
            path="/aboutus"
            element={<About leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} errorMessage={this.props.dishes.errorMessage} />}
          />
          <Route path="/loading" element={<Loading />} />
          <Route
            path={`menu/:id`}
            element={
              <RenderDishDetails
                dishes={this.props.dishes.dishes}
                dishLoading={this.props.dishes.isLoading}
                dishErrorMessage={this.props.dishes.errorMessage}
                comments={this.props.comments}
                addComment={this.props.addComment}
              />
            }
          />
          <Route path="*" element={<Redirect to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

function RenderDishDetails(props) {
  const { id } = useParams();
  const { dishes, comments, dishLoading, dishErrorMessage } = props;
  console.log("IN renderDIshdetails", dishLoading)
  const dish = dishes.find((dish) => dish.id === parseInt(id));
  const commentList = comments.filter(
    (comment) => comment.dishId === parseInt(id)
  );
  return (
    <DishDetail
      isLoading={dishLoading}
      errorMessage={dishErrorMessage}
      dish={dish}
      comments={commentList}
      addComment={props.addComment}
    />
  );
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
