
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';

export default function CurriculumScreen() {
  const curriculumData = {
    program: 'Bachelor of Science in Computer Science',
    totalCredits: 120,
    completedCredits: 90,
    remainingCredits: 30,
    expectedGraduation: 'Spring 2025',
  };

  const requirements = [
    {
      category: 'Core Computer Science',
      totalCredits: 45,
      completedCredits: 36,
      courses: [
        { code: 'CS101', name: 'Introduction to Programming', credits: 3, status: 'completed' },
        { code: 'CS201', name: 'Data Structures', credits: 3, status: 'completed' },
        { code: 'CS301', name: 'Algorithms', credits: 3, status: 'completed' },
        { code: 'CS401', name: 'Software Engineering', credits: 3, status: 'in-progress' },
        { code: 'CS451', name: 'Database Systems', credits: 3, status: 'not-taken' },
      ],
    },
    {
      category: 'Mathematics',
      totalCredits: 18,
      completedCredits: 15,
      courses: [
        { code: 'MATH101', name: 'Calculus I', credits: 3, status: 'completed' },
        { code: 'MATH102', name: 'Calculus II', credits: 3, status: 'completed' },
        { code: 'MATH201', name: 'Linear Algebra', credits: 3, status: 'completed' },
        { code: 'MATH301', name: 'Statistics', credits: 3, status: 'completed' },
        { code: 'MATH401', name: 'Discrete Mathematics', credits: 3, status: 'completed' },
        { code: 'MATH451', name: 'Numerical Analysis', credits: 3, status: 'not-taken' },
      ],
    },
    {
      category: 'General Education',
      totalCredits: 30,
      completedCredits: 24,
      courses: [
        { code: 'ENG101', name: 'English Composition', credits: 3, status: 'completed' },
        { code: 'HIST201', name: 'World History', credits: 3, status: 'completed' },
        { code: 'PHIL101', name: 'Introduction to Philosophy', credits: 3, status: 'completed' },
        { code: 'ART201', name: 'Art Appreciation', credits: 3, status: 'completed' },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#34C759';
      case 'in-progress':
        return '#FF9500';
      case 'not-taken':
        return '#8E8E93';
      default:
        return '#8E8E93';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'checkmark.circle.fill';
      case 'in-progress':
        return 'clock.fill';
      case 'not-taken':
        return 'circle';
      default:
        return 'circle';
    }
  };

  const progressPercentage = (curriculumData.completedCredits / curriculumData.totalCredits) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerCard}>
          <Text style={styles.programTitle}>{curriculumData.program}</Text>
          <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
            </View>
            <Text style={styles.progressText}>
              {curriculumData.completedCredits} of {curriculumData.totalCredits} credits completed
            </Text>
          </View>
          <View style={styles.graduationInfo}>
            <IconSymbol name="graduationcap" size={20} color="#007AFF" />
            <Text style={styles.graduationText}>
              Expected Graduation: {curriculumData.expectedGraduation}
            </Text>
          </View>
        </View>

        {requirements.map((requirement, index) => (
          <View key={index} style={styles.requirementCard}>
            <View style={styles.requirementHeader}>
              <Text style={styles.categoryTitle}>{requirement.category}</Text>
              <Text style={styles.creditsSummary}>
                {requirement.completedCredits}/{requirement.totalCredits} credits
              </Text>
            </View>
            
            <View style={styles.categoryProgress}>
              <View style={styles.progressBar}>
                <View style={[
                  styles.progressFill,
                  { width: `${(requirement.completedCredits / requirement.totalCredits) * 100}%` }
                ]} />
              </View>
            </View>

            {requirement.courses.map((course, courseIndex) => (
              <Pressable key={courseIndex} style={styles.courseRow}>
                <View style={styles.courseInfo}>
                  <IconSymbol
                    name={getStatusIcon(course.status) as any}
                    size={20}
                    color={getStatusColor(course.status)}
                  />
                  <View style={styles.courseDetails}>
                    <Text style={styles.courseCode}>{course.code}</Text>
                    <Text style={styles.courseName}>{course.name}</Text>
                  </View>
                </View>
                <Text style={styles.courseCredits}>{course.credits} cr</Text>
              </Pressable>
            ))}
          </View>
        ))}

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Degree Progress Summary</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{curriculumData.completedCredits}</Text>
              <Text style={styles.summaryLabel}>Credits Completed</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{curriculumData.remainingCredits}</Text>
              <Text style={styles.summaryLabel}>Credits Remaining</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{Math.round(progressPercentage)}%</Text>
              <Text style={styles.summaryLabel}>Progress</Text>
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
  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  programTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressSection: {
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  graduationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graduationText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  requirementCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  requirementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  creditsSummary: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  categoryProgress: {
    marginBottom: 16,
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  courseDetails: {
    marginLeft: 12,
    flex: 1,
  },
  courseCode: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  courseName: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  courseCredits: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
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
});
