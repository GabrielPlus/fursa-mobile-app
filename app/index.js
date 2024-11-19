import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, icons } from '../constants';
import { useUser } from '@clerk/clerk-expo';
import DashboardScreen from './screens/index';
import LogoutScreen from './screens/logout';

const Home = () => {
  const router = useRouter();
  const { user } = useUser();  // Fetch user data

  // Check if the user is logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      const sessionId = await AsyncStorage.getItem('clerk_session_id');
      if (!sessionId) {
        router.replace('/login'); // Redirect to login if no session is found
      }
    };
    checkAuthStatus();
  }, [router]);

  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Drawer.Navigator
        screenOptions={{
          headerShadowVisible: false,  // Disable header shadow globally
        }}
      >
        <Drawer.Screen
          name="Home"
          component={DashboardScreen}
          options={{
            headerRight: () => (
              // Display user's profile image if available
              <View style={{ marginRight: 10 }}>
                <Image
                  source={{ uri: user?.imageUrl || icons.user }}  // Show profile image or fallback
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'grey',
                  }}
                />
              </View>
            ),
            headerTitle: "", // To hide the default header title
          }}
        />

       <Drawer.Screen
          name="JobStatus"
          component={LogoutScreen}
          options={{
            headerTitle: "",
          }}
          />
          
        <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
          options={{
            headerTitle: "",
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default Home;





// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React, { useEffect } from 'react';
// import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
// import { Link, Stack, useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { COLORS, icons, SIZES } from '../constants';
// import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
// import { useUser } from '@clerk/clerk-expo';
// import DashboardScreen from './screens';


// const Home = () => {
//   const router = useRouter();
//   const { user } = useUser();  // Fetch user data

//   // Check if the user is logged in
//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       const sessionId = await AsyncStorage.getItem('clerk_session_id');
//       if (!sessionId) {
//         router.replace('/login'); // Redirect to login if no session is found
//       }
//     };
//     checkAuthStatus();
//   }, [router]);
  
//   const Drawer = createDrawerNavigator();

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
//       <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           headerLeft: () => (
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
//               {/* <Link href="/profile" style={{ marginLeft: 10 }}>
//                 <Text style={{ color: COLORS.primary }}>Profile</Text>
//               </Link> */}
//             </View>
//           ),
//           headerRight: () => (
//             // Display user's profile image if available
//             <View style={{ marginRight: 10 }}>
//               <Image
//                 source={{ uri: user?.imageUrl || icons.user }}
//                 style={{
//                   width: 40,
//                   height: 40,
//                   borderRadius: 20,
//                   backgroundColor: 'grey',
//                 }}
//               />
//             </View>
//           ),
//           headerTitle: ""
//         }}
//       />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{ flex: 1, padding: SIZES.medium }}>
//           <Welcome />
//           <Popularjobs />
//           <Nearbyjobs />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Home;
