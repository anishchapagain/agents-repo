import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, AlertCircle, Lightbulb, Target, ArrowRight, PieChart } from 'lucide-react';

const KeyFindings: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeInsight, setActiveInsight] = useState(0);

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

  const keyInsights = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "System Design vs. LLM Limitations",
      finding: "Failures primarily stem from organizational design issues rather than individual agent capabilities",
      implication: "Improving base LLM models alone will not solve most multi-agent system failures",
      percentage: "78%",
      description: "Our analysis reveals that the majority of failures are architectural rather than model-based."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Specification Issues Dominate",
      finding: "41.77% of failures are due to specification problems in system design",
      implication: "Clear role definition and task specification are critical for MAS success",
      percentage: "42%",
      description: "Task and role specification failures represent the largest category of issues."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Coordination Challenges",
      finding: "36.94% of failures involve inter-agent misalignment and communication breakdown",
      implication: "Better coordination mechanisms and communication protocols are essential",
      percentage: "37%",
      description: "Agent coordination remains a fundamental challenge in multi-agent systems."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Quality Control Gaps",
      finding: "21.30% of failures occur in task verification and quality control processes",
      implication: "Robust verification mechanisms must be built into MAS architectures",
      percentage: "21%",
      description: "Inadequate verification processes lead to incomplete or incorrect task completion."
    }
  ];

  const researchImplications = [
    {
      title: "Architectural Focus",
      description: "Future research should prioritize organizational design principles over individual agent improvements",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Coordination Protocols",
      description: "Development of standardized inter-agent communication and coordination frameworks",
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      title: "Verification Systems",
      description: "Integration of robust quality control and verification mechanisms in MAS design",
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  const caseStudyResults = [
    {
      framework: "ChatDev",
      improvement: "+15.6%",
      intervention: "Improved role specification",
      description: "Enhanced role clarity and task distribution"
    },
    {
      framework: "MetaGPT",
      improvement: "+8.3%",
      intervention: "Architectural changes",
      description: "Modified agent interaction patterns"
    },
    {
      framework: "AutoGen",
      improvement: "+12.1%",
      intervention: "Communication protocols",
      description: "Standardized inter-agent messaging"
    }
  ];

  return (
    <section 
      id="findings" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Key <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Findings
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our comprehensive analysis reveals fundamental insights about multi-agent system 
            failures and provides a roadmap for future development.
          </p>
        </div>

        {/* Interactive Insights */}
        <div className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Critical Research Insights
            </h3>
            
            {/* Insight Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {keyInsights.map((insight, index) => (
                <button
                  key={index}
                  onClick={() => setActiveInsight(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeInsight === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {insight.title}
                </button>
              ))}
            </div>

            {/* Active Insight Display */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                    {keyInsights[activeInsight].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {keyInsights[activeInsight].title}
                    </h4>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 
                                   rounded-full text-sm font-bold">
                      {keyInsights[activeInsight].percentage}
                    </span>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                    <strong>Finding:</strong> {keyInsights[activeInsight].finding}
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                    <strong>Implication:</strong> {keyInsights[activeInsight].implication}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500">
                    {keyInsights[activeInsight].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Results */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 
                        rounded-3xl p-8 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Intervention Results
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Case studies demonstrate that targeted interventions can improve performance, 
              but fundamental architectural changes are needed for reliable MAS.
            </p>
            
            <div className="space-y-4">
              {caseStudyResults.map((result, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-green-200 dark:border-green-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {result.framework}
                    </h4>
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                      {result.improvement}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                    <strong>Intervention:</strong> {result.intervention}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 
                        rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Research Implications
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MAST provides a concrete roadmap for addressing fundamental challenges 
              in multi-agent system development and research.
            </p>
            
            <div className="space-y-4">
              {researchImplications.map((implication, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-blue-200 dark:border-blue-700"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                      {implication.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        {implication.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {implication.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Research Directions */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Future Research Directions</h3>
            <p className="text-purple-100 text-lg">
              MAST opens concrete research problems for the community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-3">Organizational Design</h4>
              <p className="text-purple-100">
                Develop new architectural patterns that address coordination and specification challenges
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-3">Verification Frameworks</h4>
              <p className="text-purple-100">
                Create robust quality control mechanisms integrated into MAS architectures
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-3">Failure Prevention</h4>
              <p className="text-purple-100">
                Design proactive systems that prevent failures before they occur in multi-agent interactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;
