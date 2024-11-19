import { View, Text, StyleSheet } from 'react-native';

const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGOUT SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the available space
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;
