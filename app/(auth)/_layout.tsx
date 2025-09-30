
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  console.log('Auth layout rendered');
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
