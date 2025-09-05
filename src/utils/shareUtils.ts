import { BloodRequest } from '@/types';
import { getUrgencyEmoji } from './urgencyUtils';

export const shareOnWhatsApp = (request: BloodRequest) => {
  const message = `🩸 URGENT BLOOD NEEDED ${getUrgencyEmoji(request.urgency)}

Patient: ${request.patientName}
Blood Type: ${request.bloodGroup}
Units Needed: ${request.unitsNeeded}
Hospital: ${request.hospital}
Location: ${request.city}, ${request.pincode}
Contact: ${request.contactPhone}

${request.description ? `Details: ${request.description}` : ''}

Please share this with potential donors. Every share can save a life! 🙏

#BloodDonation #SaveLives #BloodBuddyPro`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

export const shareRequest = (request: BloodRequest) => {
  const message = `Blood urgently needed for ${request.patientName}. Type: ${request.bloodGroup}, Location: ${request.city}. Contact: ${request.contactPhone}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Blood Donation Request',
      text: message,
      url: window.location.href,
    });
  } else {
    copyToClipboard(message);
  }
};