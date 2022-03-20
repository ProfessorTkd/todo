import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class App extends React.Component { //App banayi jo react ka component ha!
    render(){
        const name = "Tapish"
        return(
            <h1>Hello {name}</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); //render function me jo bhi humne likha vo app me ha aur vo root me display hoga