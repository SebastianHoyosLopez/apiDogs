import React from "react";
import { connect } from "react-redux";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pokemones = this.props.cart;
    return (
      <div className="container">
        <div className="row">
          {pokemones.map((pokemon) => {
            return (
              <div key={pokemon.id} className="col-sm-6 col-lg-3">
                <div className="card my-2">
                  <img
                    className="card-img-top"
                    src={pokemon.image}
                    alt="pokemon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Info);
