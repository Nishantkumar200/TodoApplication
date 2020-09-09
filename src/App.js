import React from "react";
import "./todo.css";
import ListItems from "./listItems";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItems: {
        text: "",
        key: "",
      },
    };

    this.addItems = this.addItems.bind(this);
    this.handlTextChange = this.handlTextChange.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  // Handle the change in input
  handlTextChange(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  // For adding the Items
  addItems(e) {
    e.preventDefault();
    const newItem = this.state.currentItems;
    //console.log(newItem);
    if (newItem.text != null) {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          text: "",
          key: "",
        },
      });
    } else {
      alert("Please Enter some Input");
    }
  }

  // For deleting the Items

  deleteItems(key) {
    const filteredItem = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItem,
    });
  }

  // Updating the value

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });

    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <>
        <div className="App">
          <div className="container">
            <form onSubmit={this.addItems}>
              <h1>TODO Application</h1>
              <input
                type="text"
                placeholder="Enter text to add"
                value={this.state.currentItems.text}
                onChange={this.handlTextChange}
              />
              <button type="submit">Add</button>
            </form>
            <ListItems
              items={this.state.items}
              deleteItems={this.deleteItems}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
