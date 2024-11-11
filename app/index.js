import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

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
            </View>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: ""
        }}
      />

        <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={{
          flex: 1,
          padding: SIZES.medium
        }}
        >
          <Welcome />

          <Popularjobs />
          <Nearbyjobs />

        </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default Home;
