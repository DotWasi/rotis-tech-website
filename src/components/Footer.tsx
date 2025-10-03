import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 border-t border-brand-primary/20 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white">Rotis Tech (Private) Limited</h3>
                    <p className="mt-2 text-sm">
                        Awan Town, Qasimabad, Peshawar Road, Rawalpindi.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                        <span>Phone: (+92) 300 1351900, (+92) 300 5301504</span>
                        <span className="hidden sm:inline">|</span>
                        <a href="mailto:info@rotis.pk" className="hover:text-brand-primary transition-colors">Email: info@rotis.pk</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Rotis Tech (Private) Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; // <-- THIS IS THE CRUCIAL LINE