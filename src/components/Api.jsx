import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import Pagination from "rc-pagination";

class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Pokemones: [],
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
      .then((data) => this.setState({ Pokemones: data, isFetch: false }));
  }

  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar las props):
    if (this.props.Pokemones !== prevProps.Pokemones) {
      this.fetchData(this.props.Pokemones.info);
    }
  }

  render() {
    if (this.state.isFetch) {
      return "loading...";
    }

    const poke = this.state.Pokemones.results;
    const pagesInfo = this.state.Pokemones.info;
    console.log(this.props.cart);
    return (
      <div className="container">
        <Pagination
          pageSize={pagesInfo.count}
          total={pagesInfo?.total}
          onChange={(page) => this.onClickHandler(this.setState())}
        />
        <button onClick={() => this.onClickHandler()}>siguiente</button>
        <div className="row">
          {poke.map((character) => {
            return (
              <div key={character.id} className="col-sm-6 col-lg-3">
                <div className="card my-2">
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt="imagen"
                  />
                  <button
                    onClick={() => this.props.onAddToCart(character)}
                    className="btn btn-dark my-2"
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
