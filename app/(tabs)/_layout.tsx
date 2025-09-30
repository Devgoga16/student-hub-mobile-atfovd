
import React from 'react';
import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTitle: 'Student System',
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          title: 'Personal',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="curriculum"
        options={{
          title: 'Curriculum',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'My Courses',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="graduationcap" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="enrollment"
        options={{
          title: 'Enrollment',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="plus.circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          title: 'Schedules',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
