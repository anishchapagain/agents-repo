import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const AuthorsSection: React.FC = () => {
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

  const authors = [
    {
      name: "Mert Cemri",
      affiliation: "UC Berkeley",
      role: "Lead Researcher",
      expertise: "Multi-Agent Systems, Machine Learning",
      email: "mcemri@berkeley.edu",
      isCorresponding: true
    },
    {
      name: "Melissa Z. Pan",
      affiliation: "UC Berkeley", 
      role: "Co-Lead Researcher",
      expertise: "AI Systems, Distributed Computing",
      email: "melissa.pan@berkeley.edu",
      isCorresponding: true
    },
    {
      name: "Shuyi Yang",
      affiliation: "Intesa Sanpaolo",
      role: "Research Scientist",
      expertise: "Financial AI, System Architecture",
      email: "shuyi.yang@intesasanpaolo.com"
    },
    {
      name: "Lakshya A Agrawal",
      affiliation: "UC Berkeley",
      role: "Graduate Researcher",
      expertise: "Agent Coordination, NLP"
    },
    {
      name: "Bhavya Chopra",
      affiliation: "UC Berkeley",
      role: "Graduate Researcher", 
      expertise: "System Evaluation, ML"
    },
    {
      name: "Rishabh Tiwari",
      affiliation: "UC Berkeley",
      role: "Graduate Researcher",
      expertise: "AI Safety, System Design"
    }
  ];

  const advisors = [
    {
      name: "Kurt Keutzer",
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Deep Learning, Computer Vision"
    },
    {
      name: "Aditya Parameswaran", 
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Data Systems, Human-Computer Interaction"
    },
    {
      name: "Dan Klein",
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Natural Language Processing, Machine Learning"
    },
    {
      name: "Kannan Ramchandran",
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Information Theory, Signal Processing"
    },
    {
      name: "Matei Zaharia",
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Distributed Systems, Big Data"
    },
    {
      name: "Joseph E. Gonzalez",
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Machine Learning Systems, Graph Analytics"
    },
    {
      name: "Ion Stoica",
      title: "Professor",
      affiliation: "UC Berkeley EECS",
      expertise: "Distributed Systems, Cloud Computing"
    }
  ];

  const institutions = [
    {
      name: "UC Berkeley",
      fullName: "University of California, Berkeley",
      description: "Leading research university with world-class computer science and AI programs",
      image: "/images/uc-berkeley.jpg",
      website: "https://berkeley.edu"
    },
    {
      name: "Intesa Sanpaolo",
      fullName: "Intesa Sanpaolo Innovation Center",
      description: "Leading European banking group with cutting-edge AI research division",
      image: "/images/research-lab.jpg",
      website: "https://www.intesasanpaolo.com"
    }
  ];

  return (
    <section 
      id="authors" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Research <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A collaborative effort between leading researchers at UC Berkeley and 
            industry experts at Intesa Sanpaolo.
          </p>
        </div>

        {/* Lead Authors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Lead Authors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700
                         hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full 
                                mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {author.name}
                    {author.isCorresponding && (
                      <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 
                                     px-2 py-1 rounded-full">
                        Corresponding
                      </span>
                    )}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {author.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                    {author.affiliation}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {author.expertise}
                  </p>
                </div>
                
                {author.email && (
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 
                                     transition-colors duration-200">
                      <Mail size={18} />
                    </button>
                    <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 
                                     transition-colors duration-200">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 
                                     transition-colors duration-200">
                      <Github size={18} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Advisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Faculty Advisors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600
                         hover:bg-white dark:hover:bg-slate-600 transition-all duration-300"
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                  {advisor.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                  {advisor.title}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                  {advisor.affiliation}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  {advisor.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Affiliations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Institutional Collaborations
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {institutions.map((institution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg 
                         border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
                  <img 
                    src={institution.image} 
                    alt={institution.name}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-3xl font-bold text-white text-center">
                      {institution.name}
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {institution.fullName}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {institution.description}
                  </p>
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 
                                   hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span>Visit Website</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Open Source Research</h3>
          <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
            We believe in advancing the field through open collaboration. All our research materials, 
            datasets, and evaluation tools are freely available to the community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="text-xl font-bold mb-2">Dataset</h4>
              <p className="text-green-100 text-sm">200+ annotated conversation traces</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="text-xl font-bold mb-2">Code</h4>
              <p className="text-green-100 text-sm">LLM evaluation pipeline & tools</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h4 className="text-xl font-bold mb-2">Documentation</h4>
              <p className="text-green-100 text-sm">Complete implementation guide</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-8 py-3 bg-white text-green-600 rounded-2xl font-bold
                             hover:bg-green-50 transition-colors duration-200">
              Access Research Materials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
