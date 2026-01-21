import React from 'react';

export const TrustedBy: React.FC = () => {
  return (
    <section className="border-b border-gray-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-xs text-center text-ink-400 mb-8 uppercase tracking-widest">
                Trusted infrastructure for regulated lenders
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
                <div className="font-sans font-bold text-xl text-gray-400">CITADEL</div>
                <div className="font-sans font-bold text-xl text-gray-400">FORTRESS</div>
                <div className="font-sans font-bold text-xl text-gray-400">APEX BANK</div>
                <div className="font-sans font-bold text-xl text-gray-400">MERIDIAN</div>
                <div className="font-sans font-bold text-xl text-gray-400">SOVEREIGN</div>
            </div>
        </div>
    </section>
  );
};