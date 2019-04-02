import React, { Component } from 'react';

import TodoItem from './TodoItem'
//import './App.css';

//3、定义组件
class TodoList extends Component {
  //当组件被创建的时候，该构造方法自动执行
  constructor(props){
    super(props);//初始化，不用管
    this.state = { //数据项，可以存放数据内容
      list:[
        'learn react',
        'learn english'
      ],
      inputValue:''
    }
  }

  handleButton(){
    //当handleButton.bind(this)之前，this指向按钮
    //this.state.list.push('Hello World');

    //当handleButton.bind(this)之后，此时的this指向组件
    //this.state.list.push('Hello World');
    this.setState({
            //之前的内容
      //list:[...this.state.list,'Hello World']
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }

  handleChange(e){
    this.setState({
      inputValue:e.target.value
    })

    console.log(e.target.value);
  }

  handleDelete(index){
    console.log("aaaa"+index);
    const list = [...this.state.list];
    list.splice(index,1);//删除下标元素
    this.setState({
      list:list
    })
  }

  handleDeleteItem(index){
    console.log("ddd"+index);
    const list = [...this.state.list];
    list.splice(index,1);//删除下标元素
    this.setState({
      list:list
    })
  }
  //一个组件必须要有render函数，负责组件显示的内容
  render() {
    //JSX语法，直接返回标签
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>      {/*this指的是这个组件   .bind(this)*/}
          <button onClick={this.handleButton.bind(this)}>add</button>
        </div>
        <ul>
          {/*<li>learn react</li>
          <li>learn english</li>*/}
          { /*map是数组循环的函数，可以拿到数组元素和下标*/
            this.state.list.map((item,index) => {
              //return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
              return <TodoItem delete={this.handleDeleteItem.bind(this)}  key={index} index={index}  content={item}/>
            })
          }
        </ul>
      </div>
    );
  }
}
//导出组件，只有导出之后，才能引用
export default TodoList;
