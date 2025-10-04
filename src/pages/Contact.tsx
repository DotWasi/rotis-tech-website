// ========================================================================
// START OF FILE: src/pages/Contact.tsx (UPDATED FOR NETLIFY FORMS)
// ========================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    // This state helps us show "Sending..." and success/error messages to the user.
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    // This function handles the form submission in the background without a page refresh.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default browser page reload
        setStatus('loading');

        const formData = new FormData(event.currentTarget);

        try {
            // This sends the form data to Netlify's backend.
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setStatusMessage('Thank you for your message! We will get back to you shortly.');
                setStatus('success');
                (event.target as HTMLFormElement).reset(); // Clear the form fields
            } else {
                // If something goes wrong on Netlify's side
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // If there's a network error or other issue
            setStatusMessage('An error occurred. Please try again later.');
            setStatus('error');
        }
    };

    return (
        <div>
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white">Connect With Us</h1>
                <p className="text-lg text-brand-primary mt-2">We're here to answer your questions and explore opportunities.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column: The Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700"
                >
                    <h2 className="text-3xl font-bold text-brand-secondary mb-6">Send a Message</h2>
                    
                    {/* --- THIS FORM TAG IS THE MOST IMPORTANT PART --- */}
                    <form
                        name="contact"      // This name must match the hidden input's value
                        method="POST"
                        data-netlify="true" // This is the "magic" attribute that enables Netlify Forms
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* This hidden input is required for Netlify to recognize the form */}
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea name="message" id="message" rows={5} required className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
                        </div>
                        <div>
                            <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-500 disabled:cursor-not-allowed">
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {statusMessage && (
                            <div className={`p-4 rounded-md text-center text-sm ${status === 'success' ? 'bg-green-900/50 border border-green-600 text-green-300' : 'bg-red-900/50 border border-red-600 text-red-300'}`}>
                                {statusMessage}
                            </div>
                        )}
                    </form>
                </motion.div>

                {/* Right Column: Details & Map (This part remains the same) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* The rest of the contact info and map code is unchanged and will work perfectly */}
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

// ========================================================================
// END OF FILE
// ========================================================================