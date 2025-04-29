import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      key={testimonial.id}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out min-w-[300px] md:min-w-[350px]" // Added min-w
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div>
            <p className="font-playfair text-xl text-gray-800">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-4">
          <StarRating rating={testimonial.rating} />
          <p className="text-gray-500 text-sm">({testimonial.rating})</p>
        </div>
        <p className="text-gray-700 mt-4 line-clamp-3 md:line-clamp-none">
          "{testimonial.review}"
        </p>
      </div>
    </motion.div>
  );
};

const Testimonial = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <Title
          title="What Our Guests Say"
          subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, duration: 0.4 }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonial;