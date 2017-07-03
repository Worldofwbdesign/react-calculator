import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { memoryChange, displayMemoryResult, memoryPlus, memoryMinus, memoryClear } from '../actions/memoryActions';

class MemoryButtons extends Component {
  render() {
    return (
      <div className="memory-buttons">
        <Button onClick={() => this.props.memoryChange()} label='MS' key={0} />
        <Button onClick={() => this.props.displayMemoryResult()} label='MR' key={1} />
        <Button onClick={() => this.props.memoryClear()} label='MC' key={2} />
        <Button onClick={() => this.props.memoryPlus()} label='M+' key={3} />
        <Button onClick={() => this.props.memoryMinus()} label='M-' key={4} />
      </div>
    )
  }
}

export default connect(null, { memoryChange, displayMemoryResult, memoryPlus, memoryMinus, memoryClear })(MemoryButtons);
