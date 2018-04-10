/*
* /src/app.js
*
* This is our starting react component!
*/
import React from 'react';

class QuoteList extends React.Component {
  constructor(){
    //Constructor runs once when the element is first rendered, but will not be
    //called again when the component is updated
    super();

    this.state = {
      quotes:[]
    }

    this.b_addRandomQuote = this.addRandomQuote.bind(this);
  }

  addRandomQuote(){
    let newQuotes = this.state.quotes;

    newQuotes.push( this.props.quotes[ Math.round( (this.props.quotes.length - 1) * Math.random() ) ] );

    this.setState({
      quotes:newQuotes
    })
  }

  render() {
    //Render runs once every DOM update, and should return XML or null
    let quotes = [];

    for (var i = 0; i < this.state.quotes.length; i++) {
      quotes.push(<h2 key={i}> {this.state.quotes[i]} </h2>);
    }

		return (
      <div>
        <h1>My quotes</h1>
        {quotes}
        <button onClick={this.b_addRandomQuote}>Add a quote</button>
      </div>
		);
  }
}


export default QuoteList;
