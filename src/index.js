//1、引用React库，声明大写开头的语法是组件
import React from 'react';
//4、将组件渲染载到root标签里边
import ReactDOM from 'react-dom';
//import './index.css';
//2、大写字母开头的都是组件，App.js是在定义组件
import App from './App';
import TodoList from  './TodoList';

//import * as serviceWorker from './serviceWorker';
//JSX直接引用标签
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoList />, document.getElementById('root'));
//serviceWorker.unregister();
