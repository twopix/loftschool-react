import React, { Component } from "react";
import Comment from "./Comment";
import "./NewsPost.css";

let commentId = 0;

const getCommentId = () => ++commentId;

class NewsPost extends Component {
  state = {
    commentInput: "",
    comments: []
  };

  handleChange = event => {
    const commentInput = event.target.value;
    this.setState({ commentInput });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13 && this.state.commentInput) {
      const { commentInput, comments } = this.state;
      const newComment = { text: commentInput, id: getCommentId() };

      this.setState({
        commentInput: "",
        comments: [...comments, newComment]
      });
    }
  };

  handleDelete = id => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    });
  };

  render() {
    const { text } = this.props;
    const { commentInput, comments } = this.state;

    return (
      <div className="news">
        <p className="news__post">{text}</p>
        <div className="comments-wrapper">
          {comments.map(comment => (
            <Comment
              text={comment.text}
              key={comment.id}
              id={comment.id}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
        <input
          type="text"
          className="comment-input"
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default NewsPost;
