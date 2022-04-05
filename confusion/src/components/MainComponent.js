import Menu from "./MenuComponent";
import DISHES from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import React, { Component } from "react";
import DishDetail from './DishdetailComponent';
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Routes, Route, Navigate as Redirect, useParams } from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      leaders: LEADERS
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Routes>
              <Route path='/home' element={<Home dish={this.state.dishes.find(e => e.featured)} promotion={this.state.promotions[0]} leader={this.state.leaders[0]}/>} />
              <Route path='/contactus' element={<Contact/>} />
              <Route path='/aboutus' element={<About leaders={this.state.leaders}/>} />
              <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>}/>
              <Route path={`menu/:id`} element={<RenderDishDetails dishes={this.state.dishes} comments={this.state.comments}/>}/>
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


export default Main;
