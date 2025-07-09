import React, { useEffect, useRef, useState } from 'react';
import { Wrench, Code, Shield, Zap, CheckCircle, Download, ExternalLink } from 'lucide-react';

const PracticalApplications: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeApplication, setActiveApplication] = useState(0);

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

  const applications = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "MAS Development Tool",
      description: "Use MAST as a diagnostic framework during development",
      details: "Developers can systematically identify potential failure points in their multi-agent architectures before deployment. The taxonomy serves as a checklist for robust system design.",
      benefits: [
        "Early failure detection in development cycle",
        "Systematic architectural review process",
        "Reduced debugging time and costs",
        "Improved system reliability"
      ],
      color: "blue"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Automated Testing Framework",
      description: "Integrate MAST into CI/CD pipelines for continuous validation",
      details: "Our LLM-as-a-Judge pipeline can be integrated into automated testing workflows to continuously monitor and evaluate multi-agent system performance.",
      benefits: [
        "Continuous performance monitoring",
        "Automated failure categorization",
        "Regression detection in MAS behavior",
        "Scalable evaluation processes"
      ],
      color: "green"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance Protocol",
      description: "Establish QA standards for multi-agent system deployment",
      details: "Organizations can use MAST as a quality assurance standard, ensuring that multi-agent systems meet reliability criteria before production deployment.",
      benefits: [
        "Standardized quality metrics",
        "Risk assessment framework",
        "Compliance verification",
        "Performance benchmarking"
      ],
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Research Acceleration",
      description: "Accelerate MAS research with structured failure analysis",
      details: "Researchers can leverage MAST to systematically study failure patterns, compare frameworks, and develop targeted solutions for specific failure categories.",
      benefits: [
        "Structured research methodology",
        "Comparable evaluation metrics",
        "Focused solution development",
        "Community knowledge sharing"
      ],
      color: "orange"
    }
  ];

  const tools = [
    {
      name: "MAST Evaluation Pipeline",
      description: "LLM-based automated failure detection and categorization system",
      features: ["OpenAI o1 integration", "Cohen's Kappa 0.77 accuracy", "Scalable evaluation"],
      link: "#",
      type: "pipeline"
    },
    {
      name: "Annotated Dataset",
      description: "200+ expert-annotated conversation traces across 7 MAS frameworks",
      features: ["Multi-framework coverage", "Expert annotations", "15K+ lines per trace"],
      link: "#",
      type: "dataset"
    },
    {
      name: "MAST Developer Guide",
      description: "Comprehensive guide for implementing MAST in your development workflow",
      features: ["Step-by-step integration", "Best practices", "Case studies"],
      link: "#",
      type: "guide"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Evaluate your current MAS against MAST categories",
      action: "Run initial analysis to identify existing failure patterns"
    },
    {
      step: 2,
      title: "Integration",
      description: "Incorporate MAST evaluation into your development pipeline",
      action: "Set up automated testing with our LLM evaluation pipeline"
    },
    {
      step: 3,
      title: "Optimization",
      description: "Address identified failure modes systematically",
      action: "Implement targeted fixes based on MAST recommendations"
    },
    {
      step: 4,
      title: "Monitoring",
      description: "Continuous monitoring and improvement of MAS performance",
      action: "Establish ongoing evaluation and optimization processes"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="applications" 
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Practical <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Applications
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            MAST serves as both a research tool and a practical framework for 
            developing more reliable multi-agent systems.
          </p>
        </div>

        {/* Interactive Applications */}
        <div className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              How to Use MAST
            </h3>
            
            {/* Application Tabs */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {applications.map((app, index) => (
                <button
                  key={index}
                  onClick={() => setActiveApplication(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    activeApplication === index
                      ? getColorClasses(app.color)
                      : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      activeApplication === index ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-600'
                    }`}>
                      {app.icon}
                    </div>
                    <h4 className="font-bold text-sm">{app.title}</h4>
                  </div>
                  <p className="text-xs opacity-80">{app.description}</p>
                </button>
              ))}
            </div>

            {/* Active Application Content */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {applications[activeApplication].title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {applications[activeApplication].details}
                  </p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium
                                   hover:bg-blue-700 transition-colors duration-200">
                    Get Started
                  </button>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    Key Benefits
                  </h5>
                  <ul className="space-y-3">
                    {applications[activeApplication].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Implementation Roadmap
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700
                         hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                                rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {step.action}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Tools & Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Tools & Resources
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700
                         hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {tool.name}
                  </h4>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 
                                 rounded-full text-xs font-medium">
                    {tool.type}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {tool.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium
                                   hover:bg-blue-700 transition-colors duration-200">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download
                  </button>
                  <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 
                                   rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 
                                   transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Improve Your Multi-Agent Systems?</h3>
          <p className="text-indigo-100 text-lg mb-8 max-w-3xl mx-auto">
            Start using MAST today to build more reliable, robust multi-agent systems. 
            Join the growing community of developers leveraging our research.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold text-lg
                             hover:bg-indigo-50 transition-colors duration-200">
              Download MAST Tools
            </button>
            <button className="px-8 py-4 bg-indigo-700 text-white rounded-2xl font-bold text-lg
                             hover:bg-indigo-800 transition-colors duration-200 border-2 border-indigo-400">
              Join Research Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalApplications;
