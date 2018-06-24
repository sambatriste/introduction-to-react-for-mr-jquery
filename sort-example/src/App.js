import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || []
    }
  }
  
  sort(asc) {
    const sorted = Array.from(original);
    const compareFunction = asc ? (a, b) => a.localeCompare(b) : (a, b) => b.localeCompare(a);
    sorted.sort(compareFunction);
    this.setState({
      data : sorted
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(e => (<li>{e}</li>))}
        </ul>
        <button onClick={ev => this.sort(true)}>asc</button>
        <button onClick={ev => this.sort(false)}>desc</button>
      </div>
    );
  }
}

export default App;
