import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class AddTasks extends React.Component { // yeh add Task function hai!
    render() {
        return (
            // <>
            //     Add a task
            // </>
            <form>
                <input type="text" />
                <input type="button" value="ADD TASK" />
            </form>
        )
    }
}

class TaskList extends React.Component {// yeh task list function hai!
    render() {
        return (
        <div className={this.props.forStyling}>{this.props.purpose}</div>
        )
    }
}
class App extends React.Component { //App banayi jo react ka component ha!
    render(){
        const name = "Tapish"
        return(
            // <h1>Hello {name}</h1>
                <>
            {/* <h1>Hello {name}</h1> */}
                <div className="add-task">
                    <AddTasks />
                </div>
                
                <div className="task-lists">
                    <TaskList purpose="Tasks to do" forStyling="todo" />{/*yaha hum jo bhi purpose me dalenegy vo uper function me props me jayenga and yaha pr comment curly brackets ke ander aaty hai! */}
                    <TaskList purpose="Finished Tasks" forStyling="finished" />{/*parent component se child compoment tak imfo ese pochaty ha (attribute = uska naam)*/}
                </div>
                  </>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); //render function me jo bhi humne likha vo app me ha aur vo root me display hoga