import React from  'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ 
    todos, 
    dispatchToggleTodo, 
    distaptchSetEditingTodo 
}) => (
    <View>
        {todos.map(todo => 
        <TodoListItem 
        key={todo.id} 
        todo={todo} 
        onPressTodo={() => dispatchToggleTodo(todo.id)} 
        onLongPressTodo={() => distaptchSetEditingTodo(todo)} />)}
        
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
    { 
        dispatchToggleTodo: toggleTodo ,
        distaptchSetEditingTodo: setEditingTodo
    }
    )(TodoList);