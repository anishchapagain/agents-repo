import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToMAST = () => {
    const element = document.getElementById('mast-framework');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 
                    dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        <div className="absolute inset-0 bg-[url('/images/ai-hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full 
                        bg-blue-100/80 dark:bg-blue-900/50 
                        text-blue-800 dark:text-blue-200 
                        text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            UC Berkeley & Intesa Sanpaolo Research
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white 
                       leading-tight tracking-tight">
            <span className="block">Why Do</span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                           bg-clip-text text-transparent">
              Multi-Agent LLM
            </span>
            <span className="block">Systems Fail?</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 
                      max-w-4xl mx-auto leading-relaxed">
            Introducing <strong className="text-blue-600 dark:text-blue-400">MAST</strong> — 
            the first empirically grounded taxonomy for understanding and addressing 
            failures in Multi-Agent Systems.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 
                          border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">200+</div>
              <div className="text-slate-600 dark:text-slate-300">Task Traces Analyzed</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 
                          border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">14</div>
              <div className="text-slate-600 dark:text-slate-300">Unique Failure Modes</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 
                          border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0.88</div>
              <div className="text-slate-600 dark:text-slate-300">Cohen's Kappa Score</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button
              onClick={scrollToMAST}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white rounded-2xl font-semibold text-lg
                       hover:from-blue-700 hover:to-indigo-700 
                       transform hover:scale-105 transition-all duration-200
                       shadow-xl hover:shadow-2xl"
            >
              Explore MAST Framework
              <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white/80 dark:bg-slate-800/80 
                               text-slate-700 dark:text-slate-300 
                               rounded-xl font-medium backdrop-blur-sm
                               border border-slate-200/50 dark:border-slate-700/50
                               hover:bg-white dark:hover:bg-slate-700 
                               transition-all duration-200">
                <Download className="inline-block mr-2 w-4 h-4" />
                Download Paper
              </button>
              
              <button className="px-6 py-3 bg-white/80 dark:bg-slate-800/80 
                               text-slate-700 dark:text-slate-300 
                               rounded-xl font-medium backdrop-blur-sm
                               border border-slate-200/50 dark:border-slate-700/50
                               hover:bg-white dark:hover:bg-slate-700 
                               transition-all duration-200">
                <Github className="inline-block mr-2 w-4 h-4" />
                View Code
              </button>
            </div>
          </div>

          {/* Research Quote */}
          <div className="mt-16 max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl italic text-slate-600 dark:text-slate-300 
                                 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm 
                                 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              "Happy families are all alike; each unhappy family is unhappy in its own way."
              <br />
              "Successful systems all work alike; each failing system has its own problems."
              <footer className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                — Tolstoy, 1878 & Berkeley, 2025
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full 
                      flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 
                        animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
