import { motion } from 'framer-motion';
import React from 'react';

// ... (FeatureShowcase and PillarCard components remain the same as before)
const FeatureShowcase = ({ feature, isReversed }: { feature: any, isReversed: boolean }) => {
  const flexDirection = isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className={`flex flex-col ${flexDirection} items-center bg-gray-800/40 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50`}>
      <div className="lg:w-1/2 w-full">
        <img src={feature.image} alt={feature.title} className="w-full h-64 lg:h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="lg:w-1/2 w-full p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-brand-primary flex-shrink-0">{feature.icon}</span>
          <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
        <ul className="space-y-2">
          {feature.benefits.map((benefit: string) => (
            <li key={benefit} className="flex items-center gap-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PillarCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:border-brand-primary hover:-translate-y-1 flex items-center gap-4">
        <div className="text-brand-primary text-3xl">{icon}</div>
        <h3 className="text-md font-bold text-white">{title}</h3>
    </div>
);


const RotisSolution = () => {
    // UPDATED DATA with local image paths
    const solutions = [
        {
            title: "Unified Operations Dashboard",
            description: "The central nervous system of your operation. Gain a 360-degree, real-time view of all activities—from sales and inventory to staff performance—on a single, intuitive interface.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"/></svg>,
            image: "/images/dashboard.jpg", // UPDATED
            benefits: ["Holistic Business Overview", "Data-Driven Decision Making", "Customizable Widgets & Reports", "Multi-Location Monitoring"]
        },
        {
            title: "AI-Powered Sales Forecasting",
            description: "Leverage machine learning to predict future sales trends with high accuracy. Our AI analyzes historical data, seasonality, and even local events to optimize staffing and inventory.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
            image: "/images/forecasting.jpg", // UPDATED
            benefits: ["Reduce Food Waste", "Prevent Stockouts", "Optimize Staff Scheduling", "Maximize Profitability"]
        },
        {
            title: "Automated Inventory & Supply Chain",
            description: "Transform inventory management from a manual chore to an automated, intelligent system. Track stock levels in real-time, receive low-stock alerts, and even generate purchase orders automatically.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
            image: "/images/inventory.jpg", // UPDATED
            benefits: ["Minimize Holding Costs", "Ensure Ingredient Freshness", "Automate Supplier Orders", "Real-Time Stock Visibility"]
        },
        {
            title: "Intelligent Kitchen Display System (KDS)",
            description: "Streamline your kitchen workflow with a smart KDS. Orders are routed intelligently, prioritized based on complexity and wait times, ensuring faster ticket times and higher accuracy.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>,
            image: "/images/kitchen.jpg", // UPDATED
            benefits: ["Reduce Order Errors", "Optimize Prep Times", "Improve Kitchen Communication", "Analyze Station Performance"]
        },
        {
            title: "Dynamic Menu & Pricing Engine",
            description: "Adapt to market changes instantly. Update menu items, descriptions, and pricing across all platforms from a single dashboard. Implement dynamic pricing strategies based on demand or time of day.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"/></svg>,
            image: "/images/menu.jpg", // UPDATED
            benefits: ["Instant Menu Updates", "A/B Test Menu Items", "Profitability Analysis", "Promotional Pricing"]
        },
        {
            title: "Contactless Guest Experience",
            description: "Meet modern expectations with a complete contactless solution. From QR code ordering at the table to seamless mobile payments, provide a safe and convenient experience.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>,
            image: "/images/contactless.jpg", // UPDATED
            benefits: ["Increase Table Turnover", "Reduce Staff Workload", "Enhance Guest Safety", "Integrate Loyalty Programs"]
        },
    ];

    const pillarFeatures = [
        { title: "Cross-Platform Mobility", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
        { title: "Integrated CRM & Loyalty", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
        { title: "Feedback Analysis (NLP)", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> },
        { title: "AI-Powered Scheduling", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
        { title: "Waste Reduction Analytics", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg> },
        { title: "Corporate Cloud Services", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
        { title: "Flexible Database Design", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" /></svg> },
        { title: "Compliance Automation", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a12.025 12.025 0 013.118-1.417" /></svg> },
    ];

    return (
        <div>
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">The ROTIS Intelligent Operations Ecosystem</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-primary">
                    A comprehensive suite of modular, AI-driven solutions designed to automate every facet of the modern hospitality business.
                </p>
            </div>

            <div className="space-y-16">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={solution.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FeatureShowcase feature={solution} isReversed={index % 2 !== 0} />
                    </motion.div>
                ))}
            </div>

            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="mt-24"
            >
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-brand-secondary">Core Pillars of the ROTIS Platform</h2>
                     <p className="mt-2 text-gray-400 max-w-2xl mx-auto">These fundamental features ensure a robust, scalable, and fully integrated solution.</p>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillarFeatures.map(feature => <PillarCard key={feature.title} {...feature} />)}
                </div>
            </motion.section>
        </div>
    );
};

export default RotisSolution;