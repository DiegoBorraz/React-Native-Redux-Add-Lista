import React from  'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo }) => (
    <View>
        {todos.map(todo => 
        <TodoListItem 
        key={todo.id} 
        todo={todo} 
        onPressTodo={() => dispatchToggleTodo(todo.id)} />)}
    </View>
);

const styles = StyleSheet.create({

});
const mapSatateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default  connect(
    mapSatateToProps,
    { dispatchToggleTodo: toggleTodo }
    )(TodoList);