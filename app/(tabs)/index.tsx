
import { Redirect } from 'expo-router';
import React from 'react';

export default function TabsIndex() {
  console.log('Tabs index loaded, redirecting to dashboard');
  return <Redirect href="/(tabs)/dashboard" />;
}
