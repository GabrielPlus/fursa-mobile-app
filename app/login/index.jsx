import { View, Image, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../../constants';

export default function LoginScreen() {
  const { height: screenHeight } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./../../assets/images/fursa-logo.png')}
          style={[styles.logo, { height: screenHeight * 0.3 }]} // 30% of screen height
        />
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Looking for your next opportunity?
        </Text>
        <Text style={styles.text2}>
        Your gateway to job opportunities in Mombasa
        </Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Join Us</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Start content from the top
    alignItems: 'center',
    paddingTop: 150, // Space from the top
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center', // Center image horizontally
    marginBottom: 50,     // Space between image and text
  },
  logo: {
    width: '60%',         // Medium width size
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    color: '#333',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    color: '#808080',
    textAlign: 'center',
  },
  button: {
    padding:10,
    marginTop:100,
    width: '90%',
    borderRadius:14,
    fontVariant: 'secondary',
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 20,
    
    fontWeight: '800',
  }
});
