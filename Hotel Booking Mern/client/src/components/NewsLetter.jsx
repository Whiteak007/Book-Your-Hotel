import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import Title from './Title';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        
        setStatus('submitting');
        
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <motion.div 
            className="flex flex-col items-center max-w-5xl w-full rounded-3xl px-6 py-12 md:py-16 mx-auto my-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Title 
                title="Stay Inspired" 
                subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration." 
                align='center' 
            />
            
            <motion.form 
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.div 
                    className="relative w-full"
                    whileFocus={{ scale: 1.02 }}
                >
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="bg-white/5 backdrop-blur-sm px-6 py-4 border border-white/10 rounded-full outline-none w-full text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                        placeholder="Enter your email" 
                        required
                        disabled={status === 'submitting'}
                    />
                    {isFocused && (
                        <motion.div 
                            className="absolute inset-0 rounded-full border-2 border-blue-400 pointer-events-none"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </motion.div>
                
                <motion.button 
                    type="submit"
                    className={`flex items-center justify-center gap-3 group px-6 py-4 rounded-full font-medium transition-all duration-300 ${
                        status === 'submitting' 
                            ? 'bg-blue-600 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30'
                    }`}
                    whileHover={status !== 'submitting' ? { scale: 1.05 } : {}}
                    whileTap={status !== 'submitting' ? { scale: 0.95 } : {}}
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Subscribing...
                        </span>
                    ) : status === 'success' ? (
                        <span className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Subscribed!
                        </span>
                    ) : (
                        <>
                            Subscribe
                            <img 
                                src={assets.arrowIcon} 
                                alt="arrow-icon" 
                                className='w-4 invert group-hover:translate-x-1 transition-transform duration-300' 
                            />
                        </>
                    )}
                </motion.button>
            </motion.form>
            
            {status === 'success' && (
                <motion.p 
                    className="text-green-400 mt-4 text-sm text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                >
                    Thank you for subscribing! Check your email for confirmation.
                </motion.p>
            )}
            
            <motion.p 
                className="text-gray-400 mt-6 text-sm text-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                By subscribing, you agree to our <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> and consent to receive updates.
            </motion.p>
        </motion.div>
    );
};

export default NewsLetter;