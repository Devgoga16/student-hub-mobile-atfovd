
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';

export default function PersonalDataScreen() {
  const personalInfo = {
    name: 'John Doe',
    studentId: '2024001',
    email: 'john.doe@university.edu',
    phone: '+1 (555) 123-4567',
    address: '123 University Ave, College Town, ST 12345',
    dateOfBirth: 'January 15, 2000',
    major: 'Computer Science',
    year: 'Junior',
    advisor: 'Dr. Sarah Johnson',
  };

  const InfoRow = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
    <View style={styles.infoRow}>
      <View style={styles.iconContainer}>
        <IconSymbol name={icon as any} size={20} color="#007AFF" />
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.circle" size={80} color="#007AFF" />
          </View>
          <Text style={styles.profileName}>{personalInfo.name}</Text>
          <Text style={styles.profileId}>ID: {personalInfo.studentId}</Text>
          <Text style={styles.profileMajor}>{personalInfo.major} • {personalInfo.year}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.infoCard}>
            <InfoRow icon="envelope" label="Email" value={personalInfo.email} />
            <InfoRow icon="phone" label="Phone" value={personalInfo.phone} />
            <InfoRow icon="house" label="Address" value={personalInfo.address} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.infoCard}>
            <InfoRow icon="calendar" label="Date of Birth" value={personalInfo.dateOfBirth} />
            <InfoRow icon="graduationcap" label="Major" value={personalInfo.major} />
            <InfoRow icon="person.badge.plus" label="Academic Advisor" value={personalInfo.advisor} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic Status</Text>
          <View style={styles.statusCard}>
            <View style={styles.statusItem}>
              <Text style={styles.statusValue}>Active</Text>
              <Text style={styles.statusLabel}>Enrollment Status</Text>
            </View>
            <View style={styles.statusItem}>
              <Text style={styles.statusValue}>Full-time</Text>
              <Text style={styles.statusLabel}>Student Type</Text>
            </View>
            <View style={styles.statusItem}>
              <Text style={styles.statusValue}>Fall 2024</Text>
              <Text style={styles.statusLabel}>Current Term</Text>
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
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  profileId: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  profileMajor: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
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
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconContainer: {
    width: 32,
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  statusItem: {
    alignItems: 'center',
  },
  statusValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statusLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
