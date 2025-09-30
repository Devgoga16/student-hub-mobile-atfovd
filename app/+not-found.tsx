
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { Button } from '@/components/button';
import { IconSymbol } from '@/components/IconSymbol';
import { colors } from '@/styles/commonStyles';

export default function NotFoundScreen() {
  console.log('404 Not Found screen rendered');
  
  const handleGoToLogin = () => {
    console.log('Navigating to login from 404 page');
    router.replace('/(auth)/login');
  };

  const handleGoToDashboard = () => {
    console.log('Navigating to dashboard from 404 page');
    router.replace('/(tabs)/dashboard');
  };
  
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <View style={styles.content}>
          <IconSymbol name="exclamationmark.triangle" size={80} color={colors.warning} />
          <Text style={styles.title}>Page Not Found</Text>
          <Text style={styles.subtitle}>
            The page you're looking for doesn't exist.
          </Text>
          
          <View style={styles.buttonContainer}>
            <Button 
              style={[styles.button, styles.primaryButton]} 
              onPress={handleGoToDashboard}
            >
              Go to Dashboard
            </Button>
            
            <Button 
              style={[styles.button, styles.secondaryButton]} 
              onPress={handleGoToLogin}
              variant="outline"
            >
              Go to Login
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    borderColor: colors.primary,
  },
});
