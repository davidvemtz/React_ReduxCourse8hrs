import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './styles/stylesheet.css';

// const tasks = ['take out trash', 'shovel the driveway', 'walk my dog'];

/* const element = React.createElement('ol', null, 
    tasks.map((task,index) => React.createElement('li', {key: index}, task))
); */

/* const element = 
    <div>
        <h1> Tasks List </h1>
        <ol> 
            {tasks.map((task, index) => <li key = {index}>{task}</li>)}
        </ol>
    </div> */

ReactDOM.render(<Main/>, document.getElementById('root'));
