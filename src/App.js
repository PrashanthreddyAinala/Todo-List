import "./styles.css";
import React from "react";
import TodoList from "./Todo";
import todoData from "./TodoData";
import AddGoals from "./AddGoals";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
    this.addGoalHandler = this.addGoalHandler.bind(this);
  }

  addGoalHandler(newGoal) {
    this.setState({ todos: this.state.todos.concat(newGoal) });
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const data = this.state.todos.map((item) => (
      <TodoList key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div>
        <AddGoals newList={this.addGoalHandler} />
        <div className="card">{data}</div>
      </div>
    );
  }
}

export default App;
