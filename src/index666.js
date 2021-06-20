import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  // JSX
  render() {
    const handleClick = () => {
      alert('lalala');
    };
    const todoList = ['图雀', '图雀写作工具', '图雀社区', '图雀文档'];
    const element = (
      <ul className='ul-style'>
        <li>Hello, {todoList[0]}</li>
        <li className='bg-style' onClick={handleClick}>
          Hello, {todoList[1]}
        </li>
        <li>Hello, {todoList[2]}</li>
        <li>Hello, {todoList[3]}</li>
      </ul>
    );
    return element;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// const element = <h1>Hello, World</h1>
// const element = React.createElement('h1', null, 'Hello, World');
// ReactDOM.render(element, document.getElementById('root'));
