import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {faqData} from '../assets/assets'

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            className="bg-gray-100 rounded-md shadow-sm mb-2 overflow-hidden"
        >
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={onClick}
                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                whileTap={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            >
                <h4 className="text-lg font-semibold text-gray-700">{question}</h4>
                <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <div
                    key="content"
                    className="px-4 pb-4 text-gray-600"
                >
                    {answer}
                </div>
            )}
        </div>
    );
};

const ContactUs = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle');

    const handleAccordionClick = (index) => {
        setActiveAccordion((prevActive) => (prevActive === index ? null : index));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            // Reset form status after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <motion.div
            className="bg-gray-50 text-gray-800 py-12 md:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 mt-52">
                {/* Contact Us Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        Contact Us
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    We're here to ensure your booking experience is seamless. Whether you have inquiries about our rooms, need help with a reservation, or require any support, please don't hesitate to reach out. Use the contact details provided below, and we'll be happy to assist you.
                    </p>
                </motion.div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Support Email */}
                    <motion.div
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-300 hover:border-blue-500"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="p-2 rounded-full bg-blue-500/10 mr-3">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">Support Email</h3>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">Our dedicated support team is ready to assist you with any questions.</p>
                        <a
                            href="mailto:support@yourhotel.com"
                            className="text-blue-600 hover:text-blue-500 hover:underline inline-flex items-center"
                        >
                            support@yourhotel.com
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Contact Number */}
                    <motion.div
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-300 hover:border-green-500"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="p-2 rounded-full bg-green-500/10 mr-3">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.586a2 2 0 01-2.76.66h-2.433a2 2 0 01-1.982-1.685L5 7h5m5-2h5a2 2 0 012 2v9a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684l-1.498-4.586a2 2 0 012.76-.66h2.433a2 2 0 011.982 1.685L19 12h-5m-8 6h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">Phone Number</h3>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">Call us for immediate assistance during our business hours.</p>
                        <a
                            href="tel:+91815192939"
                            className="text-green-600 hover:text-green-500 hover:underline inline-flex items-center"
                        >
                            +91 815-192939
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Physical Address */}
                    <motion.div
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-300 hover:border-yellow-500"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="p-2 rounded-full bg-yellow-500/10 mr-3">
                                <svg
                                    className="w-6 h-6 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">Our Location</h3>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">Visit us at our office for in-person assistance.</p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-600 hover:text-yellow-500 hover:underline inline-flex items-center"
                        >
                            123 Hotel Street, City Name, State, India
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* FAQ Accordion */}
                <motion.div
                    className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-800 mb-6">Find quick answers to common questions about our services.</p>
                    <div className="space-y-3 ">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={activeAccordion === index}
                                onClick={() => handleAccordionClick(index)}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="bg-white rounded-xl p-6 md:p-8 mt-12 shadow-lg border border-gray-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Send us a Message</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-600 text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                                placeholder="Your Subject"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <motion.button
                                type="submit"
                                className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${formStatus === 'submitting'
                                        ? 'bg-blue-200  cursor-pointer'
                                        : 'bg-blue-200 hover:bg-red-500 cursor-pointer'
                                    }`}
                                whileHover={formStatus === 'idle' ? { scale: 1.02 } : {}}
                                whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
                                disabled={formStatus === 'submitting'}
                            >
                                {formStatus === 'submitting' ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : formStatus === 'success' ? (
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message Sent!
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </motion.button>

                            {formStatus === 'success' && (
                                <motion.div
                                    className="ml-4 text-green-500 text-sm"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    Thank you! We'll get back to you soon.
                                </motion.div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactUs;