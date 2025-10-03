import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const TrialDemo = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
        >
            <h1 className="text-4xl font-extrabold text-white">Experience ROTIS Firsthand</h1>
            <p className="text-lg text-brand-primary mt-2 mb-8">Request Your Operational Prototype Trial</p>
            
            <div className="bg-gray-800/50 p-10 rounded-lg shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">Stage 1 is Ready for Deployment</h2>
                <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                    We are pleased to announce that the first stage of the ROTIS project is complete and ready to provide value to clients. The current prototype is fully operational and available for a comprehensive trial period.
                </p>
                
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
                    className="bg-brand-primary/10 border-2 border-dashed border-brand-primary p-6 rounded-lg inline-block mb-8"
                >
                    <p className="text-2xl font-bold text-white">
                        <span className="text-4xl">5 to 7-Day</span>
                        <br/>
                        Operational Trial Period
                    </p>
                </motion.div>

                <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
                    NOTE: To ensure a successful market entry, we have consulted with experts in marketing strategy and pricing. This strategic approach underpins our trial offering and future commercial rollout.
                </p>

                <NavLink 
                    to="/contact"
                    className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-sky-500 transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                    Request Your Trial
                </NavLink>
            </div>
        </motion.div>
    );
};

export default TrialDemo;