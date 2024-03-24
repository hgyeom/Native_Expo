import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const openModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  const addTodoHandler = (todoText) => {
    if (todoText === '') return;

    setTodoList((current) => [
      ...current,
      { id: Math.random().toString(), text: todoText },
    ]);

    closeModalHandler();
  };

  const deleteTodoHandler = (id) => {
    setTodoList((current) => current.filter((todo) => todo.id !== id));
    console.log('delete');
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Todo 추가하기"
          color="#60298a"
          onPress={openModalHandler}
        />
        <TodoInput
          visible={modalIsVisible}
          onAddTodo={addTodoHandler}
          onClose={closeModalHandler}
        />
        <View style={styles.listContainer}>
          {/* flatList는 key값을 data에서 자동으로 찾는다 */}
          <FlatList
            data={todoList}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteTodoHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

// stylesheet 객체를 사용하면 자동 완성이나 코드 검증 기능을 도와준다.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listContainer: {
    flex: 5,
  },
});
