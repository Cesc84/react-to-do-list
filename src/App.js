import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem: "",
      list: []
    }
  }


  updateInput(key, value) {
    // update react setState
    this.setState({
      [key]: value
    });
  }

  addItem() {
      // create item with unique id
      const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
      // copy of current list of items
      const list = [...this.state.list];

      // add new Item to the list
      list.push(newItem);

      // update state with new list and reset newItem input
      this.setState({
        list,
        newItem: ""
      })
    }

    deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];

      // filter out item being deleted
      const updatedList = list.filter(item => item.id !== id);

      this.setState({list: updatedList});
    }


  render() {
    return(
      <div className="App">
      <h1 className="app-title">My To Do List</h1>
        <div className="container">
          Add or delete an item to your list
          <br />
          <input
            type="text"
            placeholder="Typ Item Here.."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button className="btn add-btn"
            onClick={() => this.addItem()}
          >
            Add
          </button>

          <ol>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                {item.value}
                  <button className="btn delete-btn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
