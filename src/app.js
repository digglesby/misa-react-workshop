/*
* /src/app.js
*
* This is our starting react component!
*/
import React from 'react';

class App extends React.Component {
  constructor(){
    //Constructor runs once when the element is first rendered, but will not be
    //called again when the component is updated
    super();
    
  }

  render() {
    //Render runs once every DOM update, and should return XML or null
		return (
			<h1>Hello MISA! UPDATE!</h1>
		);
  }
}


export default App;
