
import { Redirect } from 'expo-router';

export default function Index() {
  // In a real app, you would check authentication status here
  // For now, we'll redirect to login
  return <Redirect href="/(auth)/login" />;
}
