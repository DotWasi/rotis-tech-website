// ========================================================================
// START OF FILE: src/components/WhatsAppButton.tsx
// ========================================================================

import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    // --- CONFIGURATION ---
    // Replace this with your full WhatsApp number in international format.
    // Do NOT include '+', '00', or any spaces/dashes.
    // Example for Pakistan: 923001234567
    const phoneNumber = "923001351900"; 

    // This is the default message that will appear in the user's WhatsApp chat box.
    const message = "Hello! I'm visiting the Rotis Tech website and have a question.";
    
    // This creates the final URL.
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank" // Opens WhatsApp in a new tab/app
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
            // Animation properties
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, type: 'spring' }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* WhatsApp Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.474.851-1.24 4.505 4.595-1.207-.855.486z" />
            </svg>
        </motion.a>
    );
};

export default WhatsAppButton;

// ========================================================================
// END OF FILE
// ========================================================================