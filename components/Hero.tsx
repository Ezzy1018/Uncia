import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureDiagram: React.FC = () => {
  // SVG paths and configurations
  const strokeColor = "#E5E5E5";
  const activeStrokeColor = "#2E4C80"; // reg-blue
  
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 bg-surface border border-gray-200 rounded-xl shadow-sm overflow-hidden p-8 md:p-12">
      <div className="relative w-full aspect-[2/1] md:aspect-[3/1]">
        <svg viewBox="0 0 800 260" className="w-full h-full font-mono text-xs">
          {/* Definitions for arrow markers */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill={strokeColor} />
            </marker>
          </defs>

          {/* Left Nodes */}
          <g transform="translate(100, 70)">
             <circle cx="0" cy="0" r="4" fill="white" stroke={strokeColor} strokeWidth="2" />
             <text x="-10" y="25" textAnchor="middle" fill="#A1A1AA" className="text-[10px]">KYC_DATA</text>
          </g>
          <g transform="translate(100, 190)">
             <circle cx="0" cy="0" r="4" fill="white" stroke={strokeColor} strokeWidth="2" />
             <text x="-10" y="25" textAnchor="middle" fill="#A1A1AA" className="text-[10px]">CREDIT_BUREAU</text>
          </g>

          {/* Right Nodes */}
          <g transform="translate(700, 70)">
             <circle cx="0" cy="0" r="4" fill="white" stroke={strokeColor} strokeWidth="2" />
             <text x="10" y="25" textAnchor="middle" fill="#A1A1AA" className="text-[10px]">DECISION</text>
          </g>
          <g transform="translate(700, 190)">
             <circle cx="0" cy="0" r="4" fill="white" stroke={strokeColor} strokeWidth="2" />
             <text x="10" y="25" textAnchor="middle" fill="#A1A1AA" className="text-[10px]">LEDGER</text>
          </g>

          {/* Connecting Lines (Static) */}
          {/* Top Left to Center */}
          <path d="M 120 70 C 250 70, 250 130, 350 130" fill="none" stroke={strokeColor} strokeWidth="1" />
          {/* Bottom Left to Center */}
          <path d="M 120 190 C 250 190, 250 130, 350 130" fill="none" stroke={strokeColor} strokeWidth="1" />
          
          {/* Center to Top Right */}
          <path d="M 450 130 C 550 130, 550 70, 680 70" fill="none" stroke={strokeColor} strokeWidth="1" markerEnd="url(#arrowhead)" />
          {/* Center to Bottom Right */}
          <path d="M 450 130 C 550 130, 550 190, 680 190" fill="none" stroke={strokeColor} strokeWidth="1" markerEnd="url(#arrowhead)" />

          {/* Animated Flow Lines (Dashed overlay) */}
          <path 
            d="M 120 70 C 250 70, 250 130, 350 130" 
            fill="none" 
            stroke={activeStrokeColor} 
            strokeWidth="1.5" 
            strokeDasharray="4 4"
            className="animate-flow opacity-60"
          />
           <path 
            d="M 120 190 C 250 190, 250 130, 350 130" 
            fill="none" 
            stroke={activeStrokeColor} 
            strokeWidth="1.5" 
            strokeDasharray="4 4"
            className="animate-flow opacity-60"
            style={{ animationDelay: '0.5s' }}
          />
           <path 
            d="M 450 130 C 550 130, 550 70, 680 70" 
            fill="none" 
            stroke={activeStrokeColor} 
            strokeWidth="1.5" 
            strokeDasharray="4 4"
            className="animate-flow opacity-60"
            style={{ animationDelay: '1s' }}
          />
           <path 
            d="M 450 130 C 550 130, 550 190, 680 190" 
            fill="none" 
            stroke={activeStrokeColor} 
            strokeWidth="1.5" 
            strokeDasharray="4 4"
            className="animate-flow opacity-60"
            style={{ animationDelay: '1.2s' }}
          />

          {/* Center Hub */}
          <g transform="translate(400, 130)">
            <circle cx="0" cy="0" r="50" fill="#F7F7F5" stroke={activeStrokeColor} strokeWidth="2" />
            <circle cx="0" cy="0" r="45" fill="white" className="opacity-50" />
            <text x="0" y="-5" textAnchor="middle" className="font-sans font-semibold text-sm fill-ink-900">UNCIA</text>
            <text x="0" y="12" textAnchor="middle" className="font-mono text-[10px] fill-reg-blue tracking-wide">CORE_API</text>
            
            {/* Pulse Effect around Hub */}
            <circle cx="0" cy="0" r="50" fill="none" stroke={activeStrokeColor} strokeWidth="1" className="animate-ping opacity-20" />
          </g>

        </svg>
      </div>
    </div>
  );
}

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-pattern grid-bg opacity-30 z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 mb-8 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-growth animate-pulse"></div>
                <span className="font-mono text-xs text-ink-600 tracking-wide uppercase">Uncia Engine v2.0 Live</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-ink-900 mb-6 leading-[1.1]">
                The Operating System for <br className="hidden md:block"/>
                <span className="text-reg-blue">Modern Lending</span>
            </h1>

            <p className="text-lg md:text-xl text-ink-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Originate, manage, and scale compliant loan products on a single modular infrastructure. Built for North American enterprise.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                <Link to="/contact" className="bg-ink-900 text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-800 transition-all w-full sm:w-auto flex items-center justify-center">
                    Talk to an Architect
                </Link>
                <Link to="/developers" className="group flex items-center space-x-2 text-ink-600 hover:text-reg-blue transition-colors px-6 py-3 border border-gray-200 rounded bg-white w-full sm:w-auto justify-center hover:border-gray-300">
                    <span className="text-sm font-medium">Read Documentation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <InfrastructureDiagram />
        </div>
    </section>
  );
};