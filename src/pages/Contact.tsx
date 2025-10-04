// ========================================================================
// START OF FILE: src/pages/Contact.tsx (CORRECTED AND COMPLETE)
// ========================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');
        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setStatusMessage('Thank you for your message! We will get back to you shortly.');
                setStatus('success');
                (event.target as HTMLFormElement).reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
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
                {/* Left Column: Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700"
                >
                    <h2 className="text-3xl font-bold text-brand-secondary mb-6">Send a Message</h2>
                    <form
                        name="contact"
                        method="POST"
						action="/#/contact"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
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

                {/* --- THIS IS THE MISSING RIGHT COLUMN THAT IS NOW RESTORED --- */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-2xl font-bold text-brand-secondary mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Address</h4>
                                    <p className="text-gray-400">Awan Town, Qasimabad, Peshawar Road, Rawalpindi.</p>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <p className="text-gray-400">(+92) 300 1351900</p>
                                    <p className="text-gray-400">(+92) 300 5301504</p>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p className="text-gray-400">Official: <a href="mailto:info@rotis.pk" className="hover:text-brand-primary">info@rotis.pk</a></p>
                                    <p className="text-gray-400">Personal: <a href="mailto:uyasin50@yahoo.com" className="hover:text-brand-primary">uyasin50@yahoo.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.893155325858!2d72.9839880151978!3d33.6598589807141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df959a425656e9%3A0x8f7936865d1136b!2sAwan%20Town%2c%20Rawalpindi%2c%20Punjab%2c%20Pakistan!5e0!3m2!1sen!2s!4v1678886456789!5m2!1sen!2s"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Rotis Tech Location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

// ========================================================================
// END OF FILE
// ========================================================================