import React from "react";
import "./YoutubeURL.css";
import ReactPlayer from "react-player";

// Render a YouTube video player

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      url: "",
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ url: this.state.inputValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                style={{ margin: "20px" }}
                className="form-control"
                type="text"
                placeholder="http://youtu.be/navitoolkit"
              />
              <button style={{ margin: "20px" }} className="btn btn-primary bg-blue-500">
                입력
              </button>
            </form>
          </div>
          <ReactPlayer url={this.state.url} controls={true} />
        </header>
      </div>
    );
  }
}

export default App;
