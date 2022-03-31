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
  onDishClick() {
    return (dishId) => this.onDishSelect(dishId);
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
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {this.renderDishDetailComponentConditionally()}
        <Footer/>
      </div>
    );
  }
}

export default Main;
