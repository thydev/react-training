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
  }
  edit() {
    console.log('editing');
    this.setState({
      editing: true
    });
  }

  remove() {
    alert('remove');
  }

  save() {
    alert('save');
  }

  renderForm() {
    return (
      <div className="note">
        <form>
          <textarea />
          <button id="save" onClick={this.save}>
            <FaFloppy0 />
          </button>
        </form>
      </div>
    );
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>Learn React</p>
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
