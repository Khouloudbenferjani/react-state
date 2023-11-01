import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'I am a developer',
        imgSrc: 'image.jpg',
        profession: 'Software Engineer',
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
