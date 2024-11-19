import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo'; // For Clerk logout

const LogoutScreen = () => {
  const router = useRouter();
  const { signOut } = useAuth();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Clear Clerk session
        await signOut(); // Logs out the user from Clerk
        await AsyncStorage.clear(); // Clears all local storage (including Clerk session keys)

        // Redirect to the login page
        router.replace('/login');
      } catch (error) {
        console.error("Error during logout:", error); // Ensure console.log is not rendered visually
      }
    };

    logoutUser();
  }, [router, signOut]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      {/* Add a fallback message */}
      <Text>Logging you out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;





// import { View, Text, StyleSheet } from 'react-native';

// const LogoutScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>LOGOUT SCREEN</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Fill the available space
//     justifyContent: 'center', // Center vertically
//     alignItems: 'center', // Center horizontally
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default LogoutScreen;
