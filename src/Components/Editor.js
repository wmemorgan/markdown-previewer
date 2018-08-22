import React, { Component } from 'react';

class Editor extends Component {
  state = { content: '' }

  contentInput = (e) => {
    this.setState({ content: e.target.value })
    console.log('Input content is: ', this.state.content)
  }
  render() {
    return (
      <div className="container">
        <textarea
          rows="20" cols="80"
          id="editor"
          onChange={this.contentInput}>
        </textarea>
      </div>
    );
  }
}

export default Editor;