import Menu from "./MenuComponent";
import DISHES from "../shared/dishes";
import { Component } from "react";
import DishDetail from './DishdetailComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
      this.setState({
          selectedDish: dishId
      })
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.find(e => e.id === this.state.selectedDish)}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
