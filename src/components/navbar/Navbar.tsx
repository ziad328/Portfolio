import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const linkClasses = "text-xs sm:text-sm font-medium text-zinc-400 dark:text-zinc-500 py-3 px-2 sm:px-3 whitespace-nowrap transition-colors duration-200 hover:text-white dark:hover:text-white";
    const mobileLinkClasses = "block w-full px-4 py-3 text-sm text-zinc-300 dark:text-zinc-400 hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-200 hover:text-white dark:hover:text-white text-left";
    // Handle click outside to close mobile menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);
    return (
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl z-50">
            <div className="flex items-center justify-between px-4 py-1 sm:px-5 sm:py-2 bg-black/40 dark:bg-black/60 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl shadow-lg transition-all duration-200 hover:bg-black/50 dark:hover:bg-black/70 hover:border-white/25 dark:hover:border-white/20 hover:shadow-xl">
                {/* Brand */}
                <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight cursor-pointer transition-colors duration-150">
                        React Bits
                    </span>
                </div>
                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 sm:gap-2 md:gap-3">
                    <NavLink to="/" className={linkClasses}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" className={linkClasses}>
                        My Work
                    </NavLink>
                    <NavLink to="/about" className={linkClasses}>
                        About me
                    </NavLink>
                    <NavLink to="/stack" className={linkClasses}>
                        Stack
                    </NavLink>
                    <NavLink to="/contact" className={linkClasses}>
                        Contact
                    </NavLink>
                </div>
                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-5 h-5 text-white" />
                    ) : (
                        <Menu className="w-5 h-5 text-white" />
                    )}
                </button>
            </div>
            {/* Mobile Menu Dropdown with Animation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 dark:bg-black/98 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden"
                    >
                        <NavLink
                            to="/"
                            className={mobileLinkClasses}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={mobileLinkClasses}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            My Work
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={mobileLinkClasses}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About me
                        </NavLink>
                        <NavLink
                            to="/stack"
                            className={mobileLinkClasses}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Stack
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={mobileLinkClasses}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
export default Navbar;