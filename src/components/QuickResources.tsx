import React from 'react';

const QuickResources: React.FC = () => {
  const resources = [
    {
      name: 'Lisa Schermbrucker',
      role: 'Cape Regional Director',
      email: 'lisa@isync.co.za'
    },
    {
      name: 'Warrick Boyd',
      role: 'Chief Technical Officer',
      email: 'warrick@isync.co.za',
      phone: '+27 (82) 374-4116'
    },
    {
      name: 'Calvin Stephens',
      role: 'Support Team Lead',
      email: 'calvin@isync.co.za'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Contacts</h2>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
            <h3 className="font-medium text-gray-900">{resource.name}</h3>
            <p className="text-sm text-gray-500">{resource.role}</p>
            <a href={`mailto:${resource.email}`} className="text-sm text-blue-600 hover:text-blue-800">
              {resource.email}
            </a>
            {resource.phone && (
              <p className="text-sm text-gray-600">{resource.phone}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickResources; 