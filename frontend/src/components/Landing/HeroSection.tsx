import React, { useState } from 'react';
import { ArrowRight, Menu, X, Play, Shield, Zap } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [demoStep, setDemoStep] = useState<'start' | 'scanning' | 'found' | 'resolved'>('start');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const runDemo = () => {
    setDemoStep('scanning');
    setTimeout(() => setDemoStep('found'), 2000);
    setTimeout(() => setDemoStep('resolved'), 4000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="CorruptGuard Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CorruptGuard
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-gray-600 font-medium">ICP-Powered Anti-Corruption Platform</span>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/nikhlu07/Corruptguard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 font-medium border border-gray-300 px-4 py-2 rounded-lg transition-all hover:border-blue-300 hover:bg-blue-50"
              >
                View on GitHub
              </a>
              <button 
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-25 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  <span>ICP + AI-Powered Security</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Stop Corruption
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Before It Starts
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                  Revolutionary ICP-powered blockchain system that detects government procurement fraud in real-time. 
                  Deploy instantly with immutable transparency and 87% accuracy.
                </p>

                {/* Demo Mode Instructions */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <Play className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Quick Demo Mode</h3>
                      <p className="text-gray-700 mb-3">
                        Don't want to create an ICP identity? No problem! Use our demo mode to explore all features instantly:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Click "Get Started" → "Demo Mode" → "Main Government"</li>
                        <li>• Access full dashboard without authentication</li>
                        <li>• Perfect for testing and video demonstrations</li>
                        <li>• All features work exactly like the real system</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onGetStarted}
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Start Protecting Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <a 
                  href="https://github.com/nikhlu07/Corruptguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>View on GitHub</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">87%</div>
                  <div className="text-gray-600 text-sm">Detection Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2.4s</div>
                  <div className="text-gray-600 text-sm">ICP Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Immutable</div>
                </div>
              </div>
            </div>

            {/* Right Side - Demo Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                
                <div className="relative z-10">
                  {/* Demo Status */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    
                    {demoStep === 'start' && (
                      <div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto mb-2"></div>
                        <p className="text-gray-600 text-sm">Ready for Demo</p>
                      </div>
                    )}
                    
                    {demoStep === 'scanning' && (
                      <div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                        <p className="text-blue-600 text-sm">Scanning for fraud...</p>
                      </div>
                    )}
                    
                    {demoStep === 'found' && (
                      <div>
                        <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-red-600 text-sm">Fraud detected!</p>
                      </div>
                    )}
                    
                    {demoStep === 'resolved' && (
                      <div>
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-green-600 text-sm">Recorded on ICP</p>
                      </div>
                    )}
                  </div>

                  {/* Demo Button */}
                  <button
                    onClick={runDemo}
                    disabled={demoStep !== 'start' && demoStep !== 'resolved'}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                  >
                    {demoStep === 'start' && 'Try Live Demo'}
                    {demoStep === 'scanning' && 'Scanning...'}
                    {demoStep === 'found' && 'Fraud Detected!'}
                    {demoStep === 'resolved' && 'Try Again'}
                  </button>
                  
                  <a 
                    href="https://github.com/nikhlu07/Corruptguard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Source Code</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}