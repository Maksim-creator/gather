import { router, Stack } from 'expo-router';

export default function AuthLayout() {

    return (
        <Stack
        >
            <Stack.Screen
                name="login"
            />

            <Stack.Screen
                name="code-verification"
            />

            <Stack.Screen
                name="sign-up"
            />

            <Stack.Screen
                name="onboarding"
            />
        </Stack>
    );
}
