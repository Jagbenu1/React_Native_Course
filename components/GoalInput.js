import { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({ onAddGoal, visible, onEndGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* this is how an image is added to react native. a relative path is
        needed to the assets folder and it uses require */}
        <Image
          style={styles.imageStyling}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onEndGoal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 16,
    width: 100,
    marginHorizontal: 8,
  },
  imageStyling: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
