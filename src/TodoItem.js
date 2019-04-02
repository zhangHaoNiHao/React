
import React from 'react';
class TodoItem extends React.Component{
    handleDelete(){
        console.log("cccc"+this.props.index);
        //子组件要和父组件通信，要调用父组件传递过来的方法
        this.props.delete(this.props.index);
    }


    render(){
        return(
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}
export default TodoItem;