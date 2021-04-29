import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";

class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Dogs: [],
      isFetch: true,
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/hound/images")
      .then((response) => response.json())
      .then((data) => this.setState({ Dogs: data.message, isFetch: false }));
  }

  render() {
    if (this.state.isFetch) {
      return "loading...";
    }
    const dogs = this.state.Dogs;
    const { cart } = this.props;
    const { addToCart } = this.props;

    console.log(cart);

    return (
      <div className="container">
        <div className="row">
          {dogs.map((dogs, index) => {
            return (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="card my-2">
                  <img
                    src={dogs}
                    className="card-img-top"
                    alt="imagen"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <button onClick={addToCart()} className="btn btn-dark my-2">
                    Select
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

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);
