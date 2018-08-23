import React, { Component } from 'react'
import './App.css'
import marked from 'marked'

//Carriage returns are rendered as <br>
marked.setOptions({
  breaks: true
}) 

//Rendered hyperlinks open up in new tab/page
const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

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
            <form>
              <textarea
                rows="80"
                id="editor"
                className="textarea"
                value={this.state.content}
                onChange={this.updateContent}>
              </textarea>
            </form>
        </div>
        <div className="markdown-previewer sub-container">
          <label htmlFor="preview" className="label">Previewer</label>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(content, { renderer: renderer })}}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
