import { BloodRequest, Donor, DonationRecord, BloodGroup, UrgencyLevel } from '@/types';

// Mock blood requests
export const mockBloodRequests: BloodRequest[] = [
  {
    id: '1',
    patientName: 'Rahul Sharma',
    bloodGroup: 'O-',
    urgency: 'critical',
    hospital: 'AIIMS Delhi',
    city: 'Delhi',
    pincode: '110029',
    unitsNeeded: 3,
    contactPhone: '+91 9876543210',
    description: 'Emergency surgery required. Patient has lost significant blood.',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    requesterName: 'Dr. Priya Mehta',
    status: 'active'
  },
  {
    id: '2',
    patientName: 'Anita Patel',
    bloodGroup: 'A+',
    urgency: 'urgent',
    hospital: 'Fortis Hospital',
    city: 'Mumbai',
    pincode: '400001',
    unitsNeeded: 2,
    contactPhone: '+91 9123456789',
    description: 'Scheduled surgery in 2 days.',
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    requesterName: 'Suresh Patel',
    status: 'active'
  },
  {
    id: '3',
    patientName: 'Vikram Singh',
    bloodGroup: 'B+',
    urgency: 'normal',
    hospital: 'Apollo Hospital',
    city: 'Bangalore',
    pincode: '560001',
    unitsNeeded: 1,
    contactPhone: '+91 9988776655',
    description: 'Regular treatment required.',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    requesterName: 'Meera Singh',
    status: 'active'
  },
  {
    id: '4',
    patientName: 'Preeti Gupta',
    bloodGroup: 'AB-',
    urgency: 'critical',
    hospital: 'Max Hospital',
    city: 'Gurgaon',
    pincode: '122001',
    unitsNeeded: 4,
    contactPhone: '+91 9876543211',
    description: 'Critical condition, urgent blood requirement.',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    requesterName: 'Dr. Amit Gupta',
    status: 'active'
  }
];

// Mock donors
export const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'Arjun Kumar',
    bloodGroup: 'O-',
    phone: '+91 9876543212',
    city: 'Delhi',
    pincode: '110001',
    email: 'arjun.kumar@email.com',
    lastDonation: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
    totalDonations: 15,
    isAvailable: true,
    age: 28,
    weight: 70
  },
  {
    id: '2',
    name: 'Priya Sharma',
    bloodGroup: 'A+',
    phone: '+91 9123456788',
    city: 'Mumbai',
    pincode: '400001',
    email: 'priya.sharma@email.com',
    lastDonation: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
    totalDonations: 8,
    isAvailable: true,
    age: 25,
    weight: 55
  },
  {
    id: '3',
    name: 'Rajesh Patel',
    bloodGroup: 'B+',
    phone: '+91 9988776654',
    city: 'Bangalore',
    pincode: '560001',
    email: 'rajesh.patel@email.com',
    lastDonation: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
    totalDonations: 22,
    isAvailable: true,
    age: 32,
    weight: 75
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    bloodGroup: 'AB-',
    phone: '+91 9876543213',
    city: 'Hyderabad',
    pincode: '500001',
    email: 'sneha.reddy@email.com',
    lastDonation: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
    totalDonations: 5,
    isAvailable: true,
    age: 24,
    weight: 58
  },
  {
    id: '5',
    name: 'Amit Singh',
    bloodGroup: 'O+',
    phone: '+91 9123456787',
    city: 'Chennai',
    pincode: '600001',
    email: 'amit.singh@email.com',
    lastDonation: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    totalDonations: 18,
    isAvailable: true,
    age: 29,
    weight: 68
  }
];

// Mock donation records
export const mockDonationRecords: DonationRecord[] = [
  {
    id: '1',
    donorId: '1',
    donorName: 'Arjun Kumar',
    bloodGroup: 'O-',
    date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    hospital: 'AIIMS Delhi',
    city: 'Delhi',
    unitsContributed: 1,
    points: 50
  },
  {
    id: '2',
    donorId: '3',
    donorName: 'Rajesh Patel',
    bloodGroup: 'B+',
    date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
    hospital: 'Apollo Hospital',
    city: 'Bangalore',
    unitsContributed: 1,
    points: 50
  },
  {
    id: '3',
    donorId: '5',
    donorName: 'Amit Singh',
    bloodGroup: 'O+',
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    hospital: 'Apollo Hospital',
    city: 'Chennai',
    unitsContributed: 1,
    points: 50
  }
];

export const bloodGroups: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const urgencyLevels: UrgencyLevel[] = ['critical', 'urgent', 'normal'];