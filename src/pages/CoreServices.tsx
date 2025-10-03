import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

// Data for all 16 services
const services = [
    // Category 1: AI & Automation Solutions
    {
        category: "AI & Automation Solutions",
        title: "Generative AI & LLM Integration",
        description: "Harness the power of Large Language Models. We build custom chatbots, content generation tools, and intelligent assistants powered by state-of-the-art Generative AI.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>,
        image: "/images/service-gen-ai.jpg",
        features: ["Custom Chatbots", "RAG Systems", "AI Content Creation", "API Integration"]
    },
    {
        category: "AI & Automation Solutions",
        title: "Predictive Analytics & Forecasting",
        description: "Turn your data into a strategic asset. We build predictive models to forecast sales, identify market trends, and optimize operations, giving you a competitive edge.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
        image: "/images/service-analytics.jpg",
        features: ["Demand Forecasting", "Churn Analysis", "Price Optimization", "Risk Assessment"]
    },
    {
        category: "AI & Automation Solutions",
        title: "Computer Vision Systems",
        description: "Enable your systems to see and understand the world. We develop computer vision solutions for quality control, security monitoring, and real-world data analysis.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.376a4.5 4.5 0 01-6.084-6.084m6.084 6.084a4.5 4.5 0 006.084-6.084m-6.084 6.084L21 15m-4.958-3.624a4.5 4.5 0 016.084 6.084m-6.084-6.084L3 9m12.042 8.376a4.5 4.5 0 00-6.084-6.084m6.084 6.084L9 3" /></svg>,
        image: "/images/service-vision.jpg",
        features: ["Object Detection", "Facial Recognition", "Automated Inspection", "Video Analytics"]
    },
    // Category 2: Software Engineering
    {
        category: "Custom Software Engineering",
        title: "Enterprise Web Applications",
        description: "We build scalable, secure, and high-performance web applications tailored to your complex business processes. From CRMs to internal dashboards, we deliver robust solutions.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
        image: "/images/service-enterprise.jpg",
        features: ["SaaS Platforms", "Custom ERP/CRM", "B2B Portals", "Data Visualization"]
    },
    {
        category: "Custom Software Engineering",
        title: "Cross-Platform Mobile Apps",
        description: "Reach your audience on any device. We develop beautiful and performant mobile applications for iOS and Android using modern frameworks for rapid delivery.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
        image: "/images/service-mobile.jpg",
        features: ["React Native Dev", "User-Centric Design", "Push Notifications", "Offline Capabilities"]
    },
    {
        category: "Custom Software Engineering",
        title: "API Development & Integration",
        description: "We build secure, well-documented, and scalable APIs that allow your systems to communicate seamlessly. We also specialize in integrating third-party services.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>,
        image: "/images/service-api.jpg",
        features: ["REST & GraphQL APIs", "Microservices", "Third-Party Integrations", "Secure Authentication"]
    },
    {
        category: "Custom Software Engineering",
        title: "Professional UI/UX Design",
        description: "A great product starts with a great user experience. Our design process focuses on creating intuitive, engaging, and visually stunning interfaces that users love.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.622-3.385m-5.043 5.025a15.998 15.998 0 01-3.388-1.622m5.043 5.025a15.998 15.998 0 013.388 1.622m0 0a4.5 4.5 0 10-6.364-6.364m6.364 6.364l-4.243-4.243" /></svg>,
        image: "/images/service-ui-ux.jpg",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    // Category 3: Cloud & DevOps
    {
        category: "Cloud & DevOps Infrastructure",
        title: "Cloud Architecture & Migration",
        description: "We design and implement scalable, secure, and cost-effective cloud infrastructures on AWS, Azure, or GCP, and manage seamless migrations from on-premise systems.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-2.43-2.43A3.75 3.75 0 0013.5 3H12a4.5 4.5 0 00-4.5 4.5v.75" /></svg>,
        image: "/images/service-cloud.jpg",
        features: ["AWS/Azure/GCP", "Serverless", "Cloud Migration", "Cost Optimization"]
    },
    // ... Add more services here if you have more images
];

// THIS IS THE COMPONENT THAT WAS MISSING BEFORE
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const isReversed = index % 2 !== 0;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className={`bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className="lg:w-2/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <img src={service.image} alt={service.title} className="w-full h-64 lg:h-full object-cover" />
            </div>
            <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-primary flex-shrink-0 bg-brand-dark p-3 rounded-full">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div>
                    <h4 className="font-semibold text-brand-secondary mb-3">Key Areas:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
                        {service.features.map((feature: string) => (
                            <li key={feature} className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const CoreServices = () => {
    const categories = [...new Set(services.map(s => s.category))];

    return (
        <div>
            <div className="text-center mb-20">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-extrabold text-white"
                >
                    Our Suite of Modern Solutions
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-lg text-brand-primary"
                >
                    Delivering the building blocks for the Fourth Industrial Revolution.
                </motion.p>
            </div>

            <div className="space-y-20">
                {categories.map(category => (
                    <div key={category}>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold text-brand-secondary mb-10 text-center"
                        >
                            {category}
                        </motion.h2>
                        <div className="space-y-12">
                            {services.filter(s => s.category === category).map((service, index) => (
                                <ServiceCard key={service.title} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="mt-24 text-center bg-gray-800/50 py-16 px-8 rounded-xl border border-brand-primary/20 shadow-xl bg-grid-pattern"
            >
                 <h2 className="text-3xl font-bold text-white mb-4">Let's Architect Your Future</h2>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                     Our expertise is the catalyst for your transformation. Let's discuss how our advanced technology solutions can drive your business forward.
                 </p>
                 <NavLink 
                    to="/contact"
                    className="inline-block px-10 py-4 text-lg font-semibold text-white bg-brand-primary rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Schedule a Consultation
                </NavLink>
            </motion.section>
        </div>
    );
};

export default CoreServices;