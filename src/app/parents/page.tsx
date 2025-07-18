"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ParentsPage() {
  return (
    <div className="flex flex-col gap-12 bg-[#F4EEE2]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative min-h-[600px] flex flex-col items-center justify-center px-4 py-16"
        aria-label="Parents Hero"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#074B70] mb-4">For Parents</h1>
        <p className="text-xl text-[#074B70] mb-8">Join Our Community of Inspired Parents</p>
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, 10, 0] }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-[#074B70] text-white rounded-full text-lg font-semibold hover:bg-[#156494] transition-colors"
        >
          Start Your Journey
        </motion.div>
        <motion.div 
          className="absolute -top-20 -left-20 w-32 h-32 rounded-full bg-[#074B70]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#C2B280]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div className="absolute inset-0">
          <motion.div 
            className="absolute w-64 h-64 bg-[#074B70] rounded-full opacity-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>
      </motion.section>

      {/* Parent Engagement Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-3xl shadow flex flex-col gap-8 items-center relative"
        aria-label="Parent Engagement"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Parent Engagement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: [0, 360] }}
              className="text-4xl text-[#C2B280] mb-4"
            >
              🎓
            </motion.div>
            <h3 className="text-xl font-semibold text-[#074B70] mb-2">Parent-Teacher Connection</h3>
            <p className="text-gray-600">Build a strong partnership with teachers to support your child's academic journey.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Parent Portal</h3>
            <p className="text-[#074B70] mb-4">Access your child's academic records and updates.</p>
            <a href="#portal" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Curriculum Guides</h3>
            <p className="text-[#074B70] mb-4">Download grade-specific curriculum information.</p>
            <a href="#curriculum" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">School Calendar</h3>
            <p className="text-[#074B70] mb-4">View important dates and events.</p>
            <a href="#calendar" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
        </div>
      </motion.section>



      {/* Parent Stories Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-[#F4EEE2] rounded-3xl shadow flex flex-col gap-8 items-center"
        aria-label="Parent Stories"
      >
        <h2 className="text-4xl font-bold text-[#074B70] mb-8">Real Parents, Real Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 10, 0] }}
            whileTap={{ scale: 0.95 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-[#E5E5E5] flex flex-col items-center text-center relative"
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-[#074B70] flex items-center justify-center mb-6"
              whileHover={{ scale: 1.2, rotate: [0, 360] }}
              transition={{ duration: 1 }}
            >
              <span className="text-white text-5xl">🌟</span>
            </motion.div>
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">"A Transformative Journey"</h3>
            <p className="text-[#074B70] mb-6">"I've seen my child grow not just academically, but in confidence and character. The teachers are like extended family, always there to support and inspire."</p>
            <p className="text-sm text-[#074B70] font-medium">- Sarah M., Parent of Grade 5 student</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 10, 0] }}
            whileTap={{ scale: 0.95 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-[#E5E5E5] flex flex-col items-center text-center relative"
          >
            <div className="w-24 h-24 rounded-full bg-[#074B70] flex items-center justify-center mb-6">
              <span className="text-white text-5xl">✨</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">"A Community of Support"</h3>
            <p className="text-[#074B70] mb-6">"The parent community here is amazing. We share ideas, support each other, and work together to make our children's education experience the best it can be."</p>
            <p className="text-sm text-[#074B70] font-medium">- David K., Parent of Grade 2 student</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-3xl shadow flex flex-col gap-6 items-center"
        aria-label="Contact Us"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">School Administration</h3>
            <p className="text-[#074B70] mb-4">Contact our administrative team for general inquiries.</p>
            <a href="#administration" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Academic Support</h3>
            <p className="text-[#074B70] mb-4">Questions about curriculum and academic programs.</p>
            <a href="#academics" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}