import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    state = {
        name: 'Eduardo Aben Athar',
        contador: 0
    };

    handlePClick = () => {
        this.setState({name: "Eduardo 2"})
    }

    handleAClick = (event) => {
        event.preventDefault();
        const { contador } = this.state;
        this.setState({contador: contador + 1})
    }

    render() {
        const { name, contador } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p onClick={this.handlePClick}>
                        Olá Mundo! {name}
                        <br/>
                        Contador: {contador}
                    </p>
                    <a onClick={this.handleAClick} className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer">
                        Learn React Now
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
