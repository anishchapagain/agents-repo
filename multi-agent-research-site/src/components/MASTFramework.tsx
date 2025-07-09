import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle, Users, CheckCircle } from 'lucide-react';

interface FailureMode {
  id: string;
  name: string;
  percentage: number;
  description: string;
  stage: string;
}

interface FailureCategory {
  id: string;
  name: string;
  subtitle: string;
  percentage: number;
  color: string;
  icon: React.ReactNode;
  failures: FailureMode[];
}

const MASTFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedFailure, setExpandedFailure] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const failureCategories: FailureCategory[] = [
    {
      id: 'fc1',
      name: 'FC1: Specification Issues',
      subtitle: 'System Design Flaws',
      percentage: 41.77,
      color: 'red',
      icon: <AlertTriangle className="w-6 h-6" />,
      failures: [
        {
          id: 'f1.1',
          name: 'Disobey Task Specification',
          percentage: 17.14,
          description: 'Agents fail to follow the given task requirements or constraints.',
          stage: 'Pre-Execution'
        },
        {
          id: 'f1.2',
          name: 'Disobey Role Specification',
          percentage: 13.98,
          description: 'Agents do not adhere to their assigned roles or responsibilities.',
          stage: 'Pre-Execution'
        },
        {
          id: 'f1.3',
          name: 'Step Repetition',
          percentage: 6.82,
          description: 'Agents get stuck in loops and repeat the same actions unnecessarily.',
          stage: 'Execution'
        },
        {
          id: 'f1.4',
          name: 'Loss of Conversation History',
          percentage: 1.66,
          description: 'Agents lose track of previous interactions and context.',
          stage: 'Execution'
        },
        {
          id: 'f1.5',
          name: 'Unaware of Termination Conditions',
          percentage: 2.33,
          description: 'Agents do not recognize when to stop or complete the task.',
          stage: 'Post-Execution'
        }
      ]
    },
    {
      id: 'fc2',
      name: 'FC2: Inter-Agent Misalignment',
      subtitle: 'Agent Coordination Breakdown',
      percentage: 36.94,
      color: 'amber',
      icon: <Users className="w-6 h-6" />,
      failures: [
        {
          id: 'f2.1',
          name: 'Conversation Reset',
          percentage: 7.82,
          description: 'Communication between agents gets reset or interrupted.',
          stage: 'Execution'
        },
        {
          id: 'f2.2',
          name: 'Fail to Ask for Clarification',
          percentage: 6.66,
          description: 'Agents proceed without seeking necessary clarification.',
          stage: 'Execution'
        },
        {
          id: 'f2.3',
          name: 'Task Derailment',
          percentage: 0.17,
          description: 'Agents deviate from the main task objective.',
          stage: 'Execution'
        },
        {
          id: 'f2.4',
          name: 'Information Withholding',
          percentage: 3.33,
          description: 'Agents fail to share relevant information with others.',
          stage: 'Execution'
        },
        {
          id: 'f2.5',
          name: 'Ignored Other Agent\'s Input',
          percentage: 9.82,
          description: 'Agents dismiss or overlook input from other agents.',
          stage: 'Execution'
        },
        {
          id: 'f2.6',
          name: 'Reasoning-Action Mismatch',
          percentage: 11.65,
          description: 'Disconnect between agent reasoning and actual actions taken.',
          stage: 'Execution'
        }
      ]
    },
    {
      id: 'fc3',
      name: 'FC3: Task Verification',
      subtitle: 'Quality Control Issues',
      percentage: 21.30,
      color: 'blue',
      icon: <CheckCircle className="w-6 h-6" />,
      failures: [
        {
          id: 'f3.1',
          name: 'Premature Termination',
          percentage: 7.15,
          description: 'Tasks are ended before completion or proper verification.',
          stage: 'Post-Execution'
        },
        {
          id: 'f3.2',
          name: 'No or Incomplete Verification',
          percentage: 10.98,
          description: 'Insufficient or missing quality checks on task completion.',
          stage: 'Post-Execution'
        },
        {
          id: 'f3.3',
          name: 'Incorrect Verification',
          percentage: 0.50,
          description: 'Verification process itself contains errors or is flawed.',
          stage: 'Post-Execution'
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        text: 'text-red-600 dark:text-red-400',
        accent: 'bg-red-500'
      },
      amber: {
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        border: 'border-amber-200 dark:border-amber-800',
        text: 'text-amber-600 dark:text-amber-400',
        accent: 'bg-amber-500'
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-600 dark:text-blue-400',
        accent: 'bg-blue-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="mast-framework" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MAST Framework
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Multi-Agent System Failure Taxonomy — A comprehensive framework identifying 
            14 unique failure modes across 3 overarching categories.
          </p>
        </div>

        {/* Interactive Visualization */}
        <div className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Failure Category Distribution
            </h3>
            
            {/* Progress Bars */}
            <div className="space-y-6">
              {failureCategories.map((category) => {
                const colorClasses = getColorClasses(category.color);
                return (
                  <div
                    key={category.id}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                             ${activeCategory === category.id 
                               ? `${colorClasses.bg} ${colorClasses.border}` 
                               : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'}`}
                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${colorClasses.text}`}>
                          {category.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {category.name}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                          {category.percentage}%
                        </span>
                        {activeCategory === category.id ? 
                          <ChevronDown className="w-5 h-5 text-slate-500" /> : 
                          <ChevronRight className="w-5 h-5 text-slate-500" />
                        }
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${colorClasses.accent} transition-all duration-1000`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    
                    {/* Expanded Content */}
                    {activeCategory === category.id && (
                      <div className="mt-6 space-y-4">
                        <h5 className="text-lg font-semibold text-slate-900 dark:text-white">
                          Failure Modes in this Category:
                        </h5>
                        <div className="grid gap-3">
                          {category.failures.map((failure) => (
                            <div
                              key={failure.id}
                              className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-600
                                       cursor-pointer hover:shadow-md transition-all duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedFailure(expandedFailure === failure.id ? null : failure.id);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h6 className="font-medium text-slate-900 dark:text-white">
                                      {failure.name}
                                    </h6>
                                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                                      {failure.percentage}%
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                                    <span>Stage: {failure.stage}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {expandedFailure === failure.id && (
                                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-600">
                                  <p className="text-slate-600 dark:text-slate-300">
                                    {failure.description}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 
                        rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Key Insights
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Specification issues account for the highest failure rate (41.77%)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Inter-agent coordination problems are nearly as frequent (36.94%)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Task verification failures suggest inadequate quality control (21.30%)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 
                        rounded-3xl p-8 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Research Impact
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>First empirically grounded failure taxonomy for MAS</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Cohen's Kappa score of 0.88 ensures high reliability</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Provides actionable framework for MAS developers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MASTFramework;
