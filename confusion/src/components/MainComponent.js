import Menu from "./MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";
import DISHES from "../shared/dishes";
import { Component } from "react";
import DishDetail from './DishdetailComponent'
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ankit Bishnoi</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.find(e => e.id === this.state.selectedDish)}/>
      </div>
    );
  }
}

export default Main;
