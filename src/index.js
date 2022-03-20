import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class AddTasks extends React.Component { // yeh add Task function hai!
    constructor(props){
        super(props);
        this.state = {
            taskDesc: ''
        }
    }
    handleTaskTextChange(e){
        this.setState({
            taskDesc: e.target.value
        })
    }

    handleAddTaskClick(){
        this.props.handlerToCollectTaskInfo(this.state.taskDesc);
        this.setState({
            taskDesc: ''
        })
    }

    render(){
        return(
            <form>
                <input type="text" value={this.state.taskDesc} onChange={(e) => this.handleTaskTextChange(e)} />
                <input type="button" value="Add Task" onClick={() => this.handleAddTaskClick()}/>
            </form>
        )
    }
}

class TaskList extends React.Component {// yeh task list function hai!
    handleTaskClick(taskDesc){
        this.props.handlerToCollectTaskClickInfo(taskDesc);
   }
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // console.log(this.props.purpose);
        // console.log(this.props.tasks); 
        let list = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
            let task = this.props.tasks[i];
            let spanAction;

            if(task.isFinished){
                spanAction = (
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>close</span>
                );
            }else{
                spanAction = (
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>done</span>
                );  
            }

            let listItem = (
            <div key={i}>
                <span>{task.desc}</span>
                {spanAction}
                {/* <button>{this.props.purpose == "Todo" ? "do" : "undo"}</button> */}
                </div>
            )
            list.push(listItem);
        }
        return (
        <div className={this.props.forStyling}>
            <div className={"list-container"}>
                <div className="title">{this.props.purpose}</div>
                    <div className="content">
                        {list}
                    </div>
                </div>
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

    handleNewTask(taskDesc){
        let oldTasks = this.state.tasks.slice();

        oldTasks.push({
            desc: taskDesc,
            isFinished: false
        });
        this.setState({
            tasks: oldTasks
        })
    }

    handleTaskStatusUpdate(taskDesc, newStatus){
        let oldTasks = this.state.tasks.slice();

        let taskItem = oldTasks.find(ot => ot.desc == taskDesc);
        taskItem.isFinished = newStatus;

        this.setState({
            tasks: oldTasks
        })
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
                <AddTasks handlerToCollectTaskInfo={(taskDesc) => this.handleNewTask(taskDesc)}/>
                </div>
                
                <div className="task-lists">
                    <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc, true)} tasks={todoTasks} purpose="Todo" forStyling="todo" />{/*yaha hum jo bhi purpose me dalenegy vo uper function me props me jayenga and yaha pr comment curly brackets ke ander aaty hai! */}
                    <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc, false)} tasks={doneTasks} purpose="Finished" forStyling="Finished-Tasks"  />{/*parent component se child compoment tak imfo ese pochaty ha (attribute = uska naam)*/}
                </div>
                  </>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); //render function me jo bhi humne likha vo app me ha aur vo root me display hoga