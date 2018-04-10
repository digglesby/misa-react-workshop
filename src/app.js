/*
* /src/app.js
*
* This is our starting react component!
*/
import React from 'react';
import QuoteList from './QuoteList.js';

class App extends React.Component {
  constructor(){
    //Constructor runs once when the element is first rendered, but will not be
    //called again when the component is updated
    super();

  }

  render() {
    //Render runs once every DOM update, and should return XML or null
		return (
      <div>
			   <h1>Hello MISA! UPDATE!</h1>
         <QuoteList quotes={["GNU is not unix","Hello World","A box of fun"]} />
         <QuoteList quotes={["Hello Misa", "React is fun I guess?"]} />
      </div>
		);
  }
}


export default App;
