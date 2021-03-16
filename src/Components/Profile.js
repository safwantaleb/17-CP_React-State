import React, { Component } from "react";
import ProfPhoto from "./imgSrc";
import Name from "./fullName";
import Bio from "./bio";
import Profession from "./profession";

const state = {
  Name: "Shin'ichi Kudo (Conan)",
  Prof: "Detective",
  Bio:
    "Hi, I am the most famous detective in the world, I am passionate with investigation in criminal cases.",
  Photo: { ProfPhoto },
};

class Profile extends Component {
  state = {
    timer: 0,
  };

  componentWillMount() {
    console.log("Component Will Mount()");
  }

  componentDidMount() {
    console.log("Component did Mount()");

    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }

  render() {
    console.log("Render()");

    const TIME = () => {
      var ss = this.state.timer % 60;
      var mn = Math.floor((this.state.timer / 60) % 60);
      var hh = Math.floor(this.state.timer / (60 * 60));
      return `${hh} H: ${mn} M: ${ss} S`;
    };

    return (
      <div>
        <h3>
          <TIME />
        </h3>
        <Name fullName={state.Name} />
        <ProfPhoto photo={state.Photo} />
        <Profession profession={state.Prof} />
        <Bio bio={state.Bio} />
      </div>
    );
  }
}

export default Profile;
