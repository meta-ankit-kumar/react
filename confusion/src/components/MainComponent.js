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
import { Routes, Route, Navigate as Redirect } from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      leaders: LEADERS,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
      this.setState({
          selectedDish: dishId
      })
  }
  onDishClick() {
    return (dishId) => {
      this.onDishSelect(dishId);
    }
  }

  renderDishDetailComponentConditionally() {
      if(this.state.selectedDish != null)
        return(
            <DishDetail dish={this.state.dishes.find(e => e.id === this.state.selectedDish)}/>
        )
  }
  render() {
    return (
      <div>
        <Header/>
        <Routes>
              <Route path='/home' element={<Home dish={this.state.dishes.find(e => e.featured)} promotion={this.state.promotions[0]} leader={this.state.leaders[0]}/>} />
              <Route path='/contactus' element={<Contact/>} />
              <Route exact path='/menu' element={<Menu dishes={this.state.dishes} onClick={this.onDishClick()}/>}/>
              <Route path="*" element={<Redirect to="/home"/>}/>
        </Routes>
        {/* {this.renderDishDetailComponentConditionally()} */}
        <Footer/>
      </div>
    );
  }
}

export default Main;
