import { motion } from 'framer-motion';

const TechItem = ({ name, description, icon }: { name: string, description: string, icon: React.ReactNode }) => (
    <motion.div 
        variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
        }}
        className="group relative bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50 text-center transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-center"
    >
        <div className="absolute -inset-px bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300" style={{ filter: 'blur(10px)' }}></div>
        <div className="relative z-10">
            <div className="flex justify-center items-center mb-4 text-white h-12">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    </motion.div>
);


const TechCategory = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
        >
            <h2 className="text-3xl font-bold text-brand-secondary mb-8 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-16 after:h-0.5 after:bg-brand-primary/50">{title}</h2>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {children}
            </motion.div>
        </motion.section>
    );
};


const TechStack = () => {
    return (
        <div>
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Technology Ecosystem</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-primary">
                    A curated selection of modern, scalable, and robust technologies that power our innovative solutions.
                </p>
            </div>

            <TechCategory title="Core Backend">
                <TechItem 
                    name="Laravel Framework"
                    description="The core of our backend, providing a robust, scalable, and secure foundation for application logic."
                    icon={<svg className="h-12 w-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M13.338 0 0 4.075l5.255 2.21L13.338 0zm-2.09 3.033L0 7.108l5.255 2.21 6.002-6.285zM0 10.14l5.255 2.21L0 14.56l5.255-2.21zm10.51 3.235L0 17.445l13.338 6.555 5.4-10.27-7.718-3.235zM24 4.075 10.662 0l-5.4 10.27L24 4.075zm-3.116 3.65L10.662 3.033l-2.08 3.94L20.884 7.725zM10.662 10.14l-5.4 10.27L24 14.56l-8.083-2.21-5.255-2.21z"/></svg>}
                />
                 <TechItem 
                    name="SQL Server"
                    description="Primary database for enterprise deployments, ensuring high performance and data integrity."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.25 18.75h-3v-3.75h3v3.75zm0-6.25h-3v-3.75h3v3.75zm7.5 6.25h-3v-3.75h3v3.75zm0-6.25h-3v-3.75h3v3.75zm3.75 6.25h-3v-3.75h3v3.75zm0-6.25h-3v-3.75h3v3.75z"/></svg>}
                />
                <TechItem 
                    name="SQL Lite"
                    description="Utilized for lightweight, local, or mobile deployments, offering flexibility and offline capabilities."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 3v18h18V3H3zm4.5 3h9v3h-9V6zm0 6h9v6h-9v-6z"/></svg>}
                />
                 <TechItem 
                    name="Python"
                    description="Powering our AI/ML services and complex data processing tasks with its extensive libraries."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#3776AB" d="M11.96,16.4a2.76,2.76,0,0,1-2.76,2.75H7.62a3.3,3.3,0,0,1-3.29-3.29V14.2a0.54,0.54,0,0,1,.54-0.54h2a0.54,0.54,0,0,1,.54,.54v1.66a0.54,0.54,0,0,0,.54,.54h0.58a0.54,0.54,0,0,0,.54-0.54V4.82a0.54,0.54,0,0,1,.54-0.54h2.18a2.76,2.76,0,0,1,2.76,2.76v2.18a0.54,0.54,0,0,1-0.54,.54h-2a0.54,0.54,0,0,1-0.54-0.54V7.57a0.54,0.54,0,0,0-0.54-0.54H11.42a0.54,0.54,0,0,0-.54,.54v8.83Z"/><path fill="#FFD43B" d="M12.04,7.6a2.76,2.76,0,0,1,2.76-2.75h1.58a3.3,3.3,0,0,1,3.29,3.29v1.66a0.54,0.54,0,0,1-0.54,.54h-2a0.54,0.54,0,0,1-0.54-0.54V8.14a0.54,0.54,0,0,0-0.54-0.54h-0.58a0.54,0.54,0,0,0-.54,.54V19.18a0.54,0.54,0,0,1-0.54,.54H12.82a2.76,2.76,0,0,1-2.76-2.76V14.77a0.54,0.54,0,0,1,.54-0.54h2a0.54,0.54,0,0,1,.54,.54v1.65a0.54,0.54,0,0,0,.54,.54h0.58a0.54,0.54,0,0,0,.54-0.54V7.6Z"/></svg>}
                />
            </TechCategory>

             <TechCategory title="Frontend & Design">
                <TechItem 
                    name="React"
                    description="Building dynamic, responsive, and high-performance user interfaces for web applications."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#61DAFB" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /><ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-60 12 12)" fill="#61DAFB" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" fill="#61DAFB" /></svg>}
                />
                <TechItem 
                    name="TypeScript"
                    description="Enhancing code quality and developer productivity with static typing for robust applications."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#3178C6" d="M21.5,2.5H2.5V21.5H21.5V2.5ZM12.87,14.54H10.13V8.8h5.36v2.24h-2.61v1.17h2.4v2.09h-2.4v2.24Z" /></svg>}
                />
                <TechItem 
                    name="Tailwind CSS"
                    description="A utility-first framework for rapidly building custom, modern designs without leaving the HTML."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#06B6D4" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2Zm-1.47,13.1c-0.63,0.63-1.66,0.63-2.29,0-0.63-0.63-0.63-1.66,0-2.29,2.05-2.05,4.1-4.1,6.15-6.15,0.63-0.63,1.66-0.63,2.29,0,0.63,0.63,0.63,1.66,0,2.29-2.05,2.05-4.1,4.1-6.15,6.15Zm-2.68-6.15c0.63-0.63,1.66-0.63,2.29,0,0.63,0.63,0.63,1.66,0,2.29-2.05,2.05-4.1,4.1-6.15,6.15-0.63,0.63-1.66,0.63-2.29,0-0.63-0.63-0.63-1.66,0-2.29,2.05-2.05,4.1-4.1,6.15-6.15Z" /></svg>}
                />
            </TechCategory>

            <TechCategory title="Cloud, DevOps & Infrastructure">
                <TechItem 
                    name="Amazon Web Services"
                    description="Leveraging scalable cloud infrastructure for hosting, storage, and computing power."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#FF9900" d="M13.4,12.7c-0.4-0.2-0.8-0.4-1.2-0.6c-0.3,0.2-0.6,0.4-0.8,0.6C12.1,12.8,12.8,12.8,13.4,12.7z M18.9,13.2c-1.3-1.1-2.9-1.9-4.6-2.2c0.2,0,0.4,0,0.6-0.1c1.8-0.3,3.6-1.1,5-2.2c0.4-0.3,0.5-0.9,0.2-1.3c-0.3-0.4-0.9-0.5-1.3-0.2c-1.8,1.3-3.9,2.1-6.2,2.3c-0.3,0-0.7,0-1,0c-2.3-0.2-4.4-1-6.2-2.3C5.5,6.9,4.9,7,4.6,7.4c-0.3,0.4-0.1,1,0.2,1.3c1.4,1.1,3.2,1.8,5,2.2c0.2,0,0.4,0,0.6,0.1c-1.7,0.3-3.4,1.1-4.6,2.2C4.1,14.5,3.1,16.2,2.6,18c-0.1,0.4,0.1,0.9,0.5,1c0.4,0.1,0.9-0.1,1-0.5c0.5-1.7,1.4-3.2,2.6-4.4c1.5-1.4,3.4-2.2,5.5-2.2s4,0.8,5.5,2.2c1.2,1.2,2.1,2.7,2.6,4.4c0.1,0.4,0.6,0.7,1,0.5c0.4-0.1,0.6-0.6,0.5-1C20.9,16.2,19.9,14.5,18.9,13.2z" /></svg>}
                />
                 <TechItem 
                    name="Docker"
                    description="Containerizing applications to ensure consistency across development and production."
                    icon={<svg className="h-12 w-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#0db7ed" d="M22.12,10.2c-1.2-0.7-3.6-1-4.3-1.1c-0.1,0-0.1-0.1-0.1-0.2c0-0.8-0.1-1.8-0.2-2.3c-0.3-1.2-0.8-2.2-1.7-2.9 c-1.3-1-3.2-1.4-5.1-1.1c-1.6,0.3-2.9,1.2-3.8,2.5C6.2,6.1,5.9,7.3,5.9,8.4c0,0.2,0,0.4-0.1,0.5c-0.5,0.1-1.3,0.2-2.3,0.4 C1.1,10.2,0,11.8,0,13.6c0,2.1,1.7,3.8,3.8,3.8c0.5,0,1-0.1,1.5-0.3V14c0-0.2,0.2-0.4,0.4-0.4h2.4c0.2,0,0.4,0.2,0.4,0.4v3.1h6.1 v-3.1c0-0.2,0.2-0.4,0.4-0.4h2.4c0.2,0,0.4,0.2,0.4,0.4v3.1c0.5,0.2,1,0.3,1.5,0.3c2.1,0,3.8-1.7,3.8-3.8 C24,11.8,23.3,10.8,22.1,10.2z M8.1,7.2h2.2v2.2H8.1V7.2z M11.2,7.2h2.2v2.2h-2.2V7.2z M14.4,7.2h2.2v2.2h-2.2V7.2z M11.2,4.4 h2.2v2.2h-2.2V4.4z"/></svg>}
                />
                <TechItem 
                    name="Kubernetes"
                    description="Orchestrating containerized applications at scale for automated deployment and management."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#326CE5" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2z M12,19.3c-4.04,0-7.3-3.26-7.3-7.3s3.26-7.3,7.3-7.3 s7.3,3.26,7.3,7.3S16.04,19.3,12,19.3z" /><path fill="#326CE5" d="M11.3,12l-4.2-2.4c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.2-0.5,0.4-0.6l4.1-2.4c0.2-0.1,0.4-0.1,0.6,0l4.1,2.4 c0.2,0.1,0.4,0.3,0.4,0.6c0-0.2-0.1-0.4-0.3-0.5L12.1,12C11.9,12.1,11.5,12.1,11.3,12z" /><path fill="#326CE5" d="M11.3,12l-4.2,2.4c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.3,0.2,0.5,0.4,0.6l4.1,2.4c0.2,0.1,0.4,0.1,0.6,0l4.1-2.4 c0.2-0.1,0.4-0.3,0.4-0.6c0-0.2-0.1-0.4-0.3-0.5L12.1,12C11.9,12.1,11.5,12.1,11.3,12z" /></svg>}
                />
            </TechCategory>

            <TechCategory title="AI, Data Science & Project Management">
                <TechItem 
                    name="TensorFlow"
                    description="Building and deploying machine learning models for predictive analytics and intelligent automation."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#FF6F00" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2z M12,17.1c-2.82,0-5.1-2.28-5.1-5.1 s2.28-5.1,5.1-5.1s5.1,2.28,5.1,5.1S14.82,17.1,12,17.1z"/><path fill="#FF6F00" d="M12,8.4c-2.0,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6S14.0,8.4,12,8.4z"/></svg>}
                />
                 <TechItem 
                    name="Jira"
                    description="Managing agile projects with precision, tracking tasks, and ensuring transparent workflows."
                    icon={<svg className="h-10 w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#0052CC" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2z M12.5,17.5L7.5,12.5l5-5l5,5L12.5,17.5z" /></svg>}
                />
                 <TechItem 
                    name="Agile/Scrum"
                    description="Employing iterative development methodologies to deliver value faster and adapt to changing needs."
                    icon={<svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                />
            </TechCategory>
        </div>
    );
};

export default TechStack;