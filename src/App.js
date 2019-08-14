import React from "react";
import "./css/App.css";
import axios from "axios";
import Details from "./components/details";
export default class App extends React.Component {
  state = {
    characters: []
  };

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/?page=1")
      .then(response => {
        this.setState({ characters: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.characters);
    return (
      <div className="App">
        <div className="container">
          {this.state.characters.map(character => (
            <div className="sectionContainer">
              <h1 className="heading">{character.name}</h1>
              <Details character={character} />
              {/* <Details character={character} id={character.name} /> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
