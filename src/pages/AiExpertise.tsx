import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAiInsight, generateAiImage } from '../services/geminiService';

// NEW: API Status Component
const ApiStatus = ({ isConfigured }: { isConfigured: boolean }) => {
    return (
        <div className="flex items-center justify-center gap-2 p-2 mb-12 bg-gray-800/50 rounded-full border border-gray-700 max-w-xs mx-auto">
            {isConfigured ? (
                <>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-green-400">Gemini API Connected</span>
                </>
            ) : (
                <>
                    <span className="relative flex h-3 w-3">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-sm text-red-400">API Key Not Configured</span>
                </>
            )}
        </div>
    );
};

// NEW: Skill Card with Icon
const SkillCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 flex items-start gap-4">
        <div className="flex-shrink-0 text-brand-primary mt-1">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-brand-secondary mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

const AiExpertise = () => {
    const [isApiKeyConfigured, setIsApiKeyConfigured] = useState(false);
    
    useEffect(() => {
        // Check if the API key is present
        setIsApiKeyConfigured(!!import.meta.env.VITE_GEMINI_API_KEY);
    }, []);

    const [prompt, setPrompt] = useState('predictive analytics for restaurant inventory');
    const [insight, setInsight] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const [imagePrompt, setImagePrompt] = useState('an autonomous robot chef in a futuristic kitchen');
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [imageError, setImageError] = useState<string | null>(null);

    const handleGenerateInsight = useCallback(async (currentPrompt: string) => {
        if (!isApiKeyConfigured) {
            setError('Cannot generate insight. The Gemini API key is not configured in your .env.local file.');
            return;
        }
        if (!currentPrompt) {
            setError('Please enter a topic.');
            return;
        }
        setLoading(true);
        setError(null);
        setInsight('');
        try {
            const result = await generateAiInsight(currentPrompt);
            setInsight(result);
        } catch (err) {
            setError('Failed to generate insight. Please check your API key and try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [isApiKeyConfigured]);
    
    const handleGenerateImage = useCallback(async (currentPrompt: string) => {
        if (!currentPrompt) {
            setImageError('Please enter a description for the image.');
            return;
        }
        setImageLoading(true);
        setImageError(null);
        setGeneratedImageUrl(null);
        try {
            // Simulate a delay to make it feel more like a generation process
            await new Promise(resolve => setTimeout(resolve, 1500));
            const resultUrl = await generateAiImage(currentPrompt);
            setGeneratedImageUrl(resultUrl);
        } catch (err) {
            setImageError('Failed to generate image concept.');
            console.error(err);
        } finally {
            setImageLoading(false);
        }
    }, []);

    const textPrompts = ["AI for customer service", "Automated inventory management", "Dynamic pricing in restaurants"];
    const imagePrompts = ["Robot barista serving coffee", "Futuristic kitchen with holograms", "Drone delivering food in a city"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="space-y-24">
            <div>
                <h1 className="text-4xl font-extrabold text-center mb-4 text-white">AI & Advanced Skills</h1>
                <p className="text-center text-lg text-brand-primary mb-8">Pioneering the Next Generation of Automation</p>
                <ApiStatus isConfigured={isApiKeyConfigured} />

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-8"
                >
                    <motion.div variants={itemVariants}>
                        <SkillCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 21h16.5M16.5 3.75h.008v.008H16.5V3.75z" /></svg>}
                            title="Predictive Analytics & Risk Forecasting"
                            description="Applying predictive models to ROTIS data to forecast delays, cost overruns, and resource needs, turning risk management from a reactive to a proactive process."
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <SkillCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.542L16.5 21.75l-.398-1.208a3.375 3.375 0 00-2.455-2.456L12.75 18l1.209-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.209a3.375 3.375 0 002.456 2.455L20.25 18l-1.208.398a3.375 3.375 0 00-2.456 2.456z" /></svg>}
                            title="Agentic AI & Workflow Automation"
                            description="Developing autonomous virtual 'agents' that manage tasks and update systems without human input, directly aligning with ROTIS's goal of a human-free operational environment."
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <SkillCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>}
                            title="Intelligent Resource Optimization"
                            description="Using AI to dynamically assign automated tasks based on real-time workload and operational priorities, ensuring maximum efficiency and throughput."
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <SkillCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c.502 0 1.004-.016 1.5-.046M12 21c-.502 0-1.004-.016-1.5-.046M3.75 7.5A2.25 2.25 0 016 5.25h12A2.25 2.25 0 0120.25 7.5v3.75c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125V7.5z" /></svg>}
                            title="NLP-based Risk Identification"
                            description="Leveraging Natural Language Processing to analyze operational data and communications, identifying potential risks and anomalies before they escalate."
                        />
                    </motion.div>
                </motion.div>
            </div>
            
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl border border-gray-700"
            >
                <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">Explore AI in Hospitality (Gemini)</h2>
                <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
                    Enter a topic below to generate AI-powered insights on how advanced technology can be applied to the hospitality industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input 
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerateInsight(prompt)}
                        placeholder="e.g., AI for customer service"
                        className="flex-grow bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        disabled={loading}
                    />
                    <button 
                        onClick={() => handleGenerateInsight(prompt)}
                        disabled={loading || !isApiKeyConfigured}
                        className="px-6 py-2 bg-brand-primary text-white font-semibold rounded-md hover:bg-sky-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? 'Generating...' : 'Generate Insight'}
                    </button>
                </div>
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                    {textPrompts.map(p => (
                        <button key={p} onClick={() => {setPrompt(p); handleGenerateInsight(p);}} className="text-xs bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded-md transition-colors">{p}</button>
                    ))}
                </div>
                
                <AnimatePresence>
                    {error && <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-red-400 text-sm text-center mb-4">{error}</motion.p>}
                </AnimatePresence>
                
                <AnimatePresence>
                {insight && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-6 bg-gray-900 rounded-md border border-gray-700"
                    >
                        <h4 className="text-lg font-semibold text-white mb-2">Generated Insight:</h4>
                        <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{insight}</p>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.section>
            
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl border border-gray-700"
            >
                <h2 className="text-2xl font-bold text-brand-secondary mb-2 text-center">AI-Powered Concept Visualization</h2>
                <p className="text-center text-xs text-gray-500 mb-6">(Client-side simulation)</p>

                <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
                    Describe a scene to create a unique, AI-generated visual concept. For security and performance, this demo simulates the image generation process on the client-side.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input 
                        type="text"
                        value={imagePrompt}
                        onChange={(e) => setImagePrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerateImage(imagePrompt)}
                        placeholder="e.g., a robot serving glowing food"
                        className="flex-grow bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        disabled={imageLoading}
                    />
                    <button 
                        onClick={() => handleGenerateImage(imagePrompt)}
                        disabled={imageLoading}
                        className="px-6 py-2 bg-brand-secondary text-white font-semibold rounded-md hover:bg-teal-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {imageLoading ? 'Visualizing...' : 'Visualize Concept'}
                    </button>
                </div>
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                    {imagePrompts.map(p => (
                        <button key={p} onClick={() => {setImagePrompt(p); handleGenerateImage(p);}} className="text-xs bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded-md transition-colors">{p}</button>
                    ))}
                </div>
                
                <AnimatePresence>
                    {imageError && <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-red-400 text-sm text-center mb-4">{imageError}</motion.p>}
                </AnimatePresence>
                
                <div className="mt-6 flex justify-center items-center h-80 bg-gray-900/50 rounded-md border border-gray-700 overflow-hidden">
                    <AnimatePresence mode="wait">
                    {imageLoading ? (
                        <motion.div key="loader" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-center text-gray-400">
                            <svg className="animate-spin h-8 w-8 text-brand-primary mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Visualizing concept...
                        </motion.div>
                    ) : generatedImageUrl ? (
                        <motion.img key="image" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} src={generatedImageUrl} alt="AI Generated Concept" className="w-full h-full object-cover" />
                    ) : (
                        <motion.p key="placeholder" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-gray-500">Visual concept will appear here</motion.p>
                    )}
                    </AnimatePresence>
                </div>
            </motion.section>
        </div>
    );
};

export default AiExpertise;