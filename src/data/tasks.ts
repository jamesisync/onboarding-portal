import { OnboardingTask } from '../types';

export const onboardingTasks: OnboardingTask[] = [
  {
    id: '1',
    title: 'Microsoft Office Setup',
    description: 'Set up and configure Microsoft Office 365 applications',
    completed: false,
    category: 'setup',
    steps: [
      {
        id: '1-1',
        description: 'Get Office 365 account login details from Warrick',
        completed: false,
      },
      {
        id: '1-2',
        description: 'Access Office 365 portal',
        completed: false,
        url: 'https://portal.office.com'
      },
      {
        id: '1-3',
        description: 'Set up Outlook and configure email',
        completed: false,
      },
      {
        id: '1-4',
        description: 'Install and configure Excel',
        completed: false,
      },
      {
        id: '1-5',
        description: 'Install and configure PowerPoint',
        completed: false,
      },
      {
        id: '1-6',
        description: 'Install and configure Word',
        completed: false,
      },
      {
        id: '1-7',
        description: 'Install and configure Teams',
        completed: false,
      },
      {
        id: '1-8',
        description: 'Verify Notepad availability',
        completed: false,
      }
    ],
    contacts: [
      {
        name: 'Warrick Boyd',
        role: 'Chief Technical Officer',
        email: 'warrick@isync.co.za',
        phone: '+27 (82) 374-4116'
      }
    ]
  },
  {
    id: '2',
    title: 'Essential Applications Setup',
    description: 'Install and configure essential work applications',
    completed: false,
    category: 'setup',
    steps: [
      {
        id: '2-1',
        description: 'Install Google Chrome',
        completed: false,
        downloadUrl: 'https://www.google.com/chrome/'
      },
      {
        id: '2-2',
        description: 'Install TeamViewer and set up Two-Factor Authentication',
        completed: false,
        downloadUrl: 'https://www.microsoft.com/store/productId/9WZDNCRFJ0RH'
      },
      {
        id: '2-3',
        description: 'Install LastPass for password management',
        completed: false,
      },
      {
        id: '2-4',
        description: 'Install Freshdesk',
        completed: false,
        url: 'https://freshdesk.com/login'
      },
      {
        id: '2-5',
        description: 'Set up WiFi access (credentials available in LastPass)',
        completed: false,
      },
      {
        id: '2-6',
        description: 'Install Tictok from iSync Intranet_Installs',
        completed: false,
        url: 'https://isync.tictok.co.za/tickets'
      },
      {
        id: '2-7',
        description: 'Install Yeastar Linkus Mobile from App Store',
        completed: false,
      },
      {
        id: '2-8',
        description: 'Install Zoom',
        completed: false,
        downloadUrl: 'https://zoom.us/download'
      },
      {
        id: '2-9',
        description: 'Install Adobe Reader',
        completed: false,
        downloadUrl: 'https://get.adobe.com/reader/'
      },
      {
        id: '2-10',
        description: 'Install WinRAR from Company folder-Software',
        completed: false
      }
    ],
    contacts: [
      {
        name: 'Jason Powell',
        role: 'VP of Software Integrations & Internal Systems',
        email: 'jason@isyncsolutions.com'
      },
      {
        name: 'Lisa Schermbrucker',
        role: 'Cape Regional Director',
        email: 'lisa@isync.co.za'
      }
    ]
  },
  {
    id: '3',
    title: 'Access Company Folders',
    description: 'Set up access to company shared drives and cloud storage',
    completed: false,
    category: 'setup',
    steps: [
      {
        id: '3-1',
        description: 'Connect to company OneDrive - Essential for accessing company documents',
        completed: false,
      },
      {
        id: '3-2',
        description: 'Press Windows + R, type \\\\isyncdc03 and press Enter to access the company network drive',
        completed: false,
      },
      {
        id: '3-3',
        description: 'Navigate to the company folder in File Explorer',
        completed: false,
      }
    ],
    contacts: [
      {
        name: 'Warrick Boyd',
        role: 'Chief Technical Officer',
        email: 'warrick@isync.co.za',
        phone: '+27 (82) 374-4116'
      }
    ]
  },
  {
    id: '4',
    title: 'Development Tools Setup',
    description: 'Install and configure development and reporting tools',
    completed: false,
    category: 'setup',
    steps: [
      {
        id: '4-1',
        description: 'Install SQL Server Management Studio (SSMS)',
        completed: false,
        downloadUrl: 'https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms'
      },
      {
        id: '4-2',
        description: 'Install Crystal Reports from network location',
        completed: false,
        url: '102.37.98.172:91/Crystal/Crystal_Limit.exe'
      },
      {
        id: '4-3',
        description: 'Install Crystal Reports VS2010 SP4',
        completed: false,
        url: '102.37.98.172:91/Crystal/CrystalInstall_VS2010_sp4.exe'
      },
      {
        id: '4-4',
        description: 'Install TFS from Company folder_Software (Details in Tictok)',
        completed: false
      }
    ],
    contacts: [
      {
        name: 'Jason Powell',
        role: 'VP of Software Integrations & Internal Systems',
        email: 'jason@isyncsolutions.com'
      }
    ]
  },
  {
    id: '5',
    title: 'Platform Access Setup',
    description: 'Set up access to various company platforms and systems',
    completed: false,
    category: 'setup',
    steps: [
      {
        id: '5-1',
        description: 'Access Sync Intranet',
        completed: false,
        url: 'https://isync.sharepoint.com/'
      },
      {
        id: '5-2',
        description: 'Access Cape Sharepoint',
        completed: false,
        url: 'https://isync.sharepoint.com/sites/isynccape'
      },
      {
        id: '5-3',
        description: 'Access Nexus (Contact Jason for setup)',
        completed: false
      },
      {
        id: '5-4',
        description: 'Register for HRTorque',
        completed: false,
        url: 'https://hrtorque.psiberworks.com/'
      },
      {
        id: '5-5',
        description: 'Access Sync eLearning Platform',
        completed: false,
        url: 'https://isyncsolutions.talentlms.com/'
      },
      {
        id: '5-6',
        description: 'Access Leapsome',
        completed: false,
        url: 'https://www.leapsome.com/'
      },
      {
        id: '5-7',
        description: 'Join iSync CPT WhatsApp group (Contact Lisa)',
        completed: false
      }
    ],
    contacts: [
      {
        name: 'Lisa Schermbrucker',
        role: 'Cape Regional Director',
        email: 'lisa@isync.co.za'
      },
      {
        name: 'Jason Powell',
        role: 'VP of Software Integrations & Internal Systems',
        email: 'jason@isyncsolutions.com'
      },
      {
        name: 'Amy',
        role: 'eLearning Administrator',
        email: 'amy@isync.co.za'
      }
    ]
  },
  {
    id: '6',
    title: 'Complete HR Documentation',
    description: 'Fill out and submit all required HR forms and documents',
    completed: false,
    category: 'hr',
    steps: [
      {
        id: '6-1',
        description: 'Complete Employee Details Form (will be received from Kogie Reddy)',
        completed: false,
      },
      {
        id: '6-2',
        description: 'Submit scanned copy of Identity Document (both sides if ID card)',
        completed: false,
      },
      {
        id: '6-3',
        description: 'Submit bank confirmation letter or statement (transactions/balances can be hidden)',
        completed: false,
      },
      {
        id: '6-4',
        description: 'Register for and submit tax number (online or at SARS branch)',
        completed: false,
      },
      {
        id: '6-5',
        description: 'Sign iSync Contract of Employment (sent to personal email)',
        completed: false,
      },
      {
        id: '6-6',
        description: 'Sign iSync Cyber Security Policy',
        completed: false,
      },
      {
        id: '6-7',
        description: 'Sign Personal Details Confirmation',
        completed: false,
      },
      {
        id: '6-8',
        description: 'Register an account with HRtorque',
        completed: false,
        url: 'https://hrtorque.psiberworks.com/'
      }
    ],
    contacts: [
      {
        name: 'Kogie Reddy',
        role: 'Financial Controller',
        email: 'kogie@isync.co.za'
      }
    ]
  }
]; 