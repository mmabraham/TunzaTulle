import React from 'react';
import Slider from 'material-ui/Slider';

export default class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    const {min, max} = props;
    this.state = props.range || {min, max};
  }

  handleSlide(type) {
    return (e, val) => {
      this.setState({[type]: val});
    }
  }

  handleStop() {
    this.props.onChange(null, null, this.state);
  }

  render() {
    const handleStop = this.handleStop.bind(this);
    return (
      <div>
        <Slider
          min={this.props.min}
          max={this.props.max}
          step={this.props.step || 1}
          value={this.state.min}
          onChange={this.handleSlide('min')}
          onDragStop={handleStop}
        />
        <Slider
          min={this.props.min}
          max={this.props.max}
          step={this.props.step || 1}
          value={this.state.max}
          onChange={this.handleSlide('max')}
          onDragStop={this.handleStop}
        />
      </div>
    )
  }
}
