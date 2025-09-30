
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';

export default function SchedulesScreen() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const schedule = {
    Monday: [
      {
        id: 1,
        time: '9:00 - 10:00 AM',
        course: 'CS401 - Software Engineering',
        instructor: 'Dr. Michael Brown',
        room: 'CS Building 201',
        type: 'Lecture',
      },
      {
        id: 2,
        time: '1:00 - 2:00 PM',
        course: 'MATH451 - Numerical Analysis',
        instructor: 'Dr. Robert Wilson',
        room: 'Math Building 102',
        type: 'Lecture',
      },
    ],
    Tuesday: [
      {
        id: 3,
        time: '11:00 - 12:30 PM',
        course: 'ENG301 - Technical Writing',
        instructor: 'Prof. Sarah Davis',
        room: 'Liberal Arts 210',
        type: 'Seminar',
      },
      {
        id: 4,
        time: '2:00 - 3:30 PM',
        course: 'CS451 - Database Systems',
        instructor: 'Prof. Lisa Chen',
        room: 'CS Building 305',
        type: 'Lecture',
      },
    ],
    Wednesday: [
      {
        id: 5,
        time: '9:00 - 10:00 AM',
        course: 'CS401 - Software Engineering',
        instructor: 'Dr. Michael Brown',
        room: 'CS Building 201',
        type: 'Lecture',
      },
      {
        id: 6,
        time: '1:00 - 2:00 PM',
        course: 'MATH451 - Numerical Analysis',
        instructor: 'Dr. Robert Wilson',
        room: 'Math Building 102',
        type: 'Lecture',
      },
    ],
    Thursday: [
      {
        id: 7,
        time: '11:00 - 12:30 PM',
        course: 'ENG301 - Technical Writing',
        instructor: 'Prof. Sarah Davis',
        room: 'Liberal Arts 210',
        type: 'Seminar',
      },
      {
        id: 8,
        time: '2:00 - 3:30 PM',
        course: 'CS451 - Database Systems',
        instructor: 'Prof. Lisa Chen',
        room: 'CS Building 305',
        type: 'Lab',
      },
    ],
    Friday: [
      {
        id: 9,
        time: '9:00 - 10:00 AM',
        course: 'CS401 - Software Engineering',
        instructor: 'Dr. Michael Brown',
        room: 'CS Building 201',
        type: 'Lecture',
      },
      {
        id: 10,
        time: '1:00 - 2:00 PM',
        course: 'MATH451 - Numerical Analysis',
        instructor: 'Dr. Robert Wilson',
        room: 'Math Building 102',
        type: 'Lecture',
      },
    ],
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lecture':
        return '#007AFF';
      case 'Lab':
        return '#34C759';
      case 'Seminar':
        return '#FF9500';
      default:
        return '#8E8E93';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Lecture':
        return 'book';
      case 'Lab':
        return 'flask';
      case 'Seminar':
        return 'person.3';
      default:
        return 'book';
    }
  };

  const currentDaySchedule = schedule[selectedDay as keyof typeof schedule] || [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.weekOverview}>
          <Text style={styles.overviewTitle}>Weekly Schedule</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daySelector}>
            {weekDays.map((day) => (
              <Pressable
                key={day}
                style={[
                  styles.dayButton,
                  selectedDay === day && styles.selectedDayButton
                ]}
                onPress={() => setSelectedDay(day)}
              >
                <Text style={[
                  styles.dayButtonText,
                  selectedDay === day && styles.selectedDayButtonText
                ]}>
                  {day.substring(0, 3)}
                </Text>
                <Text style={[
                  styles.dayClassCount,
                  selectedDay === day && styles.selectedDayClassCount
                ]}>
                  {schedule[day as keyof typeof schedule]?.length || 0} classes
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{selectedDay} Schedule</Text>
          {currentDaySchedule.length === 0 ? (
            <View style={styles.emptyState}>
              <IconSymbol name="calendar" size={48} color="#ccc" />
              <Text style={styles.emptyStateText}>No classes scheduled for {selectedDay}</Text>
            </View>
          ) : (
            currentDaySchedule.map((classItem) => (
              <View key={classItem.id} style={styles.classCard}>
                <View style={styles.classHeader}>
                  <View style={styles.timeContainer}>
                    <Text style={styles.classTime}>{classItem.time}</Text>
                  </View>
                  <View style={[
                    styles.typeIndicator,
                    { backgroundColor: getTypeColor(classItem.type) }
                  ]}>
                    <IconSymbol
                      name={getTypeIcon(classItem.type) as any}
                      size={16}
                      color="#fff"
                    />
                    <Text style={styles.typeText}>{classItem.type}</Text>
                  </View>
                </View>

                <Text style={styles.courseName}>{classItem.course}</Text>

                <View style={styles.classDetails}>
                  <View style={styles.detailRow}>
                    <IconSymbol name="person" size={16} color="#666" />
                    <Text style={styles.detailText}>{classItem.instructor}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <IconSymbol name="location" size={16} color="#666" />
                    <Text style={styles.detailText}>{classItem.room}</Text>
                  </View>
                </View>
              </View>
            ))
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>
                {Object.values(schedule).flat().length}
              </Text>
              <Text style={styles.statLabel}>Total Classes</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>
                {Object.values(schedule).flat().filter(c => c.type === 'Lecture').length}
              </Text>
              <Text style={styles.statLabel}>Lectures</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>
                {Object.values(schedule).flat().filter(c => c.type === 'Lab').length}
              </Text>
              <Text style={styles.statLabel}>Labs</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>
                {Object.values(schedule).flat().filter(c => c.type === 'Seminar').length}
              </Text>
              <Text style={styles.statLabel}>Seminars</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Classes</Text>
          <View style={styles.upcomingCard}>
            <View style={styles.upcomingHeader}>
              <IconSymbol name="clock" size={20} color="#007AFF" />
              <Text style={styles.upcomingTitle}>Next Class</Text>
            </View>
            <Text style={styles.upcomingCourse}>CS401 - Software Engineering</Text>
            <Text style={styles.upcomingTime}>Tomorrow at 9:00 AM</Text>
            <Text style={styles.upcomingLocation}>CS Building 201</Text>
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
  weekOverview: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  daySelector: {
    flexDirection: 'row',
  },
  dayButton: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
  },
  selectedDayButton: {
    backgroundColor: '#007AFF',
  },
  dayButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  selectedDayButtonText: {
    color: '#fff',
  },
  dayClassCount: {
    fontSize: 12,
    color: '#666',
  },
  selectedDayClassCount: {
    color: '#fff',
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
  emptyState: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    marginTop: 12,
    textAlign: 'center',
  },
  classCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeContainer: {
    flex: 1,
  },
  classTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  typeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  typeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 4,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  classDetails: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  upcomingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  upcomingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  upcomingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft: 8,
  },
  upcomingCourse: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 8,
  },
  upcomingTime: {
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  upcomingLocation: {
    fontSize: 14,
    color: '#666',
  },
});
