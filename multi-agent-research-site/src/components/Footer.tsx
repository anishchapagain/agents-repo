import React from 'react';
import { Github, Mail, ExternalLink, Download, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'MAST Framework', id: 'mast-framework' },
    { name: 'Research Methodology', id: 'methodology' },
    { name: 'Key Findings', id: 'findings' },
    { name: 'Practical Applications', id: 'applications' },
    { name: 'Research Team', id: 'authors' }
  ];

  const resources = [
    { name: 'Download Paper', icon: <Download size={16} />, link: '#' },
    { name: 'GitHub Repository', icon: <Github size={16} />, link: '#' },
    { name: 'Dataset Access', icon: <ExternalLink size={16} />, link: '#' },
    { name: 'Evaluation Pipeline', icon: <ExternalLink size={16} />, link: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                MAST Research
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Multi-Agent System Failure Taxonomy — The first empirically grounded framework 
                for understanding and addressing failures in multi-agent LLM systems.
              </p>
              <div className="flex space-x-4">
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                  <Github size={20} />
                </button>
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                  <Mail size={20} />
                </button>
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Navigation</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <div className="space-y-2">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="flex items-center space-x-2 text-slate-300 hover:text-white 
                             transition-colors duration-200"
                  >
                    {resource.icon}
                    <span>{resource.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Citation Information */}
        <div className="border-t border-slate-800 py-8">
          <div className="bg-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-4">Citation</h4>
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap">
{`@article{cemri2025mast,
  title={Why Do Multi-Agent LLM Systems Fail?},
  author={Cemri, Mert and Pan, Melissa Z. and Yang, Shuyi and 
          Agrawal, Lakshya A and Chopra, Bhavya and Tiwari, Rishabh and
          Keutzer, Kurt and Parameswaran, Aditya and Klein, Dan and
          Ramchandran, Kannan and Zaharia, Matei and Gonzalez, Joseph E. and
          Stoica, Ion},
  journal={arXiv preprint},
  year={2025},
  institution={UC Berkeley, Intesa Sanpaolo}
}`}
              </pre>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                             transition-colors duration-200">
              Copy Citation
            </button>
          </div>
        </div>

        {/* Research Stats */}
        <div className="border-t border-slate-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-slate-400">Traces Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">14</div>
              <div className="text-slate-400">Failure Modes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">0.88</div>
              <div className="text-slate-400">Cohen's Kappa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">7</div>
              <div className="text-slate-400">MAS Frameworks</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 UC Berkeley & Intesa Sanpaolo. Research released under MIT License.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-slate-400 text-sm">
                Last updated: June 2025
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
