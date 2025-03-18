'use client';

import { useState } from 'react';
import { OnboardingTask } from '../types';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, PhoneIcon, ArrowDownTrayIcon, LinkIcon } from '@heroicons/react/24/outline';

interface TaskListProps {
  tasks: OnboardingTask[];
}

export default function TaskList({ tasks: initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const toggleTask = (taskId: string) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const handleTaskCheck = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleStepCheck = (taskId: string, stepId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? {
            ...task,
            steps: task.steps.map(step =>
              step.id === stepId ? { ...step, completed: !step.completed } : step
            )
          }
        : task
    ));
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          {/* Task Header */}
          <div
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => toggleTask(task.id)}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={task.completed}
                  className="h-5 w-5 rounded border-gray-300"
                  onChange={(e) => {
                    e.stopPropagation();
                    handleTaskCheck(task.id);
                  }}
                />
                {task.completed && (
                  <CheckIcon className="h-4 w-4 text-green-500 absolute top-0.5 left-0.5" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{task.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
              </div>
            </div>
            {expandedTask === task.id ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>

          {/* Task Details */}
          {expandedTask === task.id && (
            <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              {/* Steps */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Steps:</h4>
                <ul className="space-y-2">
                  {task.steps.map((step) => (
                    <li key={step.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={step.completed}
                        className="h-4 w-4 rounded border-gray-300"
                        onChange={() => handleStepCheck(task.id, step.id)}
                      />
                      <div className="flex-1">
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                          {step.description}
                        </span>
                        {step.downloadUrl && (
                          <a
                            href={step.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                            Download
                          </a>
                        )}
                        {step.url && (
                          <a
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <LinkIcon className="h-4 w-4 mr-1" />
                            Open
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacts */}
              {task.contacts && task.contacts.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Contacts:
                  </h4>
                  <ul className="space-y-2">
                    {task.contacts.map((contact, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        <div>{contact.name} - {contact.role}</div>
                        <div className="text-blue-600 dark:text-blue-400">
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </div>
                        {contact.phone && (
                          <div className="flex items-center text-blue-600 dark:text-blue-400">
                            <PhoneIcon className="h-4 w-4 mr-1" />
                            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                          </div>
                        )}
                        {contact.slack && (
                          <div className="text-blue-600 dark:text-blue-400">
                            {contact.slack}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 