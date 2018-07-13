const List = props => {
  const listItems = props.items.map(itemString => {
    return <JSLibrary key={itemString} jsName={itemString} />;
  });
  console.log(listItems);
  return <ul> {listItems} </ul>;
};

class JSLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCounter: 0,
      jsName: props.jsName
    };
  }
  render() {
    return (
      <li>
        <span>{this.state.voteCounter}</span>
        {this.state.jsName}
        <button
          onClick={() => {
            this.setState({ voteCounter: this.state.voteCounter + 1 });
          }}
        >
          Vote
        </button>
      </li>
    );
  }
}

ReactDOM.render(
  <List items={['React', 'Redux', 'Node', 'Express']} />,
  document.getElementById('content')
);
