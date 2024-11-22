import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Jobstatus() {
  return (
    <View style={styles.container}>
      {/* Image at the top center */}
      <Image 
        source={require('../../assets/images/jobstatus.png')} // Replace with your image path
        style={styles.image}
      />
      {/* Text content */}
      <Text style={styles.text}>JobStatusScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Horizontally center
    justifyContent: 'flex-start', // Start from the top
    backgroundColor: '#f8f9fa', // Optional background color
    paddingTop: 50, // Add some space at the top
  },
  image: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    resizeMode: 'contain', // Adjust the image to fit within dimensions
    marginBottom: 20, // Space between image and text
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Text color
  },
});

export default Jobstatus;
