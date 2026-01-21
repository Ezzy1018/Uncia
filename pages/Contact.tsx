import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-ink-900 mb-6">
                    Start building with <span className="text-reg-blue">Uncia.</span>
                </h1>
                <p className="text-xl text-ink-600 mb-12 leading-relaxed">
                    Our team of solution architects is ready to help you design your lending infrastructure. Tell us about what you are building.
                </p>
                
                <div className="space-y-8">
                    <div className="border-l-2 border-reg-blue pl-6">
                        <h3 className="font-medium text-lg text-ink-900 mb-2">Sales Inquiry</h3>
                        <p className="text-ink-600 text-sm mb-1">For platform pricing and enterprise contracts.</p>
                        <a href="mailto:sales@uncia.ai" className="text-reg-blue font-medium text-sm hover:underline">sales@uncia.ai</a>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="font-medium text-lg text-ink-900 mb-2">Technical Support</h3>
                        <p className="text-ink-600 text-sm mb-1">For existing integrations and API help.</p>
                        <a href="mailto:support@uncia.ai" className="text-reg-blue font-medium text-sm hover:underline">support@uncia.ai</a>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-ink-900 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-reg-blue focus:ring-1 focus:ring-reg-blue transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-ink-900 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-reg-blue focus:ring-1 focus:ring-reg-blue transition-all" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-ink-900 mb-2">Work Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-reg-blue focus:ring-1 focus:ring-reg-blue transition-all" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-ink-900 mb-2">Company Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-reg-blue focus:ring-1 focus:ring-reg-blue transition-all" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-ink-900 mb-2">I am interested in...</label>
                        <select className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-reg-blue focus:ring-1 focus:ring-reg-blue transition-all bg-white">
                            <option>Uncia Prime (Ledger)</option>
                            <option>Uncia Leap (Origination)</option>
                            <option>Full Platform Demo</option>
                            <option>Partnership</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-ink-900 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-reg-blue focus:ring-1 focus:ring-reg-blue transition-all"></textarea>
                    </div>

                    <button className="w-full bg-ink-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors">
                        Send Request
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};