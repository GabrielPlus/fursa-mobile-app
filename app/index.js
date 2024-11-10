import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, icons } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Home = () => {
  const router = useRouter();

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
              <Link href="/login" style={{ marginLeft: 10 }}>
                <Text style={{ color: COLORS.primary }}>Login</Text>
              </Link>
            </View>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
