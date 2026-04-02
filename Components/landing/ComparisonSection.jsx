import React from 'react';

const criteria = [
  {
    label: 'Time to results',
    harborne: '2-4 weeks',
    hire: '3-6 months',
    agency: '2-3 months',
    diy: '6+ months',
  },
  {
    label: 'Data quality',
    harborne: '95%+ verified',
    hire: 'Variable',
    agency: 'Generic lists',
    diy: 'Low / unverified',
  },
  {
    label: 'Ongoing maintenance',
    harborne: 'Included',
    hire: 'Manual effort',
    agency: 'Extra cost',
    diy: 'You do it',
  },
  {
    label: 'Enrichment depth',
    harborne: 'AI-powered, multi-source',
    hire: 'Basic tools',
    agency: 'Single source',
    diy: 'Limited',
  },
  {
    label: 'Cost',
    harborne: 'Fixed retainer',
    hire: '\u00A340-60k+ salary',
    agency: '\u00A33-8k/mo, no guarantee',
    diy: 'Your time',
  },
  {
    label: 'GDPR compliant',
    harborne: 'Yes',
    hire: 'Depends on hire',
    agency: 'Often unclear',
    diy: 'Your responsibility',
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="relative py-20 md:py-28 bg-[#111827] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#94A378] font-semibold tracking-wider uppercase mb-3">Compare Your Options</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Compare Your Options
          </h2>
          <p className="text-lg text-[#E5E7EB]/50 max-w-2xl mx-auto">
            See how partnering with Harborne Data stacks up against the alternatives.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm font-medium text-[#E5E7EB]/40 p-5 w-[20%]" />
                <th className="text-left text-sm font-bold text-[#94A378] p-5 bg-[#94A378]/5 w-[20%]">
                  Harborne Data
                </th>
                <th className="text-left text-sm font-medium text-[#E5E7EB]/50 p-5 w-[20%]">
                  Hire In-House
                </th>
                <th className="text-left text-sm font-medium text-[#E5E7EB]/50 p-5 w-[20%]">
                  Marketing Agency
                </th>
                <th className="text-left text-sm font-medium text-[#E5E7EB]/50 p-5 w-[20%]">
                  Do It Yourself
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr key={i} className={i < criteria.length - 1 ? 'border-b border-white/5' : ''}>
                  <td className="text-sm font-medium text-[#E5E7EB]/60 p-5">{row.label}</td>
                  <td className="text-sm font-semibold text-white p-5 bg-[#94A378]/5">{row.harborne}</td>
                  <td className="text-sm text-[#E5E7EB]/40 p-5">{row.hire}</td>
                  <td className="text-sm text-[#E5E7EB]/40 p-5">{row.agency}</td>
                  <td className="text-sm text-[#E5E7EB]/40 p-5">{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {criteria.map((row, i) => (
            <div key={i} className="bg-[#0B0F19] border border-white/10 rounded-xl p-5">
              <p className="text-xs text-[#E5E7EB]/40 font-medium uppercase tracking-wider mb-3">{row.label}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#94A378] font-semibold">Harborne Data</span>
                  <span className="text-sm text-white font-semibold">{row.harborne}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#E5E7EB]/40">Hire In-House</span>
                  <span className="text-sm text-[#E5E7EB]/40">{row.hire}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#E5E7EB]/40">Agency</span>
                  <span className="text-sm text-[#E5E7EB]/40">{row.agency}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#E5E7EB]/40">DIY</span>
                  <span className="text-sm text-[#E5E7EB]/40">{row.diy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
