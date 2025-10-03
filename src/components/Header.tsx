import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const RotisLogo = () => (
    <div className="flex items-center space-x-3">
        <div className="w-12 h-12 flex-shrink-0">
             <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" fill="#0ea5e9">
                <path d="M50,108.42,90,50.08C90,22.46,72.09,0,50,0S10,22.46,10,50.08L50,108.42ZM50,6A44.13,44.13,0,0,1,84.11,47.89c-5.41,21.5-19,39.54-34.11,51.15C34.89,87.43,21.32,69.39,15.89,47.89A44.13,44.13,0,0,1,50,6Z"/>
                <path d="M70,40H30a2.5,2.5,0,0,1,0-5H70a2.5,2.5,0,0,1,0,5Z"/>
                <path d="M67.5,35H60V27.5a2.5,2.5,0,0,0-5,0V35H45V27.5a2.5,2.5,0,0,0-5,0V35H32.5a2.5,2.5,0,0,0,0,5H40V55.15A12.5,12.5,0,0,0,50,65a12.5,12.5,0,0,0,10-7.35V40h7.5a2.5,2.5,0,0,0,0-5ZM50,60a7.5,7.5,0,0,1-7.5-7.5,2.5,2.5,0,0,0-5,0A12.5,12.5,0,0,0,50,65a12.5,12.5,0,0,0,12.5-12.5,2.5,2.5,0,0,0-5,0A7.5,7.5,0,0,1,50,60Z"/>
             </svg>
        </div>
        <div className="text-white">
            <h1 className="text-2xl font-bold">Rotis Tech</h1>
            <p className="text-xs text-gray-400">(Private) Limited</p>
        </div>
    </div>
);

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-company' },
    { name: 'The Solution', path: '/solution-rotis' },
    { name: 'My Impact', path: '/portfolio-impact' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Services', path: '/core-services' },
    { name: 'Contact', path: '/contact' },
    { name: 'AI Expertise', path: '/ai-expertise' },
    { name: 'Acclaim', path: '/acclaim-visa' },
    { name: 'Trial/Demo', path: '/trial-demo' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const activeLinkClass = "bg-brand-primary text-white";
    const inactiveLinkClass = "text-gray-300 hover:bg-gray-700 hover:text-white";
    
    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? activeLinkClass : inactiveLinkClass}`;
        
    return (
        <nav className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-primary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/">
                            <RotisLogo />
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                           {navLinks.slice(0, 7).map(link => (
                               <NavLink key={link.name} to={link.path} className={getLinkClass}>
                                   {link.name}
                               </NavLink>
                           ))}
                           <div className="relative" onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)}>
                                <button className={`${inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center`}>
                                    <span>More</span>
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <AnimatePresence>
                                {isMoreOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 top-full pt-2 w-48 z-20 origin-top-right"
                                    >
                                        <div className="bg-gray-800 rounded-md shadow-lg py-1">
                                         {navLinks.slice(7).map(link => (
                                             <NavLink key={link.name} to={link.path} className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'text-brand-primary' : 'text-gray-300'} hover:bg-gray-700`} onClick={() => setIsMoreOpen(false)}>
                                                 {link.name}
                                             </NavLink>
                                         ))}
                                         </div>
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                           <NavLink key={link.name} to={link.path} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`} onClick={() => setIsOpen(false)}>
                               {link.name}
                           </NavLink>
                        ))}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </nav>
    );
};

export default Header; // <-- THIS IS THE CRUCIAL LINE