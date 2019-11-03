import React from 'react';
import {Text, View, StyleSheet,  TouchableOpacity} from 'react-native';




/*
    Componente responsavel por receber da PeopleList uma pessoa, 
    exibir e estilizar a linha
    Veja que PeopleListItem recebe navigateToPeopleDetail de PeopleList e executa o mesmo
*/
const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
    <TouchableOpacity 
    onPress={onPressTodo}
    onLongPress={onLongPressTodo}>
        <View style={styles.line}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThough: null
                ]}>
                { todo.text }
            </Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create ({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1, //Mantem a proporção da imagem
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    },
    lineThough: {
        textDecorationLine: 'line-through'
    }
})

export default TodoListItem;