# React事件绑定

React中的bind同上方原理一致,在JSX中传递的事件不是一个字符串，而是一个函数（如:onClick={this.handleClick}），此时onClick即是中间变量，所以处理函数中的this指向会丢失。解决这个问题就是给调用函数时bind(this)，从而使得无论事件处理函数如何传递，this指向都是当前实例化对象。
当然，如果不想使用bind(this)，我们可以在声明函数时使用箭头函数将函数内容返回给一个变量，并在调用时直接使用this.变量名即可。示例代码如下：

```js
import React from 'react';
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:4
        };
    }
    render(){
        var style = {
            padding:'10px',
            color:'red',
            fontSize:'30px'
        }
        return (
            <div style={style}>{/*注意js语法使用一个括号{}去表示,style使用两个括号,原因里面其实是一个对象*/}
                <p>React生命周期介绍</p>
                <button onClick={this.handleAdd}>无bind点击一下</button>
                <button onClick={this.handleClick.bind(this)}>有bind点击一下</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
    //此时this指向是当前实例对象
    handleAdd = ()=> {
        console.log(this)
        this.setState({
            count:5
        })
    }
    handleClick(){
        this.setState({
            count:6
        })
    }
}
```

