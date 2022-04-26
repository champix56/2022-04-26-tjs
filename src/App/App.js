import React from "react";
import Button from "./components/Button/Button";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0,
      uneData: "Demat breizh",
    };
  }
  componentDidMount() {
    console.log("le composant est monté et pret a servir", arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    console.log(
      "%c%s",
      "font-size:24pt;color:red;font-weight:900",
      "--PREV-----------NEW--"
    );
    console.log(prevState, this.state);
  }
  render() {
    return (
      <div className="App" data-testid="App">
        <div>Valeur du compteur : {this.state.compteur}</div>

        <Button
          bgColor="skyblue"
          onButtonClicked={() => {
            this.setState({ compteur: this.state.compteur + 1 });
            console.log(this.state.compteur);
          }}
        >
          +1
        </Button>
        <Button bgColor="tomato">-1</Button>
      </div>
    );
  }
}

export default App;
