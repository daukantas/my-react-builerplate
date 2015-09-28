import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import Radium from 'radium';

class App extends Component {
  state = {
    loading : true
  }
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        loading : false
      })
    }, 2000);
  }

  render() {
    const { todos, dispatch, children } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    console.log(this.state);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        { !this.state.loading && children } 
      </div>
    );
  }

  handleClick () {
    this.setState({
      luck : this.state.luck - 1
    });
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log({ state });
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);