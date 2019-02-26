import React, {Component} from 'react';
import './App.css';

import TaskList from './todo/TaskList'
import InputTask from './todo/InputTask'
import Github from './github/index'
import Wather from './wather/index'
class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework'},
               {id: 2, task: 'Play game'}],
       id:3
   }

   addTask = (task) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task } ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
               <Github/>
               <Wather/>
           </div>
       );
   }
}

export default App;