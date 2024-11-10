import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { COLORS, icons } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ScreenHeaderBtn 
                                iconUrl={icons.menu} 
                                dimension="60%" 
                            />
                            <Link href="/login" style={{ marginLeft: 10 }}>
                                <Text style={{ color: COLORS.primary }}>Login</Text>
                            </Link>
                        </View>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.profile} 
                            dimension="100%" 
                        />
                    ),
                }}
            />
        </SafeAreaView>
    );
};

export default Home;
