import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./components/Api";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import { loadCart } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  componentDidMount() {
    this.props.onLoadCart()
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route component={Api} path="/api" exact/>
            <Route component={Info} path="/" exact/>
          </Switch>
        </div>
      </Router>
    );
  }
  }

  const mapDispatchToProps = (dispatch) => ({
    onLoadCart: () => {
      dispatch(loadCart())
    }
  })

export default connect(null, mapDispatchToProps)(App);
