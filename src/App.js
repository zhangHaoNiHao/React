import React, { Component } from 'react';
import './App.css';

//3、定义组件
class App extends Component {
  //一个组件必须要有render函数，负责组件显示的内容
  render() {
    //JSX语法，直接返回标签
    return (
      <div className="App">
        {1 + 2} //在{}内写js表达式，但是不能写js语句
        Hello,I am 张浩
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
      </div>
    );
  }
}
//导出组件，只有导出之后，才能引用
export default App;
