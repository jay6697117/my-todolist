import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

const todoList = ['图雀', '图雀写作工具', '图雀社区', '图雀文档'];

class Todo extends React.Component {
  render() {
    // console.log(`Todo this.props: `, this.props);
    if (this.props.order % 2 === 0) {
      return (
        <li style={{ color: 'yellow', backgroundColor: 'lightseagreen', padding: '10px', position: 'relative' }}>
          todo hello, {this.props.content}
          <button
            onClick={this.props.handleDeleteItem(this.props.order)}
            style={{ position: 'absolute', top: '8.5px', right: '10px' }}>
            删除
          </button>
        </li>
      );
    }
    return (
      <li style={{ padding: '10px', position: 'relative' }}>
        todo hello, {this.props.content}{' '}
        <button
          onClick={this.props.handleDeleteItem(this.props.order)}
          style={{ position: 'absolute', top: '8.5px', right: '10px' }}>
          删除
        </button>
      </li>
    );
  }
}

class App extends React.Component {
  // React 约定每个继承自 React.Component 的组件在定义 constructor 方法时，要在方法内首行加入 super(props)
  constructor(props) {
    super(props);

    //设置初始值
    this.state = {
      nowdo: '',
      todoList: []
    };
  }
  handleChange(e) {
    // console.log(`handleChange e`, e);
    e.preventDefault();
    console.log(`e.target.value: `, e.target.value);
    this.setState({
      nowdo: e.target.value
    });
  }

  handleAdd(e) {
    // console.log(`handleAdd e`, e);
    e.preventDefault();
    console.log(`this`, this);
    if (!this.state.nowdo) {
      alert('待办事项不能为空');
      return;
    }
    this.state.todoList.push(this.state.nowdo);
    this.setState({
      nowdo: '',
      todoList: this.state.todoList
    });
  }

  handleDelete(num, e) {
    // console.log(`handleDelete e`, e);
    e.preventDefault();
    console.log(`num`, num);
    for (let index = 0; index < this.state.todoList.length; index++) {
      if (index === num) {
        this.state.todoList.splice(index, 1);
      }
    }
    console.log(`handleDelete this.state.todoList`, this.state.todoList);

    this.setState({
      todoList: this.state.todoList
    });
  }

  componentDidMount() {
    new Promise(resolve => {
      this.timer = setTimeout(resolve, 1000);
    }).then(() => {
      this.setState({ todoList });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        <span>待办事项: </span>
        <input type='text' onChange={this.handleChange.bind(this)} value={this.state.nowdo} />
        <button onClick={this.handleAdd.bind(this)} style={{ marginLeft: '10px' }}>
          添加
        </button>
        <ul style={{ paddingTop: '20px' }}>
          {this.state.todoList.map((todo, index) => (
            <Todo
              handleDeleteItem={e => this.handleDelete.bind(this, e)}
              key={Date.now() + '-' + index}
              order={index}
              content={todo}
            />
          ))}
        </ul>
        <div style={{ marginTop: '30px', backgroundColor: '#ccc' }}>
          <div>nowdo: {JSON.stringify(this.state.nowdo)}</div>
          <div>todoList: {JSON.stringify(this.state.todoList)}</div>
        </div>
      </div>
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
