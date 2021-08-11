import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

class QuoteForm extends Component {

  state = {
    id: uuid(),
    content: "",
    author: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const quote = {
      id: this.state.id,
      content: this.state.content,
      author: this.state.author,
      votes: 0
    }

    this.props.addQuote(quote)

    this.setState({
      content: "",
      author: ""
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addQuote: quote => dispatch({ type: "ADD_QUOTE", quote })
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
