
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { Button } from '@/components/button';

export default function EnrollmentScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);

  const availableCourses = [
    {
      id: 1,
      code: 'CS502',
      name: 'Advanced Algorithms',
      instructor: 'Dr. Jennifer Smith',
      credits: 3,
      schedule: 'MWF 9:00-10:00 AM',
      room: 'CS Building 301',
      capacity: 30,
      enrolled: 25,
      prerequisites: ['CS301'],
      description: 'Advanced study of algorithmic techniques and analysis.',
    },
    {
      id: 2,
      code: 'CS520',
      name: 'Machine Learning',
      instructor: 'Prof. David Lee',
      credits: 3,
      schedule: 'TTh 1:00-2:30 PM',
      room: 'CS Building 205',
      capacity: 25,
      enrolled: 23,
      prerequisites: ['CS301', 'MATH301'],
      description: 'Introduction to machine learning algorithms and applications.',
    },
    {
      id: 3,
      code: 'CS530',
      name: 'Computer Networks',
      instructor: 'Dr. Maria Garcia',
      credits: 3,
      schedule: 'MWF 2:00-3:00 PM',
      room: 'CS Building 102',
      capacity: 35,
      enrolled: 18,
      prerequisites: ['CS201'],
      description: 'Fundamentals of computer networking and protocols.',
    },
    {
      id: 4,
      code: 'CS540',
      name: 'Cybersecurity',
      instructor: 'Prof. James Wilson',
      credits: 3,
      schedule: 'TTh 10:00-11:30 AM',
      room: 'CS Building 401',
      capacity: 20,
      enrolled: 19,
      prerequisites: ['CS530'],
      description: 'Introduction to cybersecurity principles and practices.',
    },
    {
      id: 5,
      code: 'MATH502',
      name: 'Advanced Statistics',
      instructor: 'Dr. Susan Taylor',
      credits: 3,
      schedule: 'MWF 11:00-12:00 PM',
      room: 'Math Building 201',
      capacity: 40,
      enrolled: 32,
      prerequisites: ['MATH301'],
      description: 'Advanced statistical methods and applications.',
    },
  ];

  const filteredCourses = availableCourses.filter(course =>
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCourseSelection = (courseId: number) => {
    setSelectedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleEnrollment = () => {
    if (selectedCourses.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course to enroll.');
      return;
    }

    const selectedCourseNames = availableCourses
      .filter(course => selectedCourses.includes(course.id))
      .map(course => course.code)
      .join(', ');

    Alert.alert(
      'Enrollment Confirmation',
      `Are you sure you want to enroll in: ${selectedCourseNames}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Enroll',
          onPress: () => {
            console.log('Enrolling in courses:', selectedCourses);
            Alert.alert('Success', 'You have been successfully enrolled in the selected courses!');
            setSelectedCourses([]);
          },
        },
      ]
    );
  };

  const getAvailabilityColor = (enrolled: number, capacity: number) => {
    const ratio = enrolled / capacity;
    if (ratio >= 0.9) return '#FF3B30'; // Almost full
    if (ratio >= 0.7) return '#FF9500'; // Getting full
    return '#34C759'; // Available
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <IconSymbol name="magnifyingglass" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.enrollmentSummary}>
          <Text style={styles.summaryTitle}>Enrollment Summary</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{selectedCourses.length}</Text>
              <Text style={styles.summaryLabel}>Selected</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>
                {selectedCourses.reduce((sum, id) => {
                  const course = availableCourses.find(c => c.id === id);
                  return sum + (course?.credits || 0);
                }, 0)}
              </Text>
              <Text style={styles.summaryLabel}>Credits</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNumber}>{filteredCourses.length}</Text>
              <Text style={styles.summaryLabel}>Available</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Courses</Text>
          {filteredCourses.map((course) => (
            <Pressable
              key={course.id}
              style={[
                styles.courseCard,
                selectedCourses.includes(course.id) && styles.selectedCourseCard
              ]}
              onPress={() => toggleCourseSelection(course.id)}
            >
              <View style={styles.courseHeader}>
                <View style={styles.courseInfo}>
                  <Text style={styles.courseCode}>{course.code}</Text>
                  <Text style={styles.courseName}>{course.name}</Text>
                </View>
                <View style={styles.selectionIndicator}>
                  {selectedCourses.includes(course.id) ? (
                    <IconSymbol name="checkmark.circle.fill" size={24} color="#007AFF" />
                  ) : (
                    <IconSymbol name="circle" size={24} color="#ccc" />
                  )}
                </View>
              </View>

              <Text style={styles.courseDescription}>{course.description}</Text>

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

              <View style={styles.availabilitySection}>
                <View style={styles.availabilityInfo}>
                  <Text style={styles.availabilityLabel}>Availability:</Text>
                  <Text style={[
                    styles.availabilityText,
                    { color: getAvailabilityColor(course.enrolled, course.capacity) }
                  ]}>
                    {course.enrolled}/{course.capacity} enrolled
                  </Text>
                </View>
                <View style={styles.availabilityBar}>
                  <View style={[
                    styles.availabilityFill,
                    {
                      width: `${(course.enrolled / course.capacity) * 100}%`,
                      backgroundColor: getAvailabilityColor(course.enrolled, course.capacity)
                    }
                  ]} />
                </View>
              </View>

              {course.prerequisites.length > 0 && (
                <View style={styles.prerequisitesSection}>
                  <Text style={styles.prerequisitesLabel}>Prerequisites:</Text>
                  <Text style={styles.prerequisitesText}>
                    {course.prerequisites.join(', ')}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>

        {selectedCourses.length > 0 && (
          <View style={styles.enrollmentActions}>
            <Button
              onPress={handleEnrollment}
              style={styles.enrollButton}
              variant="filled"
              size="lg"
            >
              Enroll in Selected Courses ({selectedCourses.length})
            </Button>
          </View>
        )}
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
  searchSection: {
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
    marginLeft: 12,
  },
  enrollmentSummary: {
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
    borderWidth: 2,
    borderColor: 'transparent',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  selectedCourseCard: {
    borderColor: '#007AFF',
    backgroundColor: '#f0f8ff',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
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
  selectionIndicator: {
    marginLeft: 12,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  courseDetails: {
    marginBottom: 12,
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
  availabilitySection: {
    marginBottom: 12,
  },
  availabilityInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  availabilityLabel: {
    fontSize: 14,
    color: '#666',
  },
  availabilityText: {
    fontSize: 14,
    fontWeight: '600',
  },
  availabilityBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  availabilityFill: {
    height: '100%',
    borderRadius: 2,
  },
  prerequisitesSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
  },
  prerequisitesLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  prerequisitesText: {
    fontSize: 14,
    color: '#666',
  },
  enrollmentActions: {
    marginTop: 20,
    marginBottom: 40,
  },
  enrollButton: {
    backgroundColor: '#007AFF',
  },
});
