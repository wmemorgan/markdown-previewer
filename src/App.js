import React, { Component } from 'react'
import './App.css'
import marked from 'marked'

class App extends Component {
  state = { content: ''}
  
  componentDidMount() {
    const defaultContent = require("./default.md");

    fetch(defaultContent)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          content: text
        })
      })
  }

  updateContent = (e) => {
    this.setState({ content: e.target.value })
  }

  render() {
    let { content } = this.state
    return (
      <div className="container">
        <div className="markdown-editor sub-container">
          <label htmlFor="editor" className="label">Editor</label>
          <textarea
            id="editor"
            className="textarea"
            value={this.state.content}
            onChange={this.updateContent}>
          </textarea>
        </div>
        <div id="preview" className="markdown-previewer sub-container">
          <label htmlFor="preview" className="label">Previewer</label>
          <div dangerouslySetInnerHTML={{__html:marked(content)}}>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
