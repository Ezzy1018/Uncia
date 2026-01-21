import React from 'react';
import { Layers, Activity, GitCommit, Check } from 'lucide-react';

export const Platform: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-white border-b border-gray-200 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center space-x-2 bg-paper border border-gray-200 rounded-full px-3 py-1 mb-6">
             <span className="font-mono text-xs text-ink-600 uppercase">Architecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-ink-900 mb-6 tracking-tight">
            The Lending Stack <br /> <span className="text-reg-blue">Deconstructed</span>
          </h1>
          <p className="text-lg text-ink-600 max-w-2xl leading-relaxed">
            Uncia provides the primitive layers required to build compliant credit products. 
            Use our pre-configured modules or access the raw API to build custom flows.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* Uncia Prime */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center mb-6 text-reg-blue">
                <Layers className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-medium text-ink-900 mb-4">Uncia Prime</h2>
             <p className="text-ink-600 mb-6 leading-relaxed">
                The core ledger and loan management system. Prime handles interest accrual, payment hierarchy, and daily settlement with sub-cent precision. Supports revolving, installment, and interest-only structures out of the box.
             </p>
             <ul className="space-y-3">
                {[
                    "Double-entry accounting core",
                    "Real-time balance updates",
                    "Automated statement generation",
                    "NACHA file generation"
                ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-ink-600">
                        <Check className="w-4 h-4 text-growth" />
                        <span>{item}</span>
                    </li>
                ))}
             </ul>
          </div>
          <div className="bg-ink-900 rounded-lg p-6 shadow-xl text-xs font-mono text-gray-300">
            <div className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-500">prime_ledger.json</span>
            </div>
            <pre className="overflow-x-auto">
{`{
  "ledger_id": "ldg_882930",
  "transaction_type": "INTEREST_ACCRUAL",
  "amount": 42.15,
  "currency": "USD",
  "timestamp": "2024-05-12T00:00:00Z",
  "balance_after": 15420.55,
  "meta": {
     "apr": 0.145,
     "day_count": 1
  }
}`}
            </pre>
          </div>
        </div>

        {/* Uncia Leap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <div className="md:order-2">
             <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center mb-6 text-reg-blue">
                <Activity className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-medium text-ink-900 mb-4">Uncia Leap</h2>
             <p className="text-ink-600 mb-6 leading-relaxed">
                The origination and decision engine. Leap allows credit teams to build decision trees, integrate data providers (KYC/KYB, Bureau), and automate underwriting without writing code.
             </p>
             <ul className="space-y-3">
                {[
                    "Drag-and-drop policy builder",
                    "Instant integration with Experian/TransUnion",
                    "Adverse action notice automation",
                    "Manual review workflow queues"
                ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-ink-600">
                        <Check className="w-4 h-4 text-growth" />
                        <span>{item}</span>
                    </li>
                ))}
             </ul>
          </div>
          <div className="md:order-1 bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
             <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm font-medium">Policy: Prime_v2</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">1</div>
                    <div className="flex-1 h-2 bg-gray-100 rounded overflow-hidden">
                        <div className="w-full h-full bg-blue-500"></div>
                    </div>
                    <span className="text-xs text-ink-600">Identity Check</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">2</div>
                    <div className="flex-1 h-2 bg-gray-100 rounded overflow-hidden">
                        <div className="w-3/4 h-full bg-blue-500"></div>
                    </div>
                    <span className="text-xs text-ink-600">FICO {'>'} 680</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold">3</div>
                    <div className="flex-1 h-2 bg-gray-100 rounded overflow-hidden"></div>
                    <span className="text-xs text-ink-600">DTI Calculation</span>
                </div>
             </div>
          </div>
        </div>

        {/* Uncia Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center mb-6 text-reg-blue">
                <GitCommit className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-medium text-ink-900 mb-4">Uncia Flow</h2>
             <p className="text-ink-600 mb-6 leading-relaxed">
                Workflow automation for servicing. Automate communications (email, SMS, letters) based on loan status triggers. Handle collections, hardship plans, and customer support ticketing.
             </p>
             <ul className="space-y-3">
                {[
                    "Omnichannel communication hub",
                    "State-machine based logic",
                    "Regulatory letter generation",
                    "Agent portal integration"
                ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-ink-600">
                        <Check className="w-4 h-4 text-growth" />
                        <span>{item}</span>
                    </li>
                ))}
             </ul>
          </div>
          <div className="bg-surface border border-gray-200 rounded-lg p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Activity className="w-32 h-32" />
                </div>
                <div className="space-y-4 relative z-10">
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-red-500"></div>
                        <div className="bg-paper p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-xs">
                            <p className="text-xs text-ink-900">Payment failed: Insufficient Funds</p>
                            <span className="text-[10px] text-ink-400">Today 9:41 AM</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="h-8 w-px bg-gray-200"></div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-reg-blue"></div>
                        <div className="bg-white border border-gray-200 p-3 rounded-lg max-w-xs w-full">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="text-[10px] font-bold text-reg-blue uppercase">Trigger Fired</span>
                            </div>
                            <p className="text-xs text-ink-600">Action: Send Retry Email</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>

      </div>
    </div>
  );
};