class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Stateful component!',
      counters: [props.counterComps]
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.text}</h1>
          <button onClick={() => this.setState({ text: 'State has changed!' })}>
            Click to change state's text value!
          </button>
          <button
            onClick={() => {
              this.setState({
                counters: [...this.state.counters, <Counter />]
              });
              console.log(this.state.counters);
            }}
          >
            Add Counter
          </button>
        </div>
        {this.state.counters}
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrement
        </button>
      </div>
    );
  }
}
ReactDOM.render(
  <App counterComps={[<Counter />]} />,
  document.getElementById('app')
);
