import React from "react";
import { connect } from "react-redux";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const characters = this.props.cart;
    return (
      <div className="container">
        <div className="row">
          {characters.map((character) => {
            return (
              <div key={character.id} className="col-sm-6 col-lg-3">
                <div className="card my-2">
                  <img
                    className="card-img-top"
                    src={character.image}
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
