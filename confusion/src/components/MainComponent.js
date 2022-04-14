import Menu from "./MenuComponent";
import React, { Component } from "react";
import DishDetail from './DishdetailComponent';
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Routes, Route, Navigate as Redirect, useParams, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
    
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes>
              <Route path='/home' element={<Home dish={this.props.dishes.find(e => e.featured)} promotion={this.props.promotions[0]} leader={this.props.leaders[0]}/>} />
              <Route path='/contactus' element={<Contact/>} />
              <Route path='/aboutus' element={<About leaders={this.props.leaders}/>} />
              <Route exact path='/menu' element={<Menu dishes={this.props.dishes}/>}/>
              <Route path={`menu/:id`} element={<RenderDishDetails dishes={this.props.dishes} comments={this.props.comments}/>}/>
              <Route path="*" element={<Redirect to="/home"/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

function RenderDishDetails(props) {
  const { id } = useParams();
  const { dishes, comments } = props;
  const dish = dishes.find(dish => dish.id === parseInt(id))
  const commentList = comments.filter(comment => comment.dishId === parseInt(id))
  return(
    <DishDetail dish={dish} comments={commentList}/>
  )
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(connect(mapStateToProps)(Main));
