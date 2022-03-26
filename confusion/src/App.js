import logo from './logo.svg';
import './App.css';
import Menu from "./MenuComponent"
import { Navbar, NavbarBrand } from 'reactstrap';
function App() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ankit Bishnoi</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
}

export default App;
