import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => {
  //Merging styles like this below is a good way to simulate
  // the cascading property of css in react native
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
