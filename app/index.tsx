
import { Redirect } from 'expo-router';
import React from 'react';

export default function Index() {
  console.log('Root index screen loaded, redirecting to login');
  // In a real app, you would check authentication status here
  // For now, we'll redirect to login
  return <Redirect href="/(auth)/login" />;
}
