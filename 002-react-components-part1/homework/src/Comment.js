import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  handleDelete = () => {
    const { onDelete, id } = this.props;

    onDelete(id);
  };

  render() {
    const { text } = this.props;

    return (
      <div className="comment">
        <p>
          {text}
          <span className="delete" onClick={this.handleDelete}>
            X
          </span>
        </p>
      </div>
    );
  }
}

export default Comment;
