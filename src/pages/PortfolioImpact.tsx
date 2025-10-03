import { motion } from 'framer-motion';
import React from 'react';

const ResponsibilityItem = ({ title, description }: { title: string, description: string }) => (
    <div className="border-l-4 border-brand-primary pl-4 py-2 transition-all duration-300 hover:bg-gray-800/50">
        <h4 className="font-bold text-lg text-white">{title}</h4>
        <p className="text-gray-400">{description}</p>
    </div>
);

const MilestoneCard = ({ date, title, description }: { date: string, title: string, description: string }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:border-brand-primary hover:scale-105">
        <p className="text-sm font-semibold text-brand-secondary mb-1">{date}</p>
        <h4 className="font-bold text-md text-white">{title}</h4>
        <p className="text-xs text-gray-400 mt-2">{description}</p>
    </div>
);

const TestimonialCard = ({ quote, name, title, company }: { quote: string, name: string, title: string, company: string }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col h-full">
         <svg className="w-10 h-10 text-brand-primary/50 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.33,12.49c0,2.5,1.2,4.44,3.17,5.85c-0.62,0.56-1.36,1.06-2.21,1.45c-0.85,0.4-1.62,0.6-2.3,0.6c-1.87,0-3.35-0.63-4.43-1.9c-1.08-1.27-1.62-2.9-1.62-4.9c0-2.5,0.86-4.63,2.58-6.39C6.21,5.42,8.22,4.5,10.5,4.5c0.31,0,0.47,0.15,0.47,0.47v3.35c0,0.2-0.06,0.36-0.17,0.47c-0.11,0.11-0.28,0.17-0.47,0.17c-0.85,0-1.58,0.31-2.21,0.94C7.86,10.5,7.5,11.29,7.5,12.29V12.49z M22.02,12.49c0,2.5,1.2,4.44,3.17,5.85c-0.62,0.56-1.36,1.06-2.21,1.45c-0.85,0.4-1.62,0.6-2.3,0.6c-1.87,0-3.35-0.63-4.43-1.9c-1.08-1.27-1.62-2.9-1.62-4.9c0-2.5,0.86-4.63,2.58-6.39c1.72-1.76,3.73-2.64,6-2.64c0.31,0,0.47,0.15,0.47,0.47v3.35c0,0.2-0.06,0.36-0.17,0.47c-0.11,0.11-0.28,0.17-0.47,0.17c-0.85,0-1.58,0.31-2.21,0.94C20.55,10.5,20.19,11.29,20.19,12.29V12.49z"/>
        </svg>
        <p className="text-gray-300 italic flex-grow">"{quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-bold text-white">{name}</p>
            <p className="text-sm text-brand-secondary">{title}, {company}</p>
        </div>
    </div>
);

const PortfolioImpact = () => {
    const milestones = [
        {
            date: 'Q3 2020',
            title: 'Project Inception & UK Market Research',
            description: 'Initiated the ROTIS project, conducting in-depth analysis of the UK hospitality sector post-Brexit to identify key automation opportunities.'
        },
        {
            date: 'Q1 2021',
            title: 'Technical Architecture Design',
            description: 'Architected the core technical stack, selecting Laravel, SQL Server, and SQL Lite to ensure scalability, flexibility, and performance.'
        },
        {
            date: 'Q4 2021',
            title: 'Prototype Development (Stage 1)',
            description: 'Led the development team to build the operational Stage 1 prototype, focusing on core features for departmental integration and cloud services.'
        },
        {
            date: 'Q2 2022',
            title: 'Client Trial Phase Launch',
            description: 'Successfully managed and launched the 5 to 7-day operational trial for initial clients, gathering critical feedback for future iterations.'
        },
        {
            date: 'Ongoing',
            title: 'AI Integration & Future Roadmapping',
            description: 'Currently overseeing the strategic planning for integrating advanced AI capabilities, such as predictive analytics, into the ROTIS platform.'
        }
    ];

    // UPDATED TESTIMONIALS DATA
    const testimonials = [
        {
            quote: "Architecting the ROTIS backend with Usman was a masterclass in project leadership. His clear vision for the Laravel and SQL architecture made complex integrations feel seamless. A truly exceptional project architect.",
            name: "Muhammad Wasim",
            title: "Lead Developer",
            company: "Dotwasi Tech Solutions Ltd"
        },
        {
            quote: "Working with Usman on the ROTIS trial was a game-changer for our operations. He delivered a robust solution on time and was incredibly responsive to our feedback, demonstrating a deep understanding of our industry's needs.",
            name: "Saqlain Shah",
            title: "Operations Manager",
            company: "Hospitality Innovations Group"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-2 text-white">Usman Yasin: Architecting Global IT Solutions</h1>
            <p className="text-center text-lg text-brand-primary mb-12">Founder, IT Manager, & Lead Project Architect</p>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700"
            >
                <p className="text-gray-300 leading-relaxed mb-8">
                    As the driving force behind Rotis Tech and the chief architect of the ROTIS project, my role extends beyond leadership to the meticulous management of the entire project lifecycle. My focus is on transforming visionary concepts into tangible, high-quality technological solutions that address critical industry needs.
                </p>

                <h3 className="text-2xl font-bold text-brand-secondary mb-6">Core Responsibilities & Impact</h3>
                
                <div className="space-y-6">
                    <ResponsibilityItem 
                        title="Project Lifecycle Management"
                        description="Overseeing projects from conception to completion, managing scope, budget, and resources to ensure alignment with strategic goals."
                    />
                    <ResponsibilityItem 
                        title="Cross-Functional Team Coordination"
                        description="Leading and synchronizing efforts across development, design, and deployment teams to foster collaboration and maximize efficiency."
                    />
                    <ResponsibilityItem 
                        title="Strategic Risk Management"
                        description="Proactively identifying, assessing, and mitigating project risks to prevent delays and ensure smooth execution."
                    />
                     <ResponsibilityItem 
                        title="Quality Assurance & Delivery"
                        description="Establishing and enforcing rigorous quality standards to deliver projects on time, within budget, and exceeding stakeholder expectations."
                    />
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-brand-secondary mb-10 text-center">Key Project Milestones Timeline</h3>
                    
                    <div className="hidden md:block relative px-4">
                        <div className="absolute left-1/2 top-2 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
                        <div className="space-y-4">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex items-center w-full">
                                    <div className="w-1/2 flex justify-end pr-8">
                                        {index % 2 === 0 && <div className="w-full max-w-sm"><MilestoneCard {...milestone} /></div>}
                                    </div>
                                    
                                    <div className="w-12 h-12 rounded-full bg-brand-primary border-4 border-gray-800 shrink-0 z-10 flex items-center justify-center font-bold text-white">{index+1}</div>

                                    <div className="w-1/2 pl-8">
                                        {index % 2 !== 0 && <div className="w-full max-w-sm"><MilestoneCard {...milestone} /></div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden relative">
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700" aria-hidden="true"></div>
                        <div className="relative space-y-8 pl-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-primary border-4 border-gray-800 shrink-0 z-10 flex items-center justify-center font-bold text-white">{index+1}</div>
                                    <MilestoneCard {...milestone} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-brand-secondary mb-10 text-center">Collaborator & Client Testimonials</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
                
                <div className="mt-16 border-t border-gray-700 pt-6">
                    <h3 className="text-xl font-semibold text-white">Proven Track Record</h3>
                    <p className="text-gray-300">My leadership has consistently resulted in the successful delivery of complex projects, demonstrating a strong ability to navigate technical challenges and drive innovation in a competitive landscape.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default PortfolioImpact;