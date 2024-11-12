import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, icons, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { useUser } from '@clerk/clerk-expo';

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              {/* <Link href="/profile" style={{ marginLeft: 10 }}>
                <Text style={{ color: COLORS.primary }}>Profile</Text>
              </Link> */}
            </View>
          ),
          headerRight: () => (
            // Display user's profile image if available
            <View style={{ marginRight: 10 }}>
              <Image
                source={{ uri: user?.imageUrl || icons.user }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: 'grey',
                }}
              />
            </View>
          ),
          headerTitle: ""
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
