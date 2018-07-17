import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppy0 from 'react-icons/lib/fa/floppy-o';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);

    this.randomBetween = this.randomBetween.bind(this);
  }

  componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px'),
      transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
    };
  }

  edit() {
    console.log('editing');
    this.setState({
      editing: true
    });
  }

  remove() {
    this.props.onRemove(this.props.index);
  }

  save(e) {
    e.preventDefault();
    // alert(this._newText.value);
    this.props.onChange(this._newText.value, this.props.index);
    this.setState({
      editing: false
    });
  }

  randomBetween(x, y, s) {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  }

  componentDidUpdate() {
    var textArea;
    if (this.state.editing) {
      textArea = this._newText;
      // textArea.focus();
      textArea.select();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if sth has been changed then re-render, else do nothing
    return this.props.children !== nextProps || this.state !== nextState;
  }

  renderForm() {
    return (
      <div className="note" style={this.style}>
        <form onSubmit={this.save}>
          <textarea
            ref={input => (this._newText = input)}
            autoFocus
            defaultValue={this.props.children}
          />
          <button id="save">
            <FaFloppy0 />
          </button>
        </form>
      </div>
    );
  }

  renderDisplay() {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button id="edit" onClick={this.edit}>
            <FaPencil />
          </button>
          <button id="remove" onClick={this.remove}>
            <FaTrash />
          </button>
        </span>
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Note;
