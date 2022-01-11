import { Component } from "react";
import pencil from './pencil.png';

export class List extends Component {
    state = {
        userInput: "",
        taskList: []
    }
    
    onChangeEvent(e)  {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === "") {
            alert("Please enter a task!")
        } else {
        let listArray = this.state.taskList;
        listArray.push(input);
        this.setState({taskList: listArray, userInput: ""})
        }
    }

    deleteItem() {
        let listArray = this.state.taskList;
        listArray = [];
        this.setState({taskList: listArray})
    }

    crossedWord(e) {
        const roster = e.target;
        roster.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    delOneItem(e) {
        let listArray = this.state.taskList;
        listArray.splice(e.index, 1);
        this.setState({taskList: listArray})
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What are you doing today?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.taskList.map((item, index) => (
                    <li onClick={this.crossedWord} key = {index}
                        onDoubleClick={(e) => this.delOneItem({index})}>
                        <img src={pencil} width="30px" alt="pencli" />
                        {item}
                    </li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem(this.state.userInput)} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}