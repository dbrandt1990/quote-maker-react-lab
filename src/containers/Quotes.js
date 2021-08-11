import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote) => {
                return (
                  <QuoteCard
                    key={quote.id}
                    upvoteQuote={this.props.upvoteQuote}
                    downvoteQuote={this.props.downvoteQuote}
                    delete={this.props.removeQuote}
                    quote={quote}
                  />
                )
              })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => dispatch({ type: "REMOVE_QUOTE", quoteId }),
    upvoteQuote: quoteId => dispatch({ type: "UPVOTE_QUOTE", quoteId }),
    downvoteQuote: quoteId => dispatch({ type: "DOWNVOTE_QUOTE", quoteId })
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
