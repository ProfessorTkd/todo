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
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.purpose);
        // console.log(this.props.tasks); 
        let list = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
            let task = this.props.tasks[i];
            let listItem = (
            <li key={i}>
                <span>{task.desc}</span>
                <button>{this.props.purpose == "Todo" ? "do" : "undo"}</button>
                </li>
            )
            list.push(listItem);
        }
        return (
        <div className={this.props.forStyling}>
            <div>{this.props.purpose}</div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
class App extends React.Component { //App banayi jo react ka component ha!
    constructor(props) {//app me constructor banayengy toh usse props dena hoga aur usme super ko bhi props dena hoga
        super(props);
        this.state = {//iske ander sara data hoga
            tasks : [{
                desc : 'Switch off light',
                isFinished : false
            }, {
                desc : 'turn on fan',
                isFinished : true
            }, {
                desc : ' make tea',
                isFinished : false
            }, {
                desc : ' make Dinner',
                isFinished : true
            }]
        }
    }
    render(){
        // const name = "Tapish"
        let tasks = this.state.tasks;
        let todoTasks = tasks.filter(t => t.isFinished === false);
        let doneTasks = tasks.filter(t => t.isFinished === true);
        return(
            // <h1>Hello {name}</h1>
                <>
            {/* <h1>Hello {name}</h1> */}
                <div className="add-task">
                    <AddTasks />
                </div>
                
                <div className="task-lists">
                    <TaskList tasks={todoTasks} purpose="Todo" forStyling="todo" />{/*yaha hum jo bhi purpose me dalenegy vo uper function me props me jayenga and yaha pr comment curly brackets ke ander aaty hai! */}
                    <TaskList tasks={doneTasks} purpose="Finished" forStyling="Finished Tasks"  />{/*parent component se child compoment tak imfo ese pochaty ha (attribute = uska naam)*/}
                </div>
                  </>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); //render function me jo bhi humne likha vo app me ha aur vo root me display hoga