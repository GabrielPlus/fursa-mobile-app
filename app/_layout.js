import { Stack } from 'expo-router';

const Layout = () => {
    return <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index"
        options={{
            headerShown:false
        }}
        />
    </Stack>;
}

export default Layout;