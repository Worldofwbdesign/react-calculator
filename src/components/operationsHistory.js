import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class operationsHistory extends Component {
  renderHistory() {
    return this.props.history.map((item, index) => {
      return (
        <ListItem key={index} primaryText={item} leftIcon={<ActionGrade />}/>
      )
    })
  }
  render() {
    return (
      <List className="history">
        {this.renderHistory()}
      </List>
    )
  }
}

function mapStateToProps(state) {
  return {
    history: state.operationsHistory
  }
}

export default connect(mapStateToProps)(operationsHistory);
