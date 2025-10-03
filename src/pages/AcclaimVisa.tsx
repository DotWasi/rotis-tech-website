import { motion } from 'framer-motion';
import React from 'react';

// ========================================================================
// DATA ARRAYS
// ========================================================================

const documents = [
    {
        category: "Verifiable Documents",
        title: "Lead Architect & IT Manager Certificate",
        description: "Official document from Rotis Tech verifying my critical role, responsibilities, and leadership from August 2020 to present.",
        fileUrl: "/documents/experience_certificate.pdf",
    },
    {
        category: "Verifiable Documents",
        title: "M.S. & B.S. Academic Transcripts",
        description: "Complete academic records from the University of Engineering & Technology and the National University of Computer Sciences.",
        fileUrl: "/documents/educational_transcripts.pdf",
    },
];

const skills = [
    { name: "Project Management (Agile/Scrum)", level: "95%" },
    { name: "Laravel & PHP Development", level: "98%" },
    { name: "SQL Server / SQL Lite", level: "90%" },
    { name: "Cloud Architecture (AWS)", level: "85%" },
    { name: "AI & Predictive Analytics", level: "80%" },
    { name: "DevOps (Docker, CI/CD)", level: "75%" },
];

const experience = [
    {
        date: "August 2020 - Present",
        title: "Founder, IT Manager & Lead Project Architect",
        company: "Rotis Tech (Private) Limited",
        description: "Conceptualized and founded Rotis Tech, leading the architecture and project management of the flagship ROTIS platform. Responsible for the entire SDLC, from market analysis and technical stack selection to team leadership and client trials."
    },
    {
        date: "January 2018 - July 2020",
        title: "Senior Software Engineer",
        company: "Innovate Solutions Inc.",
        description: "Led a team in developing enterprise-level software solutions. Specialized in backend development using PHP/Laravel and database optimization, contributing to a 20% increase in application performance."
    },
    {
        date: "June 2015 - December 2017",
        title: "Software Developer",
        company: "TechCrafters Co.",
        description: "Developed and maintained web applications for various clients. Gained extensive experience in full-stack development, database management, and agile methodologies."
    }
];

// ========================================================================
// REUSABLE COMPONENTS
// ========================================================================

const SkillBar = ({ skill, level }: { skill: string, level: string }) => (
    <div>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-300">{skill}</span>
            <span className="text-sm font-medium text-brand-primary">{level}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <motion.div 
                className="bg-brand-primary h-2.5 rounded-full" 
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </div>
    </div>
);

const TimelineItem = ({ item, isLast = false }: { item: typeof experience[0], isLast?: boolean }) => (
    <li className={!isLast ? "mb-10 ml-6" : "ml-6"}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-primary rounded-full -left-3 ring-8 ring-gray-800">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{item.title}</h3>
        <span className="bg-brand-secondary/20 text-brand-secondary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-0 mb-2 inline-block">{item.company}</span>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{item.date}</time>
        <p className="mb-4 text-base font-normal text-gray-400">{item.description}</p>
    </li>
);

const DocumentCard = ({ doc }: { doc: typeof documents[0] }) => (
    <motion.div
        variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
        }}
        className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col h-full"
    >
        <div className="flex-shrink-0 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 flex-grow">{doc.title}</h3>
        <p className="text-gray-400 text-sm mb-6">{doc.description}</p>
        <a 
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto bg-brand-secondary/80 text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-secondary transition-colors duration-300 flex items-center justify-center gap-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            View Document
        </a>
    </motion.div>
);

// ========================================================================
// MAIN PAGE COMPONENT
// ========================================================================
const AcclaimVisa = () => {
    const docCategories = [...new Set(documents.map(d => d.category))];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div>
             <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white">Digital Dossier & Credentials</h1>
                <p className="text-lg text-brand-primary mt-2">A comprehensive overview of my professional journey, skills, and qualifications.</p>
                <a 
                    href="/documents/Usman-Yasin-CV.pdf"
                    download="Usman-Yasin-CV.pdf"
                    className="inline-block mt-8 bg-brand-primary text-white font-semibold py-3 px-8 rounded-md hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 max-w-xs mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download Full CV (PDF)
                </a>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column: Experience Timeline */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-2"
                >
                    <section>
                        <h2 className="text-3xl font-bold text-brand-secondary mb-8">Professional Experience</h2>
                        <ol className="relative border-l border-gray-700">                  
                            {experience.map((item, index) => (
                                <TimelineItem key={item.date} item={item} isLast={index === experience.length - 1} />
                            ))}
                        </ol>
                    </section>
                </motion.div>
                
                {/* Right Column: Skills & Documents */}
                <motion.aside
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                >
                    <section className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">Core Competencies</h2>
                        <div className="space-y-4">
                            {skills.map(skill => (
                                <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </section>
                </motion.aside>
            </div>

            {/* Document Gallery Section */}
            <div className="mt-24">
                {docCategories.map(category => (
                    <motion.div 
                        key={category}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-brand-secondary mb-8 border-b-2 border-brand-secondary/20 pb-2">{category}</h2>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {documents.filter(d => d.category === category).map(doc => (
                                <DocumentCard key={doc.title} doc={doc} />
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default AcclaimVisa;