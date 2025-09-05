export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type UrgencyLevel = 'critical' | 'urgent' | 'normal';

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: BloodGroup;
  urgency: UrgencyLevel;
  hospital: string;
  city: string;
  pincode: string;
  unitsNeeded: number;
  contactPhone: string;
  description?: string;
  createdAt: Date;
  requesterName: string;
  status: 'active' | 'fulfilled' | 'expired';
}

export interface Donor {
  id: string;
  name: string;
  bloodGroup: BloodGroup;
  phone: string;
  city: string;
  pincode: string;
  email: string;
  lastDonation?: Date;
  totalDonations: number;
  isAvailable: boolean;
  age: number;
  weight: number;
}

export interface DonationRecord {
  id: string;
  donorId: string;
  donorName: string;
  bloodGroup: BloodGroup;
  date: Date;
  hospital: string;
  city: string;
  unitsContributed: number;
  points: number;
}