import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }

  addBox = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  };

  removeBox = (index) => {
    const boxes = [...this.state.boxes];
    boxes.splice(index, 1);
    this.setState({ boxes });
  };

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map((box, index) => (
          <Box
            key={index}
            index={index}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            removeBox={this.removeBox}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
