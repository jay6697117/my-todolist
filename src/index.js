import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Todo extends React.Component {
  // JSX
  render() {
    console.log(`class Todo this.props`, this.props);
    return <li>{this.props.content}</li>;
  }
}

class App extends React.Component {
  render() {
    const todoList = ['图雀', '图雀写作工具', '图雀社区', '图雀文档'];
    return (
      <ul>
        <Todo content={todoList[0]} />
        <Todo content={todoList[1]} />
        <Todo content={todoList[2]} />
        <Todo content={todoList[3]} />
      </ul>
    );
  }
}

// function Todo(props) {
//   console.log(`function Todo props: `, props);
//   return <li>{props.content}</li>;
// }

// function App(props) {
//   const todoList = ['图雀', '图雀写作工具', '图雀社区', '图雀文档'];
//   return (
//     <ul>
//       <Todo content={todoList[0]} />
//       <Todo content={todoList[1]} />
//       <Todo content={todoList[2]} />
//       <Todo content={todoList[3]} />
//     </ul>
//   );
// }

ReactDOM.render(<App />, document.getElementById('root'));
