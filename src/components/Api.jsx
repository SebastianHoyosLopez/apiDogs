import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import Pagination from "rc-pagination";

class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      count: 1,
      isFetch: true,
    };
  }

  onClickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.count}`)
      .then((response) => response.json())
      .then((data) => this.setState({ characters: data, isFetch: false }));
  }

  ckeckSelectState(id) {
    const exist = this.props.cart.find((item) => item.id === id);
    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.state.isFetch) {
      return "loading...";
    }

    const characters = this.state.characters.results;
    const pagesInfo = this.state.characters.info;
    console.log(this.props.cart);
    return (
      <div className="container text-center my-4">
        <Pagination
          pageSize={pagesInfo.count}
          total={pagesInfo?.total}
          onChange={(page) => this.onClickHandler(this.setState())}
        />
        <div className="row">
          {characters.map((character) => {
            return (
              <div key={character.id} className="col-sm-6 col-lg-3">
                <div className="card my-2">
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt="image"
                  />
                  <button
                    onClick={() => this.props.onAddToCart(character)}
                    className="btn btn-dark my-2"
                    disabled={this.ckeckSelectState(character.id)}
                  >
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

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (item) => {
    dispatch(addToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Api);
