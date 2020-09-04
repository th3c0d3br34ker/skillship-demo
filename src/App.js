import React, { Component } from "react";

import Community from "./components/Community.jsx";
import Greetings from "./components/Greetings.jsx";
import Header from "./components/Header.jsx";
import PageLoader from "./components/Loader.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import TopButton from "./components/TopButton";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <PageLoader />
        ) : (
          <React.Fragment>
            <Header />
            <Greetings />
            <Community />
            <SocialMedia />
            <TopButton />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
