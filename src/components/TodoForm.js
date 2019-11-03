import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Input from './Input'
import { addTodo, setTodoText, updateTodo } from '../actions';

import { connect } from 'react-redux';


 class TodoForm extends React.Component {
    
    
    onChangeText(text){
        this.props.dispatchSetTodoText(text);
    }

    onPress(){
        const { todo } = this.props;
        if(todo.id){
            return this.props.dispatchUpdateTodo(todo);
        } 
            const { text } = this.props.todo;
            this.props.dispatchAddTodo(text)
        }

    render(){
        const { text, id } = this.props.todo;
        return(
            <View style={styles.formContainer} >
                <View style={styles.inputContainer}>
                    <Input
                    onChangeText={text => this.onChangeText(text)}
                    value={text} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button 
                    title={ id ? "Edit" : "Add" }
                    onPress={()=> this.onPress()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        todo: state.editingTodoReducer
    }
}

export default connect(
    mapStateToProps, 
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    }
)(TodoForm);