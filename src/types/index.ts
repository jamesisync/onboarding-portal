export interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: 'setup' | 'hr' | 'training' | 'other';
  steps: TaskStep[];
  contacts?: Contact[];
}

export interface TaskStep {
  id: string;
  description: string;
  imageUrl?: string;
  completed: boolean;
  downloadUrl?: string;
  url?: string;
}

export interface Contact {
  name: string;
  role: string;
  email: string;
  slack?: string;
  phone?: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  description: string;
  category: 'documentation' | 'tools' | 'training' | 'other';
} 