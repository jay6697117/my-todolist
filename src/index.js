import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

const todoList = ['图雀', '图雀写作工具', '图雀社区', '图雀文档'];
const nowdoList = ['哈哈哈111', '啦啦啦222'];

class Todo extends React.Component {
  // JSX
  render() {
    console.log(`class Todo render this.props`, this.props);

    if (this.props.tag === 'todo') {
      if (this.props.order % 2 === 0) {
        return (
          <li style={{ color: 'purple', backgroundColor: 'lightseagreen', padding: '10px' }}>
            todo hello, {this.props.content}
          </li>
        );
      }
      return <li style={{ padding: '10px' }}>todo hello, {this.props.content}</li>;
    }
    if (this.props.tag === 'nowdo') {
      if (this.props.order % 2 === 0) {
        return (
          <li style={{ color: 'blue', backgroundColor: 'lightgray', padding: '10px' }}>
            nowdo 你好, {this.props.content}
          </li>
        );
      }
      return <li style={{ padding: '10px' }}>nowdo 你好, {this.props.content}</li>;
    }
  }
}

class App extends React.Component {
  // React 约定每个继承自 React.Component 的组件在定义 constructor 方法时，要在方法内首行加入 super(props)
  constructor(props) {
    super(props);

    //设置初始值
    this.state = {
      todoList: [],
      nowdoList: []
    };
  }
  handleAdd() {
    return e => {
      console.log(`e`, e);
      e.preventDefault();
      this.setState({ todoList, nowdoList });
    };
  }
  handleDel() {
    return e => {
      console.log(`e`, e);
      e.preventDefault();
      this.setState({ todoList: [], nowdoList: [] });
    };
  }

  componentDidMount() {
    console.log(`componentDidMount this`, this);
    // this.setState({ todoList, nowdoList });
  }

  componentDidUpdate() {
    // console.log(`componentDidUpdate this`, this);
  }
  componentWillUnmount() {
    console.log(`this.timer1`, this.timer1);
    clearTimeout(this.timer1);
  }

  render() {
    // console.log(`class App render this.state`, this.state);
    console.log('------------------------------------------');
    return (
      <div>
        <a style={{ paddingRight: '10px' }} href='https://www.baidu.com/' onClick={this.handleAdd()}>
          加载
        </a>
        <a href='https://www.baidu.com/' onClick={this.handleDel()}>
          清除
        </a>
        <ul style={{ paddingTop: '20px' }}>
          {this.state.todoList.map((todo, index) => (
            <Todo key={Date.now() + '-' + index} order={index} tag='todo' content={todo} />
          ))}
          {this.state.nowdoList.map((nowdo, index) => (
            <Todo key={Date.now() + '-' + index} order={index} tag='nowdo' content={nowdo} />
          ))}
        </ul>
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
