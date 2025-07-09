import React, { useEffect, useRef } from 'react';
import { Database, Users, Target, BarChart3, CheckCircle, GitBranch } from 'lucide-react';

const ResearchMethodology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const methodologySteps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Collection",
      description: "Analyzed 7 popular MAS frameworks across 200+ conversation traces",
      details: "Each trace averaged over 15,000 lines of text from diverse tasks including software development, research assistance, and complex problem-solving scenarios.",
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Annotation",
      description: "6 expert human annotators with rigorous inter-annotator agreement",
      details: "Three annotators independently labeled 15 traces to establish baseline reliability, achieving Cohen's Kappa = 0.88 for exceptional consistency.",
      color: "green"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Failure Definition",
      description: "Systematic identification of instances where MAS failed to achieve objectives",
      details: "We defined failures as any instance where the multi-agent system did not meet the intended task requirements or expected outcomes.",
      color: "purple"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Taxonomic Analysis",
      description: "Iterative development of MAST through pattern recognition",
      details: "Through comprehensive analysis, we identified 14 distinct failure modes and organized them into 3 overarching categories based on common characteristics.",
      color: "orange"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Validation Pipeline",
      description: "LLM-as-a-Judge validation using OpenAI's o1 model",
      details: "Developed an automated evaluation pipeline achieving Cohen's Kappa = 0.77 agreement with expert annotations for scalable assessment.",
      color: "indigo"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Generalizability Testing",
      description: "Applied to additional MAS frameworks and benchmarks",
      details: "Tested on Magentic-One, OpenManus with GAIA and MMLU benchmarks, achieving Cohen's Kappa = 0.79 on unseen domains.",
      color: "red"
    }
  ];

  const frameworks = [
    "ChatDev", "MetaGPT", "AutoGen", "CrewAI", "LangGraph", "AgentVerse", "CAMEL"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
      indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="methodology" 
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Research <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our comprehensive approach to identifying and categorizing multi-agent system failures 
            through empirical analysis and expert validation.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {methodologySteps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700
                       hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl border-2 ${getColorClasses(step.color)}`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {step.description}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Study Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Study Scale & Impact</h3>
            <p className="text-blue-100 text-lg">
              Comprehensive analysis across multiple dimensions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Conversation Traces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-blue-100">Lines per Trace</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100">Expert Annotators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">0.88</div>
              <div className="text-blue-100">Cohen's Kappa</div>
            </div>
          </div>
        </div>

        {/* Analyzed Frameworks */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Multi-Agent Frameworks Analyzed
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 text-center
                         hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  {framework}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            MAST Development Process
          </h3>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Initial Data Analysis",
                  description: "Comprehensive review of 200+ multi-agent conversation traces",
                  position: "left"
                },
                {
                  title: "Pattern Recognition",
                  description: "Identification of recurring failure patterns across different frameworks",
                  position: "right"
                },
                {
                  title: "Taxonomy Development",
                  description: "Iterative creation of hierarchical failure categorization system",
                  position: "left"
                },
                {
                  title: "Expert Validation",
                  description: "Multi-round annotation process with high inter-rater reliability",
                  position: "right"
                },
                {
                  title: "Automation & Testing",
                  description: "LLM-based validation pipeline and generalizability assessment",
                  position: "left"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${item.position === 'left' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${item.position === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodology;
