import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export const Company: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-ink-900 mb-12">
            Building the rails for <br/> 
            <span className="text-reg-blue">modern credit.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24">
            <div className="col-span-2">
                <p className="text-xl leading-relaxed text-ink-600 mb-6">
                    Credit is the lifeblood of the global economy, yet the infrastructure powering it is stuck in the mainframe era. 
                </p>
                <p className="text-xl leading-relaxed text-ink-600">
                    Uncia was founded to provide a modern, API-first operating system for lending. We abstract away the complexity of compliance, ledgering, and payments so that innovators can focus on expanding access to capital.
                </p>
            </div>
            <div className="space-y-8">
                <div>
                    <div className="font-mono text-xs text-ink-400 mb-1 uppercase">Founded</div>
                    <div className="font-sans text-lg">2021</div>
                </div>
                <div>
                    <div className="font-mono text-xs text-ink-400 mb-1 uppercase">Headquarters</div>
                    <div className="font-sans text-lg flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-reg-blue" />
                        New York, NY
                    </div>
                </div>
                <div>
                    <div className="font-mono text-xs text-ink-400 mb-1 uppercase">Backers</div>
                    <div className="font-sans text-lg">Series B</div>
                </div>
            </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-24">
            <div className="aspect-[21/9] bg-gray-100 w-full relative">
                {/* Placeholder for an office or team image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-reg-blue/20 to-transparent flex items-center justify-center">
                    <span className="font-mono text-ink-400 text-sm">UNCIA_HQ_01.JPG</span>
                </div>
            </div>
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-medium text-2xl mb-2">Precision</h3>
                    <p className="text-sm text-ink-600">We deal in financial truth. Our systems are designed for 100% accuracy and auditability.</p>
                </div>
                <div>
                    <h3 className="font-medium text-2xl mb-2">Transparency</h3>
                    <p className="text-sm text-ink-600">No black boxes. Our code, pricing, and status are open to our partners.</p>
                </div>
                <div>
                    <h3 className="font-medium text-2xl mb-2">Scale</h3>
                    <p className="text-sm text-ink-600">Built for the enterprise. We support millions of daily transactions with sub-second latency.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-medium">Open Positions</h2>
                <a href="#" className="text-reg-blue font-medium hover:underline">View all roles</a>
            </div>
            
            <div className="border-t border-gray-200">
                {[
                    { role: "Senior Backend Engineer, Ledger", loc: "New York / Remote" },
                    { role: "Solutions Architect", loc: "New York" },
                    { role: "Product Counsel", loc: "Remote" },
                    { role: "Head of Partnerships", loc: "San Francisco" }
                ].map((job, i) => (
                    <div key={i} className="group flex justify-between items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer px-4 -mx-4 rounded">
                        <div>
                            <div className="font-medium text-lg text-ink-900 group-hover:text-reg-blue transition-colors">{job.role}</div>
                            <div className="font-mono text-xs text-ink-400 mt-1">{job.loc}</div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-reg-blue transition-colors" />
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};