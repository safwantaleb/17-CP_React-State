import "./App.css";
import Profile from "./Components/Profile";

import React from "react";

class App extends React.Component {
  state = {
    showProfile: false,
  };

  render() {
    return (
      <div className="App">
        <button
          className="on-off-btn"
          onClick={() => {
            this.setState({
              showProfile: !this.state.showProfile,
            });
          }}
        >
          {this.state.showProfile ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.showProfile && <Profile />}
      </div>
    );
  }
}

export default App;
