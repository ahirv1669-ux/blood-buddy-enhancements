import { UrgencyLevel } from '@/types';

export const getUrgencyColor = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'critical':
      return 'bg-red-500 text-white border-red-600';
    case 'urgent':
      return 'bg-orange-500 text-white border-orange-600';
    case 'normal':
      return 'bg-green-500 text-white border-green-600';
    default:
      return 'bg-gray-500 text-white border-gray-600';
  }
};

export const getUrgencyEmoji = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'critical':
      return '🔴';
    case 'urgent':
      return '🟠';
    case 'normal':
      return '🟢';
    default:
      return '⚪';
  }
};

export const getUrgencyText = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'critical':
      return 'Critical (within 24h)';
    case 'urgent':
      return 'Urgent (2-3 days)';
    case 'normal':
      return 'Normal';
    default:
      return 'Unknown';
  }
};

export const getUrgencyTimeframe = (urgency: UrgencyLevel): string => {
  switch (urgency) {
    case 'critical':
      return 'within 24 hours';
    case 'urgent':
      return '2-3 days';
    case 'normal':
      return 'as per convenience';
    default:
      return 'unknown timeframe';
  }
};