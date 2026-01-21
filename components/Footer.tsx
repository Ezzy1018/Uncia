import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-gray-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
                <h2 className="font-sans font-medium text-2xl text-ink-900 mb-6">Ready to build?</h2>
                <Link to="/contact" className="inline-block bg-reg-blue text-white px-6 py-3 rounded text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm">
                    Contact Sales
                </Link>
            </div>
            
            <div>
                <h4 className="font-mono text-xs text-ink-400 mb-6 uppercase">Platform</h4>
                <ul className="space-y-3 text-sm text-ink-600">
                    <li><Link to="/platform" className="hover:text-reg-blue transition-colors">Uncia Prime</Link></li>
                    <li><Link to="/platform" className="hover:text-reg-blue transition-colors">Uncia Leap</Link></li>
                    <li><Link to="/platform" className="hover:text-reg-blue transition-colors">Uncia Flow</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-mono text-xs text-ink-400 mb-6 uppercase">Company</h4>
                <ul className="space-y-3 text-sm text-ink-600">
                    <li><Link to="/company" className="hover:text-reg-blue transition-colors">About Us</Link></li>
                    <li><Link to="/company" className="hover:text-reg-blue transition-colors">Careers</Link></li>
                    <li><Link to="/company" className="hover:text-reg-blue transition-colors">Security</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-mono text-xs text-ink-400 mb-6 uppercase">Resources</h4>
                <ul className="space-y-3 text-sm text-ink-600">
                    <li><Link to="/developers" className="hover:text-reg-blue transition-colors">Documentation</Link></li>
                    <li><Link to="/developers" className="hover:text-reg-blue transition-colors">API Reference</Link></li>
                    <li><Link to="/developers" className="hover:text-reg-blue transition-colors">Status</Link></li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-sans text-xs text-ink-400">
                &copy; 2025 Uncia Inc. All rights reserved.
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-growth animate-[pulse_3s_infinite]"></div>
                <span className="font-mono text-xs text-ink-600">SYSTEM STATUS: OPERATIONAL</span>
            </div>
        </div>
    </footer>
  );
};