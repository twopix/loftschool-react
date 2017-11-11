import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

let id = 0;

function getPostId() {
  ++id;
  return id;
}

class App extends Component {
  state = {
    newsInput: "",
    news: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { newsInput, news } = this.state;
      const newPost = { text: newsInput, id: getPostId() };

      this.setState({ newsInput: "", news: [...news, newPost] });
    }
  };

  render() {
    const { newsInput, news } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h2 className="header__title">Create new Post</h2>
          <div className="post">
            <label htmlFor="post-input" className="post__label">
              post text
            </label>
            <input
              type="text"
              className="post__input"
              id="post-input"
              placeholder="enter new text post"
              value={newsInput}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </div>
        </div>
        <div className="news-container">
          <h3 className="news-title">News:</h3>
          {news.map(newsItem => (
            <NewsPost text={newsItem.text} key={newsItem.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
