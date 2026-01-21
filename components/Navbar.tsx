import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'text-reg-blue' : 'text-ink-600';

  return (
    <nav className="fixed w-full z-50 glass-nav h-20 flex items-center top-0">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
            <Link to="/" className="font-sans font-semibold text-2xl tracking-tight text-ink-900 select-none cursor-pointer">
                uncia<span className="text-reg-blue">.ai</span>
            </Link>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
                <Link to="/platform" className={`${isActive('/platform')} hover:text-reg-blue transition-colors`}>Platform</Link>
                <Link to="/developers" className={`${isActive('/developers')} hover:text-reg-blue transition-colors`}>Developers</Link>
                <Link to="/company" className={`${isActive('/company')} hover:text-reg-blue transition-colors`}>Company</Link>
            </div>

            <div className="flex items-center space-x-6">
                <span className="font-mono text-xs text-ink-400 hidden lg:block">REGION: NA_ENT</span>
                <Link to="/contact" className="bg-reg-blue text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm">
                    Request Demo
                </Link>
            </div>
        </div>
    </nav>
  );
};