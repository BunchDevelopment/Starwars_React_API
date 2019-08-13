import React from "react";

class Details extends React.Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ showing: !showing })}>
          Show {this.props.character.name}'s details
        </button>
        {showing ? (
          <p>
            Height: {this.props.character.height}
            <br />
            Mass: {this.props.character.mass}
            <br />
            Hair Color: {this.props.character.hair_color}
            <br />
            Skin Color: {this.props.character.skin_color}
            <br />
            Eye Color: {this.props.character.eye_color}
            <br />
            Birth Year: {this.props.character.birth_year}
            <br />
            Gender: {this.props.character.gender}
            <br />
            Homeworld: {this.props.character.homeworld}
            <br />
            Films:{" "}
            {this.props.character.films.map(function(film) {
              return (
                <>
                  <span>{film}</span>
                  <br />
                </>
              );
            })}
            <br />
            Species: {this.props.character.species}
            <br />
            Vehicles:{" "}
            {this.props.character.vehicles.map(function(vehicles) {
              return (
                <>
                  <span>{vehicles}</span>
                  <br />
                </>
              );
            })}
            <br />
            Starships:{" "}
            {this.props.character.starships.map(function(starships) {
              return (
                <>
                  <span>{starships}</span>
                  <br />
                </>
              );
            })}
          </p>
        ) : null}
      </div>
    );
  }
}

export default Details;
