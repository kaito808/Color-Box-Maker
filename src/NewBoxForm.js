import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '',
      width: '',
      height: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBox({ ...this.state });
    this.setState({ backgroundColor: '', width: '', height: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="backgroundColor"
          placeholder="Background Color"
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="width"
          placeholder="Width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <button>Add Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
