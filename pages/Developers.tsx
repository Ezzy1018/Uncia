import React from 'react';
import { Terminal, Book, Code, Server } from 'lucide-react';

export const Developers: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-ink-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern grid-bg opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-10 md:mb-0">
                    <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="font-mono text-xs text-white uppercase">API v2.1 Stable</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-mono font-medium mb-6">Build with Uncia</h1>
                    <p className="text-gray-400 text-lg max-w-xl">
                        A developer-first platform. Robust APIs, webhooks for everything, and idempotent requests.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <button className="bg-white text-ink-900 px-6 py-3 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                            Read the Docs
                        </button>
                        <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded text-sm font-medium hover:border-white transition-colors">
                            Get API Keys
                        </button>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-5/12 bg-black rounded-lg border border-gray-800 p-6 font-mono text-xs shadow-2xl">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                        <span className="text-green-400">POST /v2/loans/create</span>
                        <span className="text-gray-500">200 OK</span>
                    </div>
                    <div className="space-y-1 text-gray-300">
                        <p><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> uncia.loans.create({`{`}</p>
                        <p className="pl-4">borrower_id: <span className="text-yellow-300">"brw_19283"</span>,</p>
                        <p className="pl-4">product_id: <span className="text-yellow-300">"prd_consumer_unsecured"</span>,</p>
                        <p className="pl-4">amount: <span className="text-blue-400">500000</span>,</p>
                        <p className="pl-4">currency: <span className="text-yellow-300">"USD"</span></p>
                        <p>});</p>
                        <p className="text-gray-500 mt-2">// Loan created successfully</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded bg-white hover:border-reg-blue transition-colors cursor-pointer">
                <Book className="w-8 h-8 text-reg-blue mb-4" />
                <h3 className="font-medium text-lg mb-2">Documentation</h3>
                <p className="text-sm text-ink-600">Comprehensive guides and references for integrating Uncia into your stack.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded bg-white hover:border-reg-blue transition-colors cursor-pointer">
                <Code className="w-8 h-8 text-reg-blue mb-4" />
                <h3 className="font-medium text-lg mb-2">SDKs & Libraries</h3>
                <p className="text-sm text-ink-600">Official client libraries for Node.js, Python, Go, and Ruby.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded bg-white hover:border-reg-blue transition-colors cursor-pointer">
                <Server className="w-8 h-8 text-reg-blue mb-4" />
                <h3 className="font-medium text-lg mb-2">API Status</h3>
                <p className="text-sm text-ink-600">Real-time performance metrics and uptime history.</p>
            </div>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-medium mb-8">Recent Changelog</h2>
            <div className="space-y-6">
                {[
                    { date: "Oct 24, 2024", version: "v2.1.4", text: "Added support for variable interest rate schedules in Prime." },
                    { date: "Oct 10, 2024", version: "v2.1.3", text: "New webhook event: `payment.failed` with enhanced error codes." },
                    { date: "Sep 28, 2024", version: "v2.1.0", text: "Released Python SDK v2.0 with improved typing support." }
                ].map((log, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center md:space-x-6 pb-6 border-b border-gray-100 last:border-0">
                        <div className="font-mono text-sm text-ink-400 w-32">{log.date}</div>
                        <div className="font-mono text-xs bg-gray-100 px-2 py-1 rounded text-ink-900 w-fit mb-2 md:mb-0">{log.version}</div>
                        <div className="text-sm text-ink-600">{log.text}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};