import { StyleSheet, Text, View, Pressable } from 'react-native';

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    margin: 6,
    // borderRadius는 ios의 Text에 적용되지 않음.
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoText: {
    padding: 8,
    color: 'white',
  },
});
export default TodoItem;
