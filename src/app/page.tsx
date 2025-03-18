'use client';

import { Inter } from 'next/font/google'
import TaskList from '../components/TaskList'
import { onboardingTasks } from '../data/tasks'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            iSync Solutions Onboarding Portal
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ 
              width: `${(onboardingTasks.filter(t => t.completed).length / onboardingTasks.length) * 100}%` 
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tasks List */}
          <div className="md:col-span-2">
            <TaskList tasks={onboardingTasks} />
          </div>

          {/* Resources Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Resources
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white">Important Contacts</h3>
                <ul className="mt-2 space-y-3 text-sm">
                  <li>
                    <div className="text-gray-600 dark:text-gray-300">Lisa Schermbrucker - Cape Regional Director</div>
                    <a href="mailto:lisa@isync.co.za" className="text-blue-600 dark:text-blue-400 hover:underline">
                      lisa@isync.co.za
                    </a>
                  </li>
                  <li>
                    <div className="text-gray-600 dark:text-gray-300">Warrick Boyd - Chief Technical Officer</div>
                    <a href="mailto:warrick@isync.co.za" className="text-blue-600 dark:text-blue-400 hover:underline">
                      warrick@isync.co.za
                    </a>
                  </li>
                  <li>
                    <div className="text-gray-600 dark:text-gray-300">Calvin Stephens - Support Team Lead</div>
                    <a href="mailto:calvin@isync.co.za" className="text-blue-600 dark:text-blue-400 hover:underline">
                      calvin@isync.co.za
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white">Useful Links</h3>
                <ul className="mt-2 space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li><a href="#" className="hover:underline">Employee Handbook</a></li>
                  <li><a href="#" className="hover:underline">Benefits Portal</a></li>
                  <li><a href="#" className="hover:underline">Training Resources</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
