
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';

export default function MyCoursesScreen() {
  const currentCourses = [
    {
      id: 1,
      code: 'CS401',
      name: 'Software Engineering',
      instructor: 'Dr. Michael Brown',
      credits: 3,
      schedule: 'MWF 10:00-11:00 AM',
      room: 'CS Building 201',
      grade: 'A-',
      progress: 85,
    },
    {
      id: 2,
      code: 'CS451',
      name: 'Database Systems',
      instructor: 'Prof. Lisa Chen',
      credits: 3,
      schedule: 'TTh 2:00-3:30 PM',
      room: 'CS Building 305',
      grade: 'B+',
      progress: 78,
    },
    {
      id: 3,
      code: 'MATH451',
      name: 'Numerical Analysis',
      instructor: 'Dr. Robert Wilson',
      credits: 3,
      schedule: 'MWF 1:00-2:00 PM',
      room: 'Math Building 102',
      grade: 'A',
      progress: 92,
    },
    {
      id: 4,
      code: 'ENG301',
      name: 'Technical Writing',
      instructor: 'Prof. Sarah Davis',
      credits: 3,
      schedule: 'TTh 11:00-12:30 PM',
      room: 'Liberal Arts 210',
      grade: 'A-',
      progress: 88,
    },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return '#34C759';
    if (grade.startsWith('B')) return '#007AFF';
    if (grade.startsWith('C')) return '#FF9500';
    if (grade.startsWith('D')) return '#FF3B30';
    return '#8E8E93';
  };

  const totalCredits = currentCourses.reduce((sum, course) => sum + course.credits, 0);
  const averageProgress = Math.round(
    currentCourses.reduce((sum, course) => sum + course.progress, 0) / currentCourses.length
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Current Semester Overview</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{currentCourses.length}</Text>
              <Text style={styles.summaryLabel}>Enrolled Courses</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{totalCredits}</Text>
              <Text style={styles.summaryLabel}>Total Credits</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{averageProgress}%</Text>
              <Text style={styles.summaryLabel}>Avg Progress</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          {currentCourses.map((course) => (
            <Pressable key={course.id} style={styles.courseCard}>
              <View style={styles.courseHeader}>
                <View style={styles.courseInfo}>
                  <Text style={styles.courseCode}>{course.code}</Text>
                  <Text style={styles.courseName}>{course.name}</Text>
                </View>
                <View style={styles.gradeContainer}>
                  <Text style={[styles.grade, { color: getGradeColor(course.grade) }]}>
                    {course.grade}
                  </Text>
                </View>
              </View>

              <View style={styles.courseDetails}>
                <View style={styles.detailRow}>
                  <IconSymbol name="person" size={16} color="#666" />
                  <Text style={styles.detailText}>{course.instructor}</Text>
                </View>
                <View style={styles.detailRow}>
                  <IconSymbol name="clock" size={16} color="#666" />
                  <Text style={styles.detailText}>{course.schedule}</Text>
                </View>
                <View style={styles.detailRow}>
                  <IconSymbol name="location" size={16} color="#666" />
                  <Text style={styles.detailText}>{course.room}</Text>
                </View>
                <View style={styles.detailRow}>
                  <IconSymbol name="graduationcap" size={16} color="#666" />
                  <Text style={styles.detailText}>{course.credits} Credits</Text>
                </View>
              </View>

              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Course Progress</Text>
                  <Text style={styles.progressPercentage}>{course.progress}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View style={[
                    styles.progressFill,
                    { width: `${course.progress}%` }
                  ]} />
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <Pressable style={styles.actionCard}>
              <IconSymbol name="doc.text" size={24} color="#007AFF" />
              <Text style={styles.actionText}>View Assignments</Text>
            </Pressable>
            <Pressable style={styles.actionCard}>
              <IconSymbol name="chart.bar" size={24} color="#007AFF" />
              <Text style={styles.actionText}>Check Grades</Text>
            </Pressable>
            <Pressable style={styles.actionCard}>
              <IconSymbol name="calendar" size={24} color="#007AFF" />
              <Text style={styles.actionText}>Class Schedule</Text>
            </Pressable>
            <Pressable style={styles.actionCard}>
              <IconSymbol name="book" size={24} color="#007AFF" />
              <Text style={styles.actionText}>Course Materials</Text>
            </Pressable>
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
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  courseInfo: {
    flex: 1,
  },
  courseCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  gradeContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  grade: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDetails: {
    marginBottom: 16,
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
  progressSection: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
    marginTop: 8,
  },
});
