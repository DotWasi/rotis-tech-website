import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const ValueCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 text-center transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary">
        <div className="flex justify-center items-center mb-4 text-brand-primary h-12 w-12 mx-auto bg-brand-primary/10 rounded-full">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
);

const TimelineItem = ({ year, title, text, isLast = false }: { year: string, title: string, text: string, isLast?: boolean }) => (
    <div className="relative flex-1">
        <div className="flex items-center flex-col">
            <div className="w-10 h-10 bg-brand-primary rounded-full border-4 border-gray-800 z-10 flex items-center justify-center font-bold text-white">{year}</div>
            <div className="mt-2 text-center">
                <h4 className="font-bold text-brand-secondary">{title}</h4>
                <p className="text-sm text-gray-400 mt-1 max-w-xs">{text}</p>
            </div>
        </div>
        {!isLast && <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-700"></div>}
    </div>
);


const AboutCompany = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-24">
            <section className="relative min-h-[50vh] flex items-center justify-center text-center rounded-xl overflow-hidden -mt-16">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&auto=format&fit=crop" alt="Abstract Technology" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-20 p-8 max-w-4xl">
                     <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Our Mission
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed italic">
                        "To empower the hospitality industry with intelligent automation, creating resilient, efficient, and future-proof operations that thrive in a changing world."
                    </p>
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        title="Pioneering Innovation"
                        text="We are committed to being at the forefront of the Fourth Industrial Revolution, developing cutting-edge solutions that redefine industry standards."
                    />
                    <ValueCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a12.025 12.025 0 013.118-1.417" /></svg>}
                        title="Strategic Resilience"
                        text="Our solutions are designed to address critical market challenges, such as labor shortages, ensuring our clients' businesses are robust and adaptable."
                    />
                    <ValueCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        title="Operational Efficiency"
                        text="At our core, we aim to enhance performance, cost, time, and quality through intelligent automation, delivering tangible value to our partners."
                    />
                </div>
            </motion.section>
            
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Journey: From Concept to Execution</h2>
                <div className="relative flex justify-between items-start">
                    <TimelineItem
                        year="'20"
                        title="The Challenge"
                        text="Identified critical labor shortages and operational inefficiencies in the post-Brexit UK hospitality market."
                    />
                    <TimelineItem
                        year="'21"
                        title="The Vision"
                        text="Architected ROTIS as an execution of the 4th Industrial Revolution, designed for scalability and intelligence."
                    />
                    <TimelineItem
                        year="'22"
                        title="The Prototype"
                        text="Developed and launched the Stage 1 operational prototype, proving the concept with initial client trials."
                    />
                    <TimelineItem
                        year="'24"
                        title="The Future"
                        text="Expanding capabilities with advanced AI and Agentic systems to achieve full operational autonomy."
                        isLast
                    />
                </div>
            </motion.section>

             <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col md:flex-row items-center gap-8"
            >
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=120&auto=format&fit=crop" alt="Usman Yasin" className="w-32 h-32 rounded-full object-cover border-4 border-brand-primary" />
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-brand-secondary">Meet the Visionary</h3>
                    <p className="text-gray-300 mt-2 italic">
                        "Technology is the critical link that empowers industries to not just survive, but to lead in the face of profound change. At Rotis Tech, we are forging that link."
                    </p>
                    <p className="text-white font-semibold mt-4">- Usman Yasin, Founder & Lead Project Architect</p>
                    <NavLink to="/portfolio-impact" className="inline-block mt-4 text-sm text-brand-primary hover:underline">
                        Learn more about my impact &rarr;
                    </NavLink>
                </div>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                 <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Revolution?</h2>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                     Discover how the ROTIS ecosystem can transform your operations and prepare your business for the future of hospitality.
                 </p>
                 <NavLink 
                    to="/solution-rotis"
                    className="inline-block px-10 py-4 text-lg font-semibold text-white bg-brand-primary rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Explore The Solution
                </NavLink>
            </motion.section>
        </motion.div>
    );
};

export default AboutCompany;