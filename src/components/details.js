import React from "react";
import Bounce from "react-reveal/Bounce";
class Details extends React.Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button
          className="butn"
          onClick={() => this.setState({ showing: !showing })}
        >
          {this.props.character.name}'s details
        </button>
        {showing ? (
          <Bounce bottom>
            <div className="card">
              <p className="detailsSection">
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
                <span>
                  Homeworld:{" "}
                  <a href={this.props.character.homeworld} target="_blank">
                    {this.props.character.homeworld}
                  </a>
                </span>
                <br />
                Films:{" "}
                {this.props.character.films.map(function(film) {
                  return (
                    <>
                      <span>
                        <a href={film} target="_blank">
                          {film}
                        </a>
                      </span>
                      <br />
                    </>
                  );
                })}
                <br />
                Species:{" "}
                <a href={this.props.character.species} target="_blank">
                  {this.props.character.species}
                </a>
                <br />
                Vehicles:{" "}
                {this.props.character.vehicles.map(function(vehicles) {
                  return (
                    <>
                      <span>
                        <a href={vehicles} target="_blank">
                          {vehicles}
                        </a>
                      </span>
                      <br />
                    </>
                  );
                })}
                <br />
                Starships:{" "}
                {this.props.character.starships.map(function(starships) {
                  return (
                    <>
                      <span>
                        <a href={starships} target="_blank">
                          {starships}
                        </a>
                      </span>
                      <br />
                    </>
                  );
                })}
              </p>
            </div>
          </Bounce>
        ) : null}
      </div>
    );
  }
}

export default Details;
