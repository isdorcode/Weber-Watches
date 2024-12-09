'use client';

import React, { useState } from 'react';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 29,
      annualPrice: 290,
      description: "Perfect for starters",
      features: [
        "1 Smart Watch", "Basic Health Monitoring", "7-Day Battery Life",
        "Water Resistant"
      ],
      nonFeatures: [
        "GPS Tracking", "Premium Support"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 59,
      annualPrice: 590,
      description: "Ideal for enthusiasts",
      popular: true,
      features: [
        "2 Smart Watches", "Advanced Health Monitoring", "14-Day Battery Life",
        "GPS Tracking"
      ],
      nonFeatures: ["Premium Support"]
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      annualPrice: 990,
      description: "Complete package",
      features: [
        "3 Smart Watches", "Full Health Suite", "30-Day Battery Life",
        "Premium Support"
      ],
      nonFeatures: []
    }
  ];

  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-lg text-gray-600 mb-6">Choose the perfect plan for your needs</p>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <span className={`text-lg ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setIsAnnual(prev => !prev)} className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200">
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual <span className="text-green-500 text-sm">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-xl p-6 shadow-lg bg-white transform transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-[#ccad2f]' : ''}`}>
              {plan.popular && <span className="absolute top-0 right-6 bg-[#ccad2f] text-white px-3 py-1 text-sm rounded-full">Popular</span>}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-3xl font-bold text-gray-900">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span className="text-gray-600 ml-2">/{isAnnual ? 'year' : 'month'}</span>
              </div>
              <button className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors mb-4 ${plan.popular ? 'bg-[#ccad2f] hover:bg-[#b39929]' : 'bg-gray-900 hover:bg-gray-800'}`}>Get Started</button>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.nonFeatures?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-gray-400 flex-shrink-0">✕</span>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;