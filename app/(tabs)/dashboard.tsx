
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { router } from 'expo-router';

export default function DashboardScreen() {
  const quickActions = [
    { id: 1, title: 'View Grades', icon: 'chart.bar', route: '/grades' },
    { id: 2, title: 'Class Schedule', icon: 'calendar', route: '/(tabs)/schedules' },
    { id: 3, title: 'Assignments', icon: 'doc.text', route: '/assignments' },
    { id: 4, title: 'Messages', icon: 'envelope', route: '/messages' },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Registration for Fall 2024 is now open',
      date: 'March 15, 2024',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Library hours extended during finals week',
      date: 'March 12, 2024',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'New student orientation scheduled',
      date: 'March 10, 2024',
      priority: 'low',
    },
  ];

  const handleQuickAction = (route: string) => {
    console.log('Navigating to:', route);
    if (route.startsWith('/(tabs)')) {
      router.push(route as any);
    } else {
      // For future implementation
      console.log('Route not implemented yet:', route);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.studentName}>John Doe</Text>
          <Text style={styles.studentId}>Student ID: 2024001</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <Pressable
                key={action.id}
                style={styles.quickActionCard}
                onPress={() => handleQuickAction(action.route)}
              >
                <IconSymbol name={action.icon as any} size={32} color="#007AFF" />
                <Text style={styles.quickActionText}>{action.title}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Announcements</Text>
          {announcements.map((announcement) => (
            <View key={announcement.id} style={styles.announcementCard}>
              <View style={styles.announcementHeader}>
                <View style={[
                  styles.priorityIndicator,
                  { backgroundColor: 
                    announcement.priority === 'high' ? '#FF3B30' :
                    announcement.priority === 'medium' ? '#FF9500' : '#34C759'
                  }
                ]} />
                <Text style={styles.announcementDate}>{announcement.date}</Text>
              </View>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic Overview</Text>
          <View style={styles.overviewCard}>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>4.2</Text>
              <Text style={styles.overviewLabel}>Current GPA</Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>6</Text>
              <Text style={styles.overviewLabel}>Enrolled Courses</Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>120</Text>
              <Text style={styles.overviewLabel}>Credits Earned</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    padding: 20,
  },
  welcomeSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  studentName: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 4,
  },
  studentId: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
    marginTop: 8,
  },
  announcementCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  announcementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  priorityIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  announcementDate: {
    fontSize: 12,
    color: '#666',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    lineHeight: 22,
  },
  overviewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  overviewItem: {
    alignItems: 'center',
  },
  overviewNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  overviewLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
