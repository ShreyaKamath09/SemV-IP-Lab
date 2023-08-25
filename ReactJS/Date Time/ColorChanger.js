import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

class ColorChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    };
  }

  changeColor = () => {
    const colors = ['red', 'green', 'blue', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: randomColor });
  };

  render() {
    const textStyle = { color: this.state.color };

    return (
      <div>
        <DateTimeDisplay
          currentDate={this.props.currentDate}
          currentTime={this.props.currentTime}
          textStyle={textStyle}
        />
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default ColorChanger;
