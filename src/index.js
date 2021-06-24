import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

const todoList = ['图雀', '图雀写作工具', '图雀社区', '图雀文档'];
const nowTodo = ['哈哈哈', '啦啦啦'];

class Todo extends React.Component {
  // JSX
  render() {
    console.log(`class Todo render this.props`, this.props);
    return <li>Hello, {this.props.content}</li>;
  }
}

class App extends React.Component {
  // React 约定每个继承自 React.Component 的组件在定义 constructor 方法时，要在方法内首行加入 super(props)
  constructor(props) {
    super(props);

    //设置初始值
    this.state = {
      todoList: [],
      nowTodo: []
    };
  }
  componentDidMount() {
    new Promise(resolve => {
      this.timer1 = setTimeout(resolve, 2000);
    }).then(() => {
      this.setState({ todoList, nowTodo });
    });
  }

  componentWillUnmount() {
    console.log(`this.timer1`, this.timer1);
    clearTimeout(this.timer1);
  }
  render() {
    console.log('--------------------------------');
    console.log(`class App render this.state`, this.state);
    return (
      <ul>
        <Todo content={this.state.todoList[0]} />
        <Todo content={this.state.todoList[1]} />
        <Todo content={this.state.todoList[2]} />
        <Todo content={this.state.todoList[3]} />
        <Todo content={this.state.nowTodo[0]} />
        <Todo content={this.state.nowTodo[1]} />
      </ul>
    );
  }
}

// function Todo(props) {
//   console.log(`function Todo props: `, props);
//   return <li>Hello, {props.content}</li>;
// }

// function App(props) {
//   console.log(`function App props`, props)
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
