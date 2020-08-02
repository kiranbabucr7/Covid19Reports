import React from 'react';
// import ProductList from './ProductList'
// import ContactList from './ContactList'
import TestDatas from './TestData'
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
// import ContactList from './ContactList';
// import Products from './Product'

// function Main () {
//     const todolist = TestDatas.map(todoitem => <ToDoList key={todoitem.id} todoitem={todoitem}/>)
//     // const products = Products.map(product => <ProductList key={product.id} product={product}/>)
//     return (
//         <div className="main-todo">
//             {todolist}
//         </div>
//     )
//     // const contacts = TestDatas.map( testdata => <ContactList key={testdata.id} contact={testdata} /> )
//     // return (
//     //     <div className="main">
//     //        {contacts}
//     //     </div>
//     // );
// }
class Main extends React.Component{
    constructor(){
        super()
        this.state={
            todos: TestDatas
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(
            prevState =>{
                const UpDatedTodos = prevState.todos.map(todo => {
                    if (todo.id == id){
                        todo.completed = !todo.completed
                        console.log("changed",id," ",todo.completed)
                    
                    }
                    return todo
                })
                return {
                    todos: UpDatedTodos 
                }
            }
        )
    }
    render(){
        const ToDoLists = this.state.todos.map(ToDoItem => <ToDoList key={ToDoItem.id} ToDoItem={ToDoItem} handleChange={this.handleChange}/>)
        return(
            <div className="main-todo">
                {ToDoLists}
            </div>
        )
        console.log()
    }
}

export default Main;