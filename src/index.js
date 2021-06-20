import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  // JSX
  render() {
    const handleClick = () => {
      alert('lalala');
    };
    const element1 = (
      <li className='test' onClick={handleClick}>
        Hello, World
      </li>
    );
    const element2 = (
      <div>
        <ul>{element1}</ul>
      </div>
    );
    return element2;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// const element = <h1>Hello, World</h1>
// const element = React.createElement('h1', null, 'Hello, World');
// ReactDOM.render(element, document.getElementById('root'));
