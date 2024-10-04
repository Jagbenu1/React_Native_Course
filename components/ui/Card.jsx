import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // elevation is used to add a box shadow to android devices
    elevation: 4,
    // shadow... allows adding a box shadow on IOS devices
    // all 4 shadow properties are needed
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
