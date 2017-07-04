import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { memoryChange, displayMemoryResult, memoryPlus, memoryMinus, memoryClear } from '../actions/memoryActions';

class MemoryButtons extends Component {
  render() {
    const disabledBtnClass = this.props.memoryExists === 0 ? 'btn_disabled' : 'btn';
    return (
      <div className="memory-buttons">
        <Button onClick={() => this.props.memoryChange()} label='MS' key={0} />
        <Button onClick={() => this.props.displayMemoryResult()} label='MR' key={1} />
        <Button onClick={() => this.props.memoryClear()} label='MC' key={2} />
        <Button onClick={() => this.props.memoryPlus()} className={disabledBtnClass} disabled={this.props.memoryExists == 0} label='M+' key={3} />
        <Button onClick={() => this.props.memoryMinus()} className={disabledBtnClass} disabled={this.props.memoryExists == 0} label='M-' key={4} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    memoryExists: state.memoryValue
  }
}

export default connect(mapStateToProps, { memoryChange, displayMemoryResult, memoryPlus, memoryMinus, memoryClear })(MemoryButtons);
