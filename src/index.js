import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class AddTasks extends React.Component {
    render() {
        return (
        <div>Add a task</div>
        )
    }
}

class TaskList extends React.Component {
    render() {
        return (
        <div>{this.props.purpose}</div>
        )
    }
}
class App extends React.Component { //App banayi jo react ka component ha!
    render(){
        const name = "Tapish"
        return(
            // <h1>Hello {name}</h1>
            <>
            <h1>Hello {name}</h1>
                <AddTasks /><TaskList purpose="Tasks to do" /><TaskList purpose="Finished Tasks" /></>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); //render function me jo bhi humne likha vo app me ha aur vo root me display hoga