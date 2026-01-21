import React from 'react';

interface FeatureCardProps {
    index: string;
    title: string;
    description: string;
    metaLabel: string;
    metaValue: string;
    metaValueColor?: string; // Tailwind text color class
}

const FeatureCard: React.FC<FeatureCardProps> = ({ index, title, description, metaLabel, metaValue, metaValueColor = "text-ink-900" }) => (
    <div className="bg-surface border border-gray-200 p-8 rounded hover:border-reg-blue transition-colors group">
        <div className="h-12 w-12 bg-paper rounded border border-gray-200 mb-6 flex items-center justify-center font-mono text-reg-blue">
            {index}
        </div>
        <h3 className="font-sans font-medium text-xl text-ink-900 mb-2">{title}</h3>
        <p className="text-ink-600 text-sm leading-relaxed mb-6">
            {description}
        </p>
        <div className="border-t border-gray-100 pt-4">
            <span className="font-mono text-xs text-ink-400">{metaLabel}: </span>
            <span className={`font-mono text-xs ${metaValueColor}`}>{metaValue}</span>
        </div>
    </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <FeatureCard 
                    index="01"
                    title="Speed to Market"
                    description="Launch new loan products in weeks, not years. Modular blocks for origination and servicing."
                    metaLabel="AVG_LAUNCH"
                    metaValue="< 4 WEEKS"
                    metaValueColor="text-growth"
                />

                <FeatureCard 
                    index="02"
                    title="Compliance Native"
                    description="Built for North American regulation. SOC2 Type II ready, audit trails baked into the kernel."
                    metaLabel="SECURITY"
                    metaValue="SOC2 TYPE II"
                />

                <FeatureCard 
                    index="03"
                    title="Enterprise Scale"
                    description="Elastic infrastructure that scales with your book. Tested for millions of daily transactions."
                    metaLabel="UPTIME"
                    metaValue="99.99%"
                    metaValueColor="text-growth"
                />

            </div>
        </div>
    </section>
  );
};