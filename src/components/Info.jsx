import React from "react";
import { connect } from "react-redux";
import { characterDelete } from "../redux/actions";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  itemDelete(item) {
    this.props.onCharacterDelete(item)
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
                <div className="text-center">
                  <button
                    onClick={() => this.itemDelete(character.id)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
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

const mapDispatchToProps = (dispatch) => ({
  onCharacterDelete: () => {
    dispatch(characterDelete());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
