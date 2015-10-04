import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todos';

import AppHeader from '../components/AppHeader';

class App extends Component {
  render() {
    const { todos, dispatch, children } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div>
        <AppHeader/>
        { children } 
      </div>
    );
  }

  handleClick () {}
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);